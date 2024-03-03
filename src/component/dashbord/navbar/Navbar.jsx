import * as FiIcons from "react-icons/fi";
import navbar from "./Navbar.module.css"
const Navbar = (prop) => {
  const toggleSidebar = () => {
    prop.setShowSideBar(!prop.showSideBar);
  };
  return (
    <>
      <div className={navbar.navbar}>
        <ul>
          <li>
            <button className={navbar.sidebartrigger} onClick={toggleSidebar}>
              <FiIcons.FiAlignJustify />
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
