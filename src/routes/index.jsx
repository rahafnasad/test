import { createBrowserRouter } from "react-router-dom";
import {
  Active,
  CreatePage1,
  Email,
  EnterCode,
  Login,
  LoginForm,
  Root,
  SendCode,
  Suspended,
  Ticket,
  Tickets,
  ViewReport
} from "../component";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    children: [
      {
        index: true,
        element: <LoginForm />,
      },
      {
        path: "send-code",
        element: <SendCode />,
      },
      {
        path: "enter-code",
        element: <EnterCode />,
      },
    ],

    errorElement: <h2> 404 bage not found -- user</h2>,
  },
  {
    path: "/admin",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Active />,
      },
      {
        path: "suspended",
        element: <Suspended />
      },
      {
        path: "email",
        element: <Email />,
        children: [
          {
            index: true,
            element: <Tickets />,

          },
          {
            path: "ticket/:id",

            element: <Ticket />,

          },
        ]
      },
      {
        path: "reports",
        element: <ViewReport />
      },
      {
        path: "page1",
        element: <CreatePage1 />
      },
    ],
  },
]);

export { router }