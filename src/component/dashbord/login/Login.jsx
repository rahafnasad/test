import React from "react";
import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./login.css";

export default function Login() {
  const { t } = useTranslation();

  return (
    <div className="loginHome">
      <div className="ovelay">
        <div className="container">
          <div className="logo pt-3 d-flex  justify-content-end">
            <img src="logo.png" className="logoImag" alt="" />
            <span className="ms-2 mt-3">{t("INTERNSHIP_MANAGER")}</span>
          </div>
          <div className="loginContent d-flex justify-content-center  align-items-center ">
            <div className="loginForm">
              <Outlet />
            </div>
            <div className="loginDescription ms-5 text-center">
              <h1>{t("WELCOME")} </h1>
              <p>
                {t("ABOUT_SYSTEM")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
