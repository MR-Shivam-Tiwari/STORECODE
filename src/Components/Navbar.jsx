import React from "react";

function Navbar() {
  const buttonStyle = {
    backgroundColor: "transparent",
    borderColor: "white",
    color: "white",
    marginRight: "10px",
    padding: "8px 15px",
    borderRadius: "5px",
    textDecoration: "none",
    transition: "background-color 0.3s ease-in-out",
  };

  const activeButtonStyle = {
    backgroundColor: "white",
    color: "black",
  };

  return (
    <div className="text-warning" style={{ backgroundColor: "#ff379e" }}>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <img
              src="https://storecode.in/images/logo-nav.png"
              height="60"
              alt="Logo"
            />
            <h4 className="text-white ms-3"> STORECODE</h4>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={buttonStyle}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <form className="d-flex" role="search">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link btn"
                    aria-current="page"
                    href="/"
                    style={{ ...buttonStyle, ...activeButtonStyle }}
                  >
                    HOME
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link btn"
                    aria-current="page"
                    href="#About"
                    style={buttonStyle}
                  >
                    LOGIN
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link btn"
                    href="#Services"
                    role="button"
                    aria-expanded="false"
                    style={buttonStyle}
                  >
                    REGISTER
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link btn"
                    href="#Contact"
                    style={buttonStyle}
                  >
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link btn"
                    href="#Contact"
                    style={buttonStyle}
                  >
                    ABOUT
                  </a>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
