import Authentication from "../features/auth";
import Details from "../features/details";
import Home from "../features/home";
import Layout from "../components/layout";
import Movie from "../features/movie";
import ProtectedRoutes from "./protected-routes";
import TvShow from "../features/tv-show";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  
  {
    element: <ProtectedRoutes />,
    children: [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "/details/:id",
            element: <Details />,
          },
          {
            path: "/movie",
            element: <Movie />,
          },
          {
            path: "/tv-show",
            element: <TvShow />,
          },
          {
            path: "/login",
            element: <Authentication />,
          },
        ],
      },
    ],
  },
]);
