import { IoClose } from "react-icons/io5";
import style from './Sidebar.module.css'
import { NavLink } from 'react-router-dom';

const Sidebar = (props) => {

  const closeSidebar = () => {
    props.setShowSideBar(false);
  };

  return (
    <div className={style.sidebar}>
      <div className={style.sidebarHeader}>
        <NavLink className={style.logoLink}>
          <img className={style.logo} src="logo.png" alt="" />
          <h2>IMS</h2>
        </NavLink>
        <button className={style.closeSidebar} onClick={closeSidebar}>
          <IoClose className={style.closeLogo} />
        </button>
      </div>
      <ul className={style.sidebarContainer}>
        {
          props.sidebarItems.map(({ id, content }) => (
            <li key={id}>
              {content}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Sidebar
