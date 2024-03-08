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
import { useTranslation } from "react-i18next";

const Root = () => {
  const [IsActiveActive, setIsActiveActive] = useState(true);
  const [showSideBar, setShowSideBar] = useState(true);
  const { t } = useTranslation();

  const sidebarItems = [
    {
      id: "university",
      content: <span className={style.sidebarTitles}>{t("SIDEBAR_ITEMS.UNIVERSITIES")}</span>
    },
    {
      id: "active",
      content: (
        <NavLink to='' className={({ isActive }) => IsActiveActive ? style.activeLink : style.unActiveLink}
          onClick={() => { setIsActiveActive(true) }}
        >
          <FaRegUser className={style.linksLogos} />
          <span className={style.sidebarLinksName}>{t("SIDEBAR_ITEMS.ACTIVE")}</span>
        </NavLink>
      )
    },
    {
      id: "suspended",
      content: (
        <NavLink to='suspended' className={({ isActive }) => isActive ? style.activeLink : style.unActiveLink}
          onClick={() => { setIsActiveActive(false) }}
        >
          <FiUserX className={style.linksLogos} />
          <span className={style.sidebarLinksName}>{t("SIDEBAR_ITEMS.SUSPENDED")}</span>
        </NavLink>
      )
    },
    {
      id: "apps&pages",
      content: <span className={style.sidebarTitles}>
        {t("SIDEBAR_ITEMS.APP_AND_PAGES")}
      </span>
    },
    {
      id: "EmailAdmin",
      content: (
        <NavLink to='email' className={({ isActive }) => isActive ? style.activeLink : style.unActiveLink}
          onClick={() => { setIsActiveActive(false) }}
        >
          <MdOutlineMail className={style.linksLogos} />
          <span className={style.sidebarLinksName}>{t("SIDEBAR_ITEMS.EMAIL")}</span>
        </NavLink>
      )
    },
    {
      id: "report",
      content: <span className={style.sidebarTitles}>{t("SIDEBAR_ITEMS.REPORTS")}</span>
    },
    {
      id: "viewReport",
      content: (
        <NavLink to='viewReports' className={({ isActive }) => isActive ? style.activeLink : style.unActiveLink}
          onClick={() => { setIsActiveActive(false) }}
        >
          <TbReportSearch className={style.linksLogos} />
          <span className={style.sidebarLinksName}>{t("SIDEBAR_ITEMS.VIEW_REPORTS")}</span>
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
      <div className={root.container}>
        <div className={showSideBar ? root.background : ""} onClick={closeSidebar}></div>
        {
          <div className={showSideBar ? root.sidebarContainerShow : root.sidebarContainerHide}>
            <Sidebar showSideBar={showSideBar} setShowSideBar={setShowSideBar} sidebarItems={sidebarItems} />
          </div>
        }
        <div className={root.navbarContainer}>
          <Navbar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Root;
