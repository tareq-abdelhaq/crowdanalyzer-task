import { Navigate } from "react-router-dom";

import HomePage from "../pages/HomePage";
import GameDetailsPage from "../pages/GameDetailsPage";

export const APP_PATHS = Object.freeze({
  HOME: "/",
  GAME_DETAILS: "/games/:slug",
});

export const APP_ROUTES = [
  {
    path: APP_PATHS.HOME,
    element: <HomePage />,
  },

  {
    path: APP_PATHS.GAME_DETAILS,
    element: <GameDetailsPage />,
  },

  { path: "*", element: <Navigate to={APP_PATHS.HOME} /> },
];
