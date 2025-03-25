import React from "react";
import "./App.css";
import Platform from "./Pages/Platform";
import Company from "./Pages/Company";
import ContactUs from "./Pages/ContactUs";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./Component/Layout/AppLayout";
import Home from "./Pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index:true,
        element:<Home/>
      },
      {
        path: "platform",
        element: <Platform />,
      },
      {
        path: "company",
        element: <Company />,
      },
      {
        path: "contactus",
        element: <ContactUs />,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};
export default App;
