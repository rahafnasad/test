import { FiAlignJustify } from "react-icons/fi";
import navbar from "./Navbar.module.css";

const Navbar = (props) => {

  const toggleSidebar = () => {
    props.setShowSideBar(!props.showSideBar);
  };

  return (
    <div className={navbar.navbar}>
      //TODO: is it necessary ?
      <ul>
        <li>
          <button className={navbar.sidebarTrigger} onClick={toggleSidebar}>
            <FiAlignJustify />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
