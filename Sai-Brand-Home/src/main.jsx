import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Bag from "./routes/Bag.jsx";
import Home from "./routes/Home.jsx";
import { Provider } from "react-redux";
import saibrandStore from "./store/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/",element: <Home /> /*loader: postLoader*/ },
      {
        path: "/bag",
        element: <Bag />,
        /*action: createPostAction,*/
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={saibrandStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
