import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./pages/root/Root.jsx";
import Error from "./pages/error/Error.jsx";
import Home from "./pages/home/Home.jsx";
import Applications from "./pages/apps/Applications.jsx";
import Installed from "./pages/installed/Installed.jsx";
import NotFound from "./pages/notFound/NotFound.jsx";
import Layout from "./pages/apps/Layout.jsx";
import Details from "./pages/details/Details.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    loader: () => fetch('allApp.json'),
    Component: Root,
    errorElement: <Error/>,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "apps",
        Component: Layout,
        children: [
          {
            index: true,
            Component: Applications
          },
          {
            path: ':appId',
            loader: async ({ params }) => {
              let response = await fetch('allApp.json')
              let data = await response.json()
              const appData = data.find(app => app.id === parseInt(params.appId) )
              if (!appData) {
                <NotFound/>;
              }
              return appData
            },
            Component: Details,
            errorElement: <NotFound />
          }
        ]
      },
      {
        path: "installation",
        Component: Installed,
      },
    ],
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
