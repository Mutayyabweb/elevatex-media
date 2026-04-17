import { j as jsxRuntimeExports, a as Link, aI as House } from "./index-D06-h7eS.js";
import { C as ChevronRight } from "./chevron-right-1kC-Y_C-.js";
function BreadcrumbNav({ crumbs }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "nav",
    {
      "aria-label": "Breadcrumb",
      className: "flex items-center gap-1 text-sm text-muted-foreground flex-wrap",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/",
            className: "flex items-center gap-1 hover:text-primary transition-smooth",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(House, { className: "w-3.5 h-3.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Home" })
            ]
          }
        ),
        crumbs.map((crumb) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3.5 h-3.5 opacity-50" }),
          crumb.to ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: crumb.to,
              className: "hover:text-primary transition-smooth",
              children: crumb.label
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: crumb.label })
        ] }, crumb.label))
      ]
    }
  );
}
export {
  BreadcrumbNav as B
};
