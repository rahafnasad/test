import { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { UserContext } from "./context/userContext";
import {
  Login,
  Active,
  CreatePage1,
  Email,
  EnterCode,
  LoginForm,
  Root,
  Suspended,
  SendCode,
  Ticket,
  Tickets,
  ViewReport
} from './component/index'

function App() {
  const { ShowAdd } = useContext(UserContext);

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
          path: "sendCode",
          element: <SendCode />,
        },
        {
          path: "enterCode",
          element: <EnterCode />,
        },
      ],

      errorElement: <h2> 404 bage not found -- user</h2>,
    },
    {
      path: "/homeAdmin",
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
          path: "viewReports",
          element: <ViewReport />
        },
        {
          path: "page1",
          element: <CreatePage1 />
        },
      ],
    },
  ]);
  return (
    <div className=" overflow-hidden">
      <RouterProvider router={router} />
      {ShowAdd ? <div className="overLaydata" ></div>
        : ""}
    </div>
  );
}

export default App;
