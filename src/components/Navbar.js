import React from "react";


import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/homepage" className="site-title" style={{
              fontStyle:"italic"
            }} >
      Office Management App
      </Link>
      <ul>
        <CustomLink to="/home">Office</CustomLink>
        <CustomLink to="/home3">Organization</CustomLink>
        <CustomLink to="/home2">Desk</CustomLink>
        <CustomLink to="./reservation">Reservation</CustomLink>


        <CustomLink to="/Login" style={{
              backgroundColor: " #63626b",
              border: "1px white solid"
              
            }}>SIGN IN</CustomLink>
        <CustomLink to="/Register"style={{
              backgroundColor: " #63626b",
              border: "1px white solid"
            }}>SIGN UP</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}

// import React, { useState } from "react";


// function Navbar() {
//   const [active, setActive] = useState("nav__menu");
//   const [icon, setIcon] = useState("nav__toggler");
//   const navToggle = () => {
//     if (active === "nav__menu") {
//       setActive("nav__menu nav__active");
//     } else setActive("nav__menu");

//     // Icon Toggler
//     if (icon === "nav__toggler") {
//       setIcon("nav__toggler toggle");
//     } else setIcon("nav__toggler");
//   };
//   return (
//     <nav className="nav">
//       <a href="#" className="nav__brand">
//         OFFİCE RESERVASİON
//       </a>
//       <ul className={active}>
//         <li className="nav__item">
//           <a href="#" className="nav__link">
//             Home
//           </a>
//         </li>
//         <li className="nav__item">
//           <a href="#" className="nav__link">
//             About
//           </a>
//         </li>
//         <li className="nav__item">
//           <a href="#" className="nav__link">
//             Portfolio
//           </a>
//         </li>
//         <li className="nav__item">
//           <a href="#" className="nav__link">
//             Skills
//           </a>
//         </li>
//         <li className="nav__item">
//           <a href="#" className="nav__link">
//             Contact
//           </a>
//         </li>
//       </ul>
//       <div onClick={navToggle} className={icon}>
//         <div className="line1"></div>
//         <div className="line2"></div>
//         <div className="line3"></div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;