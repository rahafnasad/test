import React, { useContext } from "react";
import { IoLockClosedSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../context/userContext";

export default function Email() {
  const { setState } = useContext(UserContext);
  const { state } = useContext(UserContext);

  return (
    <div className="email">
      <h1>الرسائل</h1>
      <div className="d-flex">
        <nav className="EmailClassif mx-2 mt-3">
          <Link to="" onClick={() => { setState("البريد الوارد") }}>
            {" "}
            <p className={` p-2 ${state == "البريد الوارد" ? "bg-secondary text-white" : ""}`}>
              <MdEmail className="ms-2" />
              البريد الوارد
            </p>
          </Link>
          <Link to="" onClick={() => { setState("الرسائل المغلقة") }}>
            {" "}
            <p className={`p-2 ${state == "الرسائل المغلقة" ? "bg-secondary text-white" : ""}`}>
              <IoLockClosedSharp className="ms-2" />
              الرسائل المغلقة
            </p>
          </Link>{" "}
        </nav>
        <Outlet />
      </div>
    </div>
  );
}
