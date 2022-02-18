import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../Redux/actions";
import Card from "./Card";
function Navbar() {
  const { loginstatus } = useSelector((state) => state.loginReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm mx-auto">
      <div className="container-fluid">
        <NavLink to={"/smartiot"} className="navbar-brand">
          SMARTIOT
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to={"/smartiot"} className="nav-link">
                Home
              </NavLink>
            </li>
            {loginstatus ? (
              <li className="nav-item">
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    dispatch(userLogout());
                    navigate("/smartiot");
                  }}
                  className="nav-link"
                >
                  Logout
                </span>
              </li>
            ) : (
              <li className="nav-item">
                <NavLink to={"/login"} className="nav-link">
                  Login
                </NavLink>
              </li>
            )}
          </ul>
          <Card />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
