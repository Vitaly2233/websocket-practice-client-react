import Auth from "../Pages/Auth";
import Interface from "../Pages/Interface";

export const publicRoutes = [{ path: "/auth", component: Auth, exact: true }];

export const privateRoutes = [
  { path: "/interface", component: Interface, exact: true },
];
