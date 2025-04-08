import React, { useState, useRef } from 'react';
import './navbar.css';
import logo from '../../assets/logo.svg';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const toggleMenu = () => {
    if (menuRef.current.style.right === "0px") {
      menuRef.current.style.right = "-100%";  // Hide menu
    } else {
      menuRef.current.style.right = "0px";  // Show menu
    }
  };

  return (
    <nav className='navbar'>
      <img src={logo} alt='Logo' className="logo" />
      {/* Mobile menu open button */}
      <img src={menu_open} onClick={toggleMenu} alt="Open Menu" className='nav-mob-open' />

      {/* Navigation menu */}
      <ul ref={menuRef} className='nav-menu'>
        {/* Mobile menu close button */}
        <img src={menu_close} onClick={toggleMenu} alt="Close Menu" className="nav-mob-close" />
        
        {["home", "about", "services", "Projects", "contact"].map((item, index) => (
          <li key={index}>
            <AnchorLink className='nachor-link' href={`#${item}`}>
              <p onClick={() => setMenu(item)}>{item.charAt(0).toUpperCase() + item.slice(1)}</p>
            </AnchorLink>
            {menu === item && <img src={underline} alt="Underline" />}
          </li>
        ))}
      </ul>

      {/* Connect Button (Visible only on Desktop) */}
      <div className='nav-connect'>
        <AnchorLink className='nachor-link' href='#contact'>
          Connect With Me
        </AnchorLink>
      </div>
    </nav>
  );
};

export default Navbar;
