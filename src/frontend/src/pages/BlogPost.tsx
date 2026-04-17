import { Layout } from "@/components/layout/Layout";
import { Badge } from "@/components/shared/Badge";
import { BreadcrumbNav } from "@/components/shared/BreadcrumbNav";
import { blogPosts } from "@/data/blog";
import type { BlogPost as BlogPostType } from "@/types";
import { Link, notFound, useParams } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  Bell,
  Calendar,
  Clock,
  User,
} from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const categoryImages: Record<string, string> = {
  SEO: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=1200&q=80",
  PPC: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
  "Social Media":
    "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&q=80",
  "Content Marketing":
    "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&q=80",
  "Web Design":
    "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80",
  "Email Marketing":
    "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=1200&q=80",
  Analytics:
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
};

function getPostImage(post: BlogPostType): string {
  return (
    categoryImages[post.category] ??
    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&q=80"
  );
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function renderContent(content: string): React.ReactNode[] {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let key = 0;
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (line.startsWith("## ")) {
      elements.push(
        <motion.h2
          key={key++}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-display font-bold text-foreground mt-10 mb-4"
        >
          {line.slice(3)}
        </motion.h2>,
      );
    } else if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        items.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <motion.ul
          key={key++}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="list-disc list-inside space-y-1.5 mb-5 text-muted-foreground pl-2"
        >
          {items.map((item) => {
            const parts = item.split(/\*\*(.*?)\*\*/g);
            return (
              <li key={item}>
                {parts.map((part, idx) =>
                  idx % 2 === 1 ? (
                    <strong
                      key={`bold-${idx}-${part.slice(0, 8)}`}
                      className="text-foreground font-semibold"
                    >
                      {part}
                    </strong>
                  ) : (
                    part
                  ),
                )}
              </li>
            );
          })}
        </motion.ul>,
      );
      continue;
    } else if (line.trim() !== "") {
      const parts = line.split(/\*\*(.*?)\*\*/g);
      const k = key++;
      elements.push(
        <motion.p
          key={k}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-muted-foreground leading-relaxed mb-4"
        >
          {parts.map((part, idx) =>
            idx % 2 === 1 ? (
              <strong
                key={`bold-${idx}-${part.slice(0, 8)}`}
                className="text-foreground font-semibold"
              >
                {part}
              </strong>
            ) : (
              part
            ),
          )}
        </motion.p>,
      );
    }
    i++;
  }
  return elements;
}

function RelatedCard({ post, index }: { post: BlogPostType; index: number }) {
  const imgSrc =
    categoryImages[post.category] ??
    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&q=80";
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        to="/blog/$id"
        params={{ id: post.id }}
        className="group block bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all duration-300"
        data-ocid="related-post-card"
      >
        <div className="h-36 overflow-hidden bg-muted">
          <img
            src={imgSrc}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="p-4">
          <Badge variant="default" size="sm" className="mb-2">
            {post.category}
          </Badge>
          <h3 className="text-sm font-semibold text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-colors duration-200">
            {post.title}
          </h3>
          <p className="text-xs text-muted-foreground mt-1.5 flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {post.readTime}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}

export function BlogPost() {
  const { id } = useParams({ from: "/blog/$id" });
  const post = blogPosts.find((p) => p.id === id);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  if (!post) {
    notFound();
    return null;
  }

  const imgSrc = getPostImage(post);
  const related = blogPosts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 3);
  const displayRelated =
    related.length >= 3
      ? related
      : [
          ...related,
          ...blogPosts
            .filter((p) => p.id !== post.id && !related.includes(p))
            .slice(0, 3 - related.length),
        ];

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-muted/30 border-b border-border">
        <div className="container mx-auto px-4 lg:px-8 py-3">
          <BreadcrumbNav
            crumbs={[{ label: "Blog", to: "/blog" }, { label: post.title }]}
          />
        </div>
      </div>

      {/* Hero Image with Parallax */}
      <div ref={heroRef} className="relative h-80 lg:h-[480px] overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 scale-110">
          <img
            src={imgSrc}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
          <div className="container mx-auto max-w-3xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="default" size="lg" className="mb-4">
                {post.category}
              </Badge>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-3xl lg:text-5xl font-display font-bold text-white leading-tight"
            >
              {post.title}
            </motion.h1>
          </div>
        </div>
      </div>

      {/* Article Meta */}
      <section className="bg-card border-b border-border py-5">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-3xl mx-auto flex flex-wrap items-center gap-5 text-sm text-muted-foreground"
          >
            <span className="flex items-center gap-1.5">
              <div className="w-7 h-7 bg-primary rounded-full flex items-center justify-center">
                <User className="w-3.5 h-3.5 text-primary-foreground" />
              </div>
              <span className="font-medium text-foreground">{post.author}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </motion.div>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <article className="max-w-3xl mx-auto">
            {renderContent(post.content)}
            <div className="pt-10 mt-10 border-t border-border flex flex-wrap items-center justify-between gap-4">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                data-ocid="back-to-blog"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Blog
              </Link>
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  to="/contact"
                  className="button-primary inline-flex items-center gap-2 px-6 py-3 text-sm"
                  data-ocid="blog-post-cta"
                >
                  Get a Free Proposal <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </article>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-xl mx-auto text-center"
          >
            <div className="relative inline-block mb-4">
              <motion.div
                animate={{ scale: [1, 1.06, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
                className="absolute inset-0 rounded-full bg-primary/30 blur-lg"
              />
              <div className="relative w-14 h-14 bg-primary rounded-full flex items-center justify-center mx-auto">
                <Bell className="w-6 h-6 text-primary-foreground" />
              </div>
            </div>
            <h3 className="text-xl font-display font-bold text-foreground mb-2">
              Get Insights in Your Inbox
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              Join 5,000+ marketers who read our weekly digest.
            </p>
            <div className="flex gap-3 max-w-sm mx-auto">
              <input
                type="email"
                placeholder="you@company.com"
                className="flex-1 px-4 py-2.5 rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm"
                data-ocid="newsletter-email-input"
              />
              <motion.button
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="px-5 py-2.5 bg-primary text-primary-foreground rounded-md text-sm font-semibold hover:opacity-90 transition-opacity"
                data-ocid="newsletter-submit"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Posts */}
      {displayRelated.length > 0 && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-heading-md text-foreground mb-8"
              >
                Related Articles
              </motion.h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
                {displayRelated.map((p, i) => (
                  <RelatedCard key={p.id} post={p} index={i} />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-display font-bold text-primary-foreground mb-4"
            >
              Ready to Apply These Strategies?
            </motion.h2>
            <p className="text-primary-foreground/80 mb-8 leading-relaxed">
              Our team implements these exact strategies for businesses like
              yours. Let&apos;s talk about your goals.
            </p>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-4 rounded-md font-bold text-base hover:opacity-90 transition-opacity"
                data-ocid="blogpost-bottom-cta"
              >
                Start a Conversation <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
