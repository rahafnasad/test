import React, { useContext, useState } from "react";
import { IoLockClosedSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../../../context/userContext";

export default function Email() {
  const { setState } = useContext(UserContext);
  const { state } = useContext(UserContext);
  const { t } = useState();

  return (
    <div className="email">
      <h1>{t("EMAIL.MESSAGES")}</h1>
      <div className="d-flex">
        <nav className="EmailClassif mx-2 mt-3">
          <Link to="" onClick={() => { setState("البريد الوارد") }}>
            {" "}
            <p className={` p-2 ${state == "البريد الوارد" ? "bg-secondary text-white" : ""}`}>
              <MdEmail className="ms-2" />
              {t("EMAIL.INBOX")}
            </p>
          </Link>
          <Link to="" onClick={() => { setState("الرسائل المغلقة") }}>
            {" "}
            <p className={`p-2 ${state == "الرسائل المغلقة" ? "bg-secondary text-white" : ""}`}>
              <IoLockClosedSharp className="ms-2" />
              {t("EMAIL.CLOSED")}
            </p>
          </Link>{" "}
        </nav>
        <Outlet />
      </div>
    </div>
  );
}
