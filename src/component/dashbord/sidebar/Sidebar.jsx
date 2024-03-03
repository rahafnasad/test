import * as IoIcons from "react-icons/io5";
import style from './Sidebar.module.css'
import { NavLink } from 'react-router-dom';

const Sidebar = (prop) => {

  const closeSidebar = () => {
    prop.setShowSideBar(false);
  };

  return (
    <div className={style.sidebar}>
      <div className={style.sidebarheader}>
        <NavLink className={style.logolink}>
          <img className={style.logo} src="logo.png" alt="" />
          <h2>IMS</h2>
        </NavLink>
        <button className={style.closesidebar} onClick={closeSidebar}><IoIcons.IoClose className={style.closelogo} /></button></div>
      <ul className={style.sidebarcontainer}>
        {prop.sidebarItems.map(({ id, content }) => (
          <li key={id}>
            {content}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
