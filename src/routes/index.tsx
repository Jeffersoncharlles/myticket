import { createBrowserRouter } from "react-router-dom";

import PageNotFound from "../pages/404";
import { AppLayout } from "../pages/_layouts/app";
import TicketPage from "../pages/app/ticket/ticket";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <TicketPage />,
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);
