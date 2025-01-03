import { createHashRouter } from "react-router";
import App from "./App";

const appRoutes: AppRoute[] = [
  { path: "/", element: <App /> },
  // { path: "/", element: <App /> },
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

interface AppRoute {
  path: string;
  element: JSX.Element;
}
