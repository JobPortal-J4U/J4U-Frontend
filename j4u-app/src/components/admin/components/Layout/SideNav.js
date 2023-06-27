// import { useEffect, useState } from "react";
// import "./SideNav.css";
// import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./SideNav.css";
import { Link } from "react-router-dom";
import logo from '../../../../images/logo.jpg'

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
        <nav className="text-white">
          <div class="navSide text-white">
            <div>
              <ul class="nav text-white">
                <li class="nav-item nav-profile d-flex justify-content-center pb-2">
                    <div className="header_img">
                      <img src={logo} alt=""/>
                    </div>
                </li>
              </ul>
              <div className="nav_list text-white">
                <Link
                  to="/admin/dashboard"
                  class="list-group-item list-group-item-action py-2 ripple nav_link text-white"
                  aria-current="true"
                >
                  <i class="fas fa-tachometer-alt fa-fw  "></i>
                  <span className="nav_name">Dashboard</span>
                </Link>

                <Link
                  href="#"
                  class="list-group-item list-group-item-action py-2 ripple nav_link text-white"
                >
                  <i class="fas fa-lock fa-fw "></i>
                  <span>Autentication</span>
                </Link>

                <Link
                  to=""
                  class="list-group-item list-group-item-action py-2 nav_link text-white"
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
                    class="dropdown dropdown-toggle text-white"
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
                  class="list-group-item list-group-item-action py-2 ripple nav_link text-white"
                >
                  <i class="fas fa-users "></i>
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
