import { useState, useEffect } from "react";
import { Outlet, NavLink } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import root from './Root.module.css'

import { MdOutlineMail } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa6";
import { FiUserX } from "react-icons/fi";
import style from '../sidebar/Sidebar.module.css'



const Root = () => {
  const [IsActiveActive, setIsActiveActive] = useState(true);
  const [showSideBar, setShowSideBar] = useState(true);

  const sidebarItems = [
    {
      id: "university",
      content: <span className={style.sidebartitles}>الجامعات</span>
    },
    {
      id: "active",
      content: (
        <NavLink to='' className={({ isActive }) => IsActiveActive ? style.activelink : style.unactivelink}
          onClick={() => { setIsActiveActive(true) }}
        >
          <FaRegUser className={style.linkslogos} />
          <span className={style.sidebarlinksname}> النشطة</span>
        </NavLink>
      )
    },
    {
      id: "suspended",
      content: (
        <NavLink to='saspended' className={({ isActive }) => isActive ? style.activelink : style.unactivelink}
          onClick={() => { setIsActiveActive(false) }}
        >
          <FiUserX className={style.linkslogos} />
          <span className={style.sidebarlinksname}> المعلقة</span>
        </NavLink>
      )
    },
    {
      id: "apps&pages",
      content: <span className={style.sidebartitles}>التطبيقات والصفحات
      </span>
    },
    {
      id: "EmailAdmin",
      content: (
        <NavLink to='email' className={({ isActive }) => isActive ? style.activelink : style.unactivelink}
          onClick={() => { setIsActiveActive(false) }}
        >
          <MdOutlineMail className={style.linkslogos} />
          <span className={style.sidebarlinksname}> ايميل </span>
        </NavLink>
      )
    },
    {
      id: "report",
      content: <span className={style.sidebartitles}>التقارير</span>
    },
    {
      id: "viewReport",
      content: (
        <NavLink to='viewReports' className={({ isActive }) => isActive ? style.activelink : style.unactivelink}
          onClick={() => { setIsActiveActive(false) }}
        >
          <TbReportSearch className={style.linkslogos} />
          <span className={style.sidebarlinksname}> عرض التقارير</span>
        </NavLink>
      )
    },

  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1200) {
        setShowSideBar(false);
      } else {
        setShowSideBar(true);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closeSidebar = () => {
    setShowSideBar(!showSideBar);
  };

  return (
    <>
      <div className={root.thecontainer}>
        <div className={showSideBar ? root.background : ""} onClick={closeSidebar}></div>
        {
          <div className={showSideBar ? root.sidebarcontainershow : root.sidebarcontainerhide}>
            <Sidebar showSideBar={showSideBar} setShowSideBar={setShowSideBar} sidebarItems={sidebarItems} />
          </div>
        }
        <div className={root.navbarcontainer}>
          <Navbar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Root;
