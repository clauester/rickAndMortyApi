import { useRoutes, Navigate } from "react-router-dom";
import { lazy } from "react";

const Characters = lazy(() => import("../Pages/Characters"));
const Episodes = lazy(() => import("../Pages/Episodes"));
const Locations = lazy(() => import("../Pages/Locations"));
const Favorites = lazy(() => import("../Pages/Favorites"));
export const routes = {
  navbar: {
    characters: {
      path: "/characters",
      component: Characters,
    },
    locations: {
      path: "/locations",
      component: Locations,
    },
    episodes: {
      path: "/episodes",
      component: Episodes,
    },
    favorites: {
      path: "/favorites",
      component: Favorites,
    },
  },
};
export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <routes.navbar.characters.component />,
    },
    {
      path: "/characters",
      element: <routes.navbar.characters.component />,
    },
    {
      path: "/locations",
      element: <routes.navbar.locations.component />,
    },
    {
      path: "/episodes",
      element: <routes.navbar.episodes.component />,
    },
    {
      path: "/favorites",
      element: <routes.navbar.favorites.component />,
    },
    {
      path: "*",
      element: <Navigate to="/404" />,
    },
  ]);
}
