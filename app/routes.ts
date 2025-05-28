import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/home/page.tsx"),
  layout("routes/detail/layout.tsx", [
    route("/detail/:detailId", "routes/detail/page.tsx"),
    route(
      "/detail/:detailId/registration",
      "routes/detail/registration/page.tsx"
    ),
  ]),
  route(
    "/detail/registration/receipt",
    "routes/detail/registration/receipt/page.tsx"
  ),
  layout("routes/auth/layout.tsx", [
    route("/login", "routes/auth/login.tsx"),
    route("/register", "routes/auth/register.tsx"),
  ]),
  layout("routes/status/layout.tsx", [
    route("/status/registration", "routes/status/registration/page.tsx"),
  ]),
  route("/dashboard", "routes/dashboard/layout.tsx", [
    route("activities", "routes/dashboard/activities/page.tsx"),
    route("activity/create", "routes/dashboard/activity/create/page.tsx"),
    route(
      "activity/registrations",
      "routes/dashboard/activity/registrations/page.tsx"
    ),
  ]),
] satisfies RouteConfig;
