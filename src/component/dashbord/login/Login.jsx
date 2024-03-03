import React from "react";
import { Outlet } from "react-router-dom";
import "./login.css";

export default function Login() {
  return (
    <div className="loginHome">
      <div className="ovelay">
        <div className="container">
          <div className="logo pt-3 d-flex  justify-content-end">
            <img src="logo.png" className="logoImag" alt="" />
            <span className="ms-2 mt-3">Internship Manager</span>
          </div>
          <div className="loginContent d-flex justify-content-center  align-items-center ">
            <div className="loginForm">
              <Outlet />
            </div>
            <div className="loginDescription ms-5 text-center">
              <h1>مرحبا بكم في موقع التبادل الطلابي </h1>
              <p>
                موقع لإدارة التبادل الطلابي بين الجامعات العربية وتنظيم العروض
                التدريبية والمرشحين لكل تدريب وغيرها من التفاصيل بشكل مرن بحيث
                يتم عرض تفاصيل العروض والمتقدمين.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
