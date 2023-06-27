// import { useEffect, useState } from "react";
// import "./SideNav.css";
// import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./SideNav.css";
import { Link, NavLink } from "react-router-dom";

function SideNav() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    if (sidebarOpen) {
      body.classList.add("body-pd");
    } else {
      body.classList.remove("body-pd");
    }
  }, [sidebarOpen]);

  return (
    <>
      <header className={`header "id="header ${sidebarOpen ? "open" : ""}`}>
        <div
          className={`header_toggle ${sidebarOpen ? "open" : ""}`}
          onClick={toggleSidebar}
        >
          <i class="fa-solid fa-bars" id="header_toggle"></i>
        </div>
        {/* <div class="ppp[] */}
      </header>
      <div className={`l-navbar ${sidebarOpen ? "navshow" : ""}`} id="nav-bar">
        <nav>
          <div class="navSide">
            <div>
              <Link className="navbar-brand d-flex justify-content-start">
                J<span class="nav_logo-name">4</span>U
              </Link>
              <ul class="nav">
                <li class="nav-item nav-profile border-bottom d-flex justify-content-center">
                    <div className="header_img">
                      <img src="https://i.imgur.com/hczKIze.jpg" alt=""/>
                    </div>
                </li>
              </ul>
              <div className="nav_list">
                <Link
                  to="/admin/dashboard"
                  class="list-group-item list-group-item-action py-2 ripple nav_link"
                  aria-current="true"
                >
                  <i class="fas fa-tachometer-alt fa-fw "></i>
                  <span className="nav_name">Dashboard</span>
                </Link>

                <Link
                  href="#"
                  class="list-group-item list-group-item-action py-2 ripple nav_link"
                >
                  <i class="fas fa-lock fa-fw"></i>
                  <span>Autentication</span>
                </Link>

                <Link
                  to=""
                  class="list-group-item list-group-item-action py-2 nav_link"
                >
                  <div
                    class="dropdown dropdown-toggle"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="fas fa-table fa-fw me-3" />
                    Tables
                  </div>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <Link class="dropdown-item" to="/admin/jobtable">
                        JobPosts
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/admin/companyTable">
                        Company
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/admin/categoryTable">
                        Category
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/admin/locationTable">
                        Location
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/admin/jobTypeTable">
                        JobTypes
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/admin/userTable">
                        User
                      </Link>
                    </li>
                  </ul>
                </Link>
                <Link
                  to=""
                  class="list-group-item list-group-item-action py-2 nav_link"
                >
                  <div
                    class="dropdown dropdown-toggle"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="fas fa-table fa-fw me-3" />
                    Form
                  </div>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <Link class="dropdown-item" to="/addJob">
                        JobPost Form
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/companyForm">
                        Company Form
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/categoryForm">
                        Category Form
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/locationForm">
                        Location Form
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/jobTypeForm">
                        JobTypes Form
                      </Link>
                    </li>
                  </ul>
                </Link>

                <Link
                  href="#"
                  class="list-group-item list-group-item-action py-2 ripple nav_link"
                >
                  <i class="fas fa-users"></i>
                  <span>Users</span>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default SideNav;
