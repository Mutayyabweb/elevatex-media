import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, L as Layout, T as TrendingUp } from "./index-D06-h7eS.js";
import { C as ChartColumn } from "./chart-column-CQ7gfXX1.js";
import { F as FileText } from "./file-text-Bs5ZmYz8.js";
import { E as Eye } from "./eye-D596aClo.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  [
    "path",
    {
      d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
      key: "ct8e1f"
    }
  ],
  ["path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242", key: "151rxh" }],
  [
    "path",
    {
      d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
      key: "13bj9a"
    }
  ],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
];
const EyeOff = createLucideIcon("eye-off", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
];
const Lock = createLucideIcon("lock", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
];
const MessageSquare = createLucideIcon("message-square", __iconNode);
const dashboardFeatures = [
  {
    icon: TrendingUp,
    label: "Campaign Performance",
    desc: "Live metrics across all your active campaigns"
  },
  {
    icon: ChartColumn,
    label: "Revenue Attribution",
    desc: "See exactly which channels drive your revenue"
  },
  {
    icon: FileText,
    label: "Monthly Reports",
    desc: "Access all historical reports and strategy docs"
  },
  {
    icon: MessageSquare,
    label: "Team Messaging",
    desc: "Message your account manager directly"
  }
];
function ClientLogin() {
  const [email, setEmail] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const [showPass, setShowPass] = reactExports.useState(false);
  const [errors, setErrors] = reactExports.useState(
    {}
  );
  const [submitted, setSubmitted] = reactExports.useState(false);
  function validate() {
    const errs = {};
    if (!email.trim()) errs.email = "Email address is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = "Please enter a valid email.";
    if (!password) errs.password = "Password is required.";
    else if (password.length < 6)
      errs.password = "Password must be at least 6 characters.";
    return errs;
  }
  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-[calc(100vh-200px)] flex items-stretch", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden lg:flex lg:w-1/2 bg-primary flex-col justify-between p-12 relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 opacity-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-80 h-80 bg-accent rounded-full blur-3xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 bg-primary-foreground/15 border border-primary-foreground/30 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-5 h-5 text-primary-foreground" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl font-display font-bold text-primary-foreground", children: "RevenueCloudFX" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-display font-bold text-primary-foreground leading-tight mb-4", children: "Your marketing data, all in one place." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/80 text-base leading-relaxed", children: "Access real-time campaign performance, revenue attribution, reports, and direct communication with your dedicated ElevateX Media team." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 space-y-4", children: dashboardFeatures.map((f) => {
        const Icon = f.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 bg-primary-foreground/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-4 h-4 text-primary-foreground" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground font-semibold text-sm", children: f.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/60 text-xs", children: f.desc })
          ] })
        ] }, f.label);
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex items-center justify-center p-8 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full max-w-md", children: submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", "data-ocid": "login-success", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-8 h-8 text-primary-foreground" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-display font-bold text-foreground mb-3", children: "Login Submitted" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed mb-6", children: "This is a demo — no authentication is active yet. To access your dashboard, please contact your account manager directly." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/contact",
          className: "inline-flex items-center gap-2 button-primary text-sm",
          children: "Contact Your Account Manager"
        }
      )
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-display font-bold text-foreground mb-2", children: "Client Login" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "Access your RevenueCloudFX dashboard to view live campaign performance and reports." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, noValidate: true, className: "space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "label",
            {
              htmlFor: "login-email",
              className: "block text-sm font-semibold text-foreground mb-1.5",
              children: "Email Address"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              id: "login-email",
              type: "email",
              value: email,
              onChange: (e) => setEmail(e.target.value),
              onBlur: () => {
                if (!email.trim())
                  setErrors((p) => ({
                    ...p,
                    email: "Email address is required."
                  }));
                else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
                  setErrors((p) => ({
                    ...p,
                    email: "Please enter a valid email."
                  }));
                else setErrors((p) => ({ ...p, email: void 0 }));
              },
              placeholder: "you@company.com",
              className: `w-full px-4 py-3 rounded-lg border text-sm bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-smooth ${errors.email ? "border-destructive" : "border-input"}`,
              "data-ocid": "login-email-input",
              autoComplete: "email"
            }
          ),
          errors.email && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-destructive text-xs mt-1", children: errors.email })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "label",
              {
                htmlFor: "login-password",
                className: "block text-sm font-semibold text-foreground",
                children: "Password"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                className: "text-xs text-primary hover:underline",
                "data-ocid": "login-forgot-password",
                children: "Forgot password?"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                id: "login-password",
                type: showPass ? "text" : "password",
                value: password,
                onChange: (e) => setPassword(e.target.value),
                onBlur: () => {
                  if (!password)
                    setErrors((p) => ({
                      ...p,
                      password: "Password is required."
                    }));
                  else if (password.length < 6)
                    setErrors((p) => ({
                      ...p,
                      password: "Password must be at least 6 characters."
                    }));
                  else
                    setErrors((p) => ({ ...p, password: void 0 }));
                },
                placeholder: "••••••••",
                className: `w-full px-4 py-3 pr-11 rounded-lg border text-sm bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-smooth ${errors.password ? "border-destructive" : "border-input"}`,
                "data-ocid": "login-password-input",
                autoComplete: "current-password"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setShowPass((v) => !v),
                className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-smooth",
                "aria-label": showPass ? "Hide password" : "Show password",
                "data-ocid": "login-toggle-password",
                children: showPass ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "w-4 h-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-4 h-4" })
              }
            )
          ] }),
          errors.password && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-destructive text-xs mt-1", children: errors.password })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "submit",
            className: "w-full button-primary text-center",
            "data-ocid": "login-submit",
            children: "Sign In to Dashboard"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 pt-6 border-t border-border text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
          "Not a client yet?",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "/contact",
              className: "text-primary font-semibold hover:underline",
              children: "Get started with ElevateX"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-3", children: [
          "Having trouble logging in?",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "mailto:info@elevatexmedia.com?subject=Client Login Support",
              className: "text-primary hover:underline",
              "data-ocid": "login-support-link",
              children: "Contact support"
            }
          )
        ] })
      ] })
    ] }) }) })
  ] }) });
}
export {
  ClientLogin
};
