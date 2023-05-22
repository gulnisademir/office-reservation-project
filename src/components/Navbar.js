import React, { Component } from "react";

import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default class Navbar extends Component {
  handleLogout = () => {
    localStorage.clear();
    this.props.setUser(null);
  };

  render() {
    let buttons;

    if (this.props.user) {
      buttons = (
        <ul>
          <Link
            to="/"
            onClick={this.handleLogout}
            style={{
              backgroundColor: " #30223b",
              border: "1px white solid",
              "border-radius": "10px",
            }}
          >
            {" "}
            LOG OUT
            <i
              class="fa-solid fa-right-from-bracket"
              style={{
                margin: "5px",
              }}
            ></i>
          </Link>
        </ul>
      );
    } else {
      buttons = (
        <ul>
          <Link
            to="/Login"
            style={{
              backgroundColor: " #30223b",
              border: "1px white solid",
              "border-radius": "10px",
            }}
          >
            {" "}
            <i
              class="fa-solid fa-user"
              style={{
                margin: "5px",
              }}
            ></i>
            SIGN IN
          </Link>

          <CustomLink
            to="/Register"
            style={{
              backgroundColor: "#30223b",
              border: "1px white solid",
              "border-radius": "10px",
            }}
          >
            <i
              class="fa-solid fa-user-plus"
              style={{
                margin: "5px",
              }}
            ></i>{" "}
            SIGN UP{" "}
          </CustomLink>
        </ul>
      );
    }

    return (
      <nav className="nav">
        <Link
          to="/homepage"
          className="site-title"
          style={{
            fontStyle: "italic",
          }}
        >
          Office Management App
        </Link>
        <ul>
          <CustomLink to="/home">Office</CustomLink>
          <CustomLink to="/home3">Organization</CustomLink>
          <CustomLink to="/home2">Desk</CustomLink>
          <CustomLink to="./reservation">Reservation</CustomLink>
          {buttons}
          {/* <CustomLink
            to="/Login"
            style={{
              backgroundColor: " #30223b",
              border: "1px white solid",
              "border-radius": "10px",
            }}
          >
            {" "}
            <i
              class="fa-solid fa-user"
              style={{
                margin: "5px",
              }}
            ></i>
            SIGN IN
          </CustomLink> */}

          {/* 
          <CustomLink
            to="/Register"
            style={{
              backgroundColor: "#30223b",
              border: "1px white solid",
              "border-radius": "10px",
            }}
          >
            <i
              class="fa-solid fa-user-plus"
              style={{
                margin: "5px",
              }}
            ></i>{" "}
            SIGN UP{" "}
          </CustomLink> */}
        </ul>
      </nav>
    );
  }
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
