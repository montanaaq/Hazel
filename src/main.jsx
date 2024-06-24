import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Form from './Components/Form/Form.jsx'
import Cards from './Components/Cards/Cards.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/cards",
    element: <Cards />,
  },
  {
    path: '/form',
    element: <Form />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);