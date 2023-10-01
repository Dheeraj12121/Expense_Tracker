import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Hearder = () => {
  const [loginUser, setLoginUser] = useState("");
  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setLoginUser(user);
    }
  }, []);
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Expence management
          </Link>

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <li className="nav-link active" aria-current="page" to="/user">
                {loginUser && loginUser.name}
              </li>
              <li className="nav-item">Logout</li>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Hearder;
