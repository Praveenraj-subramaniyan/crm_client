import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./CSS/Header.css";

function Header(data) {
  const navigate = useNavigate();
  function Logout(){
    const confirmed = window.confirm("Are you sure you want to log out?");
    if (confirmed) {
      navigate("/");
    }
  }
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to={`/home`}
                className={`${
                  data.active === "Dashboard" ? "active" : ""
                } nav-link`}
                href="#Dashboard"
                onClick={() => navigate("/")}
              >
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={`/lead`}
                className={`${data.active === "Lead" ? "active" : ""} nav-link`}
              >
                Lead
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={`/services`}
                className={`${
                  data.active === "Services" ? "active" : ""
                } nav-link`}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={`/adduser`}
                className={`${
                  data.active === "AddUser" ? "active" : ""
                } nav-link ${data.isAdmin || data.isManager ? "" : "disabled"}`}
              >
                Add User
              </Link>
            </li>
          </ul>
          <a className={` d-flex text-light me-5 text-decoration-none`} href="#" onClick={()=>Logout()}>Logout</a>
        </div>
      </nav>
    </div>
  );
}

export default Header;
