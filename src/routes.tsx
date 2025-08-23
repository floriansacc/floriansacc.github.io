import { createHashRouter, RouteObject } from "react-router";
import App from "./App";
import HanaroDetails from "./pages/details/HanaroDetails";
// import LocaplaceDetails from "./pages/details/LocaplaceDetails";

const appRoutes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/thehanaro", element: <HanaroDetails /> },
      // { path: "/locaplace", element: <LocaplaceDetails /> },
    ],
  },
];

export const router = createHashRouter(appRoutes);
