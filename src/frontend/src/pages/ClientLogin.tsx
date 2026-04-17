import { Layout } from "@/components/layout/Layout";
import {
  BarChart3,
  Eye,
  EyeOff,
  FileText,
  Lock,
  MessageSquare,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";

const dashboardFeatures = [
  {
    icon: TrendingUp,
    label: "Campaign Performance",
    desc: "Live metrics across all your active campaigns",
  },
  {
    icon: BarChart3,
    label: "Revenue Attribution",
    desc: "See exactly which channels drive your revenue",
  },
  {
    icon: FileText,
    label: "Monthly Reports",
    desc: "Access all historical reports and strategy docs",
  },
  {
    icon: MessageSquare,
    label: "Team Messaging",
    desc: "Message your account manager directly",
  },
];

export function ClientLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {},
  );
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const errs: typeof errors = {};
    if (!email.trim()) errs.email = "Email address is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = "Please enter a valid email.";
    if (!password) errs.password = "Password is required.";
    else if (password.length < 6)
      errs.password = "Password must be at least 6 characters.";
    return errs;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
    }
  }

  return (
    <Layout>
      <div className="min-h-[calc(100vh-200px)] flex items-stretch">
        {/* Left Panel — Branding */}
        <div className="hidden lg:flex lg:w-1/2 bg-primary flex-col justify-between p-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-80 h-80 bg-accent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-10 h-10 bg-primary-foreground/15 border border-primary-foreground/30 rounded-lg flex items-center justify-center">
                <Lock className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-display font-bold text-primary-foreground">
                RevenueCloudFX
              </span>
            </div>
            <h2 className="text-4xl font-display font-bold text-primary-foreground leading-tight mb-4">
              Your marketing data, all in one place.
            </h2>
            <p className="text-primary-foreground/80 text-base leading-relaxed">
              Access real-time campaign performance, revenue attribution,
              reports, and direct communication with your dedicated ElevateX
              Media team.
            </p>
          </div>
          <div className="relative z-10 space-y-4">
            {dashboardFeatures.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.label} className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary-foreground/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-primary-foreground font-semibold text-sm">
                      {f.label}
                    </p>
                    <p className="text-primary-foreground/60 text-xs">
                      {f.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Panel — Form */}
        <div className="flex-1 flex items-center justify-center p-8 bg-background">
          <div className="w-full max-w-md">
            {submitted ? (
              <div className="text-center" data-ocid="login-success">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Lock className="w-8 h-8 text-primary-foreground" />
                </div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-3">
                  Login Submitted
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  This is a demo — no authentication is active yet. To access
                  your dashboard, please contact your account manager directly.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 button-primary text-sm"
                >
                  Contact Your Account Manager
                </a>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <h1 className="text-3xl font-display font-bold text-foreground mb-2">
                    Client Login
                  </h1>
                  <p className="text-muted-foreground text-sm">
                    Access your RevenueCloudFX dashboard to view live campaign
                    performance and reports.
                  </p>
                </div>

                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Email */}
                  <div>
                    <label
                      htmlFor="login-email"
                      className="block text-sm font-semibold text-foreground mb-1.5"
                    >
                      Email Address
                    </label>
                    <input
                      id="login-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onBlur={() => {
                        if (!email.trim())
                          setErrors((p) => ({
                            ...p,
                            email: "Email address is required.",
                          }));
                        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
                          setErrors((p) => ({
                            ...p,
                            email: "Please enter a valid email.",
                          }));
                        else setErrors((p) => ({ ...p, email: undefined }));
                      }}
                      placeholder="you@company.com"
                      className={`w-full px-4 py-3 rounded-lg border text-sm bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-smooth ${
                        errors.email ? "border-destructive" : "border-input"
                      }`}
                      data-ocid="login-email-input"
                      autoComplete="email"
                    />
                    {errors.email && (
                      <p className="text-destructive text-xs mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Password */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label
                        htmlFor="login-password"
                        className="block text-sm font-semibold text-foreground"
                      >
                        Password
                      </label>
                      <button
                        type="button"
                        className="text-xs text-primary hover:underline"
                        data-ocid="login-forgot-password"
                      >
                        Forgot password?
                      </button>
                    </div>
                    <div className="relative">
                      <input
                        id="login-password"
                        type={showPass ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onBlur={() => {
                          if (!password)
                            setErrors((p) => ({
                              ...p,
                              password: "Password is required.",
                            }));
                          else if (password.length < 6)
                            setErrors((p) => ({
                              ...p,
                              password:
                                "Password must be at least 6 characters.",
                            }));
                          else
                            setErrors((p) => ({ ...p, password: undefined }));
                        }}
                        placeholder="••••••••"
                        className={`w-full px-4 py-3 pr-11 rounded-lg border text-sm bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-smooth ${
                          errors.password
                            ? "border-destructive"
                            : "border-input"
                        }`}
                        data-ocid="login-password-input"
                        autoComplete="current-password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPass((v) => !v)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-smooth"
                        aria-label={
                          showPass ? "Hide password" : "Show password"
                        }
                        data-ocid="login-toggle-password"
                      >
                        {showPass ? (
                          <EyeOff className="w-4 h-4" />
                        ) : (
                          <Eye className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                    {errors.password && (
                      <p className="text-destructive text-xs mt-1">
                        {errors.password}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full button-primary text-center"
                    data-ocid="login-submit"
                  >
                    Sign In to Dashboard
                  </button>
                </form>

                <div className="mt-8 pt-6 border-t border-border text-center">
                  <p className="text-sm text-muted-foreground">
                    Not a client yet?{" "}
                    <a
                      href="/contact"
                      className="text-primary font-semibold hover:underline"
                    >
                      Get started with ElevateX
                    </a>
                  </p>
                  <p className="text-xs text-muted-foreground mt-3">
                    Having trouble logging in?{" "}
                    <a
                      href="mailto:info@elevatexmedia.com?subject=Client Login Support"
                      className="text-primary hover:underline"
                      data-ocid="login-support-link"
                    >
                      Contact support
                    </a>
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
