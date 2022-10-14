import React, { useState, useEffect } from "react";
import "./Header.scss";
import * as Icons from "react-icons/fa";
import { navItems } from "../../data.js";
import { FaMoon, FaSun } from "react-icons/fa";
import Toggle from "../toggle/Toggle";

const Header = ({ myTheme, onToggleTheme, onSwitch }) => {

  const [mobile, setMobile] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [toggled, setToggled] = React.useState(false);

  const handleClick = () => {
      setToggled((s) => !s);
  };

  useEffect(() => {
    if (window.innerWidth < 1065) {
      setMobile(true);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1065) {
        setMobile(true);
      } else {
        setMobile(false);
        setSidebar(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header data-theme={myTheme}>
      <nav className="navbar">
      <a href="/" className="navbar-logo" onClick={() => setSidebar(false)}>
          Logo
        </a>
        {!mobile && (
          <ul className="nav-items">
            {navItems.map((item) => {
              return (
                <li key={item.id} className={item.nName}>
                  <a href={item.path}>
                  <i> {item.icon}</i>
                    <span>{item.title}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        )}
        {!mobile && (
        <div onClick={onToggleTheme}>
           <span className="toggle-btn">
             <Icons.FaSun color="yellow" size={12} />
             <Icons.FaMoon color="pink" size={12} />
             <div className={onSwitch ? "ball move" : "ball"}></div>
           </span>
       </div>
      

        )}

        {mobile && (
          <div className="sidebar-toggle">
            {sidebar ? (
              <Icons.FaTimes
                className="sidebar-toggle-logo"
                onClick={() => setSidebar(!sidebar)}
              />
            ) : (
              <Icons.FaBars
                className="sidebar-toggle-logo"
                onClick={() => setSidebar(!sidebar)}
              />
            )}
          </div>
        )}
        
      </nav>

      <div className={ sidebar ? "sidebar active" : "sidebar"}>
      <ul className="sidebar-items">
            {navItems.map((item) => {
              return (
                <li  onClick={() => setSidebar(!sidebar)} key={item.id} className={item.sName}>
                  <a href={item.path}>
                   <i> {item.icon}</i>
                    <span>{item.title}</span>
                  </a>
                </li>
              );
            })}
          </ul>
          <div onClick={onToggleTheme}>
          <span className="toggle-btn">
            <FaSun color="yellow" size={16} />
            <FaMoon color="pink" size={16} />
            <div className={onSwitch ? "ball move" : "ball"}></div>
          </span>
        </div>
      </div>
     
    </header>
  );
};

export default Header;
