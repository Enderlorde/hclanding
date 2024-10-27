import * as React from "react";
import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";

import Sidebar from "./components/sidebar/sidebar";
import Content from "./components/content/content";
import Subscribe from "./components/subscribe/subscribe";
import Promo from "./components/promo/promo";
import Features from "./components/features/features";
import Band from "./components/band/band";

import classes from "./app.module.css";

const router = createHashRouter([
  {
    path: "/",
    element: <Content />,
    children: [
      {
        path: "showcase/",
        element: <Promo />,
      },
      {
        path: "subscribe/",
        element: <Subscribe />,
      },
      {
        path: "features/",
        element: <Features />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div className={classes.app}>
      <Band />
      <Sidebar />
      <RouterProvider router={router} />
    </div>
  );
};

const rootElement = document.querySelector("#root");
if (rootElement) {
  createRoot(rootElement).render(<App />);
} else {
  alert("Cannot find root element");
  console.error("Cannot find root element");
}
