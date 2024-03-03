import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./component/dashbord/login/Login";
import LoginForm from "./component/dashbord/login/LoginForm";
import SendCode from "./component/dashbord/forgotPassword/SendCode";
import EnterCode from "./component/dashbord/forgotPassword/EnterCode";
import Root from "./component/dashbord/root/Root";
import Active from "./component/dashbord/userState/Active";
import Saspended from "./component/dashbord/userState/Saspended";
import Email from "./component/dashbord/email/Email";
import ViewReport from "./component/dashbord/report/ViewReport";
import CreateUserAdmin from "./component/dashbord/CreateUserAdmin/CreateUserAdmin";
import CreatePage1 from "./component/dashbord/CreateUserAdmin/CreatePage1";
import CreatePage2 from "./component/dashbord/CreateUserAdmin/CreatePage2";
import { UserContext } from "./component/dashbord/context/userContext";
import Tickets from "./component/dashbord/email/Tickets";
import Ticket from "./component/dashbord/email/Ticket";
function App() {
  const {ShowAdd}=useContext(UserContext);

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
          index:true,
          element: <Active />,
        },
        {
          path:"saspended",
          element:<Saspended/>
        },
        {
          path:"email",
          element:<Email/>,
          children:[
            {
            index:true,
            element:<Tickets/>,

          },
          {
            path:"ticket/:id",

            element:<Ticket/>,

          },
        ]
        },
        {
          path:"viewReports",
          element:<ViewReport/>
        },
        {
          path:"page1",
          element:<CreatePage1/>
        },
      ],
    },
  ]);
  return (
 <div className=" overflow-hidden">
      <RouterProvider router={router} />
      {ShowAdd?      <div className="overLaydata" ></div>
:""}
 </div>
  );
}

export default App;
