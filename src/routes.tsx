import { createHashRouter, RouteObject } from "react-router";
import App from "./App";
import HanaroDetails from "./pages/details/HanaroDetails";

const appRoutes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [{ path: "/thehanaro", element: <HanaroDetails /> }],
  },
];

export const router = createHashRouter(appRoutes, {
  future: {
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,
  },
});
