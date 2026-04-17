import { Layout } from "@/components/layout/Layout";
import { NotFound } from "@/pages/NotFound";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
  redirect,
} from "@tanstack/react-router";
import { Suspense, lazy } from "react";

// Lazy-loaded pages
const Home = lazy(() =>
  import("@/pages/Home").then((m) => ({ default: m.Home })),
);
const Services = lazy(() =>
  import("@/pages/Services").then((m) => ({ default: m.Services })),
);
const ServiceDetail = lazy(() =>
  import("@/pages/ServiceDetail").then((m) => ({ default: m.ServiceDetail })),
);
const Portfolio = lazy(() =>
  import("@/pages/Portfolio").then((m) => ({ default: m.Portfolio })),
);
const CaseStudyDetail = lazy(() =>
  import("@/pages/CaseStudyDetail").then((m) => ({
    default: m.CaseStudyDetail,
  })),
);
const About = lazy(() =>
  import("@/pages/About").then((m) => ({ default: m.About })),
);
const Contact = lazy(() =>
  import("@/pages/Contact").then((m) => ({ default: m.Contact })),
);
const Blog = lazy(() =>
  import("@/pages/Blog").then((m) => ({ default: m.Blog })),
);
const BlogPost = lazy(() =>
  import("@/pages/BlogPost").then((m) => ({ default: m.BlogPost })),
);
const FAQ = lazy(() => import("@/pages/FAQ").then((m) => ({ default: m.FAQ })));
const Pricing = lazy(() =>
  import("@/pages/Pricing").then((m) => ({ default: m.Pricing })),
);
const Team = lazy(() =>
  import("@/pages/Team").then((m) => ({ default: m.Team })),
);
const Careers = lazy(() =>
  import("@/pages/Careers").then((m) => ({ default: m.Careers })),
);
const Resources = lazy(() =>
  import("@/pages/Resources").then((m) => ({ default: m.Resources })),
);
const Testimonials = lazy(() =>
  import("@/pages/Testimonials").then((m) => ({ default: m.Testimonials })),
);
const Integrations = lazy(() =>
  import("@/pages/Integrations").then((m) => ({ default: m.Integrations })),
);
const ClientLogin = lazy(() =>
  import("@/pages/ClientLogin").then((m) => ({ default: m.ClientLogin })),
);
const Privacy = lazy(() =>
  import("@/pages/Privacy").then((m) => ({ default: m.Privacy })),
);
const Terms = lazy(() =>
  import("@/pages/Terms").then((m) => ({ default: m.Terms })),
);
const Sitemap = lazy(() =>
  import("@/pages/Sitemap").then((m) => ({ default: m.Sitemap })),
);

function PageLoader() {
  return (
    <Layout>
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
          <p className="text-sm text-muted-foreground">Loading…</p>
        </div>
      </div>
    </Layout>
  );
}

// Root route
const rootRoute = createRootRoute({
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <Outlet />
    </Suspense>
  ),
  notFoundComponent: () => <NotFound />,
});

// Routes
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => <Home />,
});

const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services",
  component: () => <Services />,
});

const serviceDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/$slug",
  component: () => <ServiceDetail />,
});

const portfolioRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/portfolio",
  component: () => <Portfolio />,
});

const caseStudyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/portfolio/$id",
  component: () => <CaseStudyDetail />,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: () => <About />,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: () => <Contact />,
});

const blogRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/blog",
  component: () => <Blog />,
});

const blogPostRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/blog/$id",
  component: () => <BlogPost />,
});

const faqRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/faq",
  component: () => <FAQ />,
});

const pricingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/pricing",
  component: () => <Pricing />,
});

const teamRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/team",
  component: () => <Team />,
});

const careersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/careers",
  component: () => <Careers />,
});

const resourcesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/resources",
  component: () => <Resources />,
});

const testimonialsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/testimonials",
  component: () => <Testimonials />,
});

const integrationsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/integrations",
  component: () => <Integrations />,
});

const clientLoginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/client-login",
  component: () => <ClientLogin />,
});

const privacyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/privacy",
  component: () => <Privacy />,
});

const termsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/terms",
  component: () => <Terms />,
});

const sitemapRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/sitemap",
  component: () => <Sitemap />,
});

const notFoundRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/404",
  component: () => <NotFound />,
});

// Catch-all redirect to 404
const catchAllRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "$",
  beforeLoad: () => {
    throw redirect({ to: "/404" });
  },
  component: () => null,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  servicesRoute,
  serviceDetailRoute,
  portfolioRoute,
  caseStudyRoute,
  aboutRoute,
  contactRoute,
  blogRoute,
  blogPostRoute,
  faqRoute,
  pricingRoute,
  teamRoute,
  careersRoute,
  resourcesRoute,
  testimonialsRoute,
  integrationsRoute,
  clientLoginRoute,
  privacyRoute,
  termsRoute,
  sitemapRoute,
  notFoundRoute,
  catchAllRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
