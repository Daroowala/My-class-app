import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: null, 
  },
  {
    path: "about",
    element: null,
  },
]); 

export default <RouterProvider router={router} />