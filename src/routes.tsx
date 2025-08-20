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

export const router = createHashRouter(appRoutes);
