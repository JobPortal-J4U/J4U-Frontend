import React from "react";
import "./SideNav.css";
import { Link } from "react-router-dom";

function SideNav() {
  return (



  <>
 
<header className="mb-4">

  <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-white">
    <div class="position-sticky">
      <div class="list-group list-group-flush mx-3 mt-4">
        <Link href="#" class="list-group-item list-group-item-action py-2 ripple" aria-current="true">
          <i class="fas fa-tachometer-alt fa-fw me-3"></i><span>Main dashboard</span>
        </Link>
        
        <Link href="#" class="list-group-item list-group-item-action py-2 ripple"><i
            class="fas fa-lock fa-fw me-3"></i><span>Autentication</span></Link>
      
        
        <Link  to="" class="list-group-item list-group-item-action py-2 ">

              
  <div class="dropdown dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  <i
            class="fas fa-table fa-fw me-3"/>Tables
  </div>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><Link class="dropdown-item" to="/admin/jobtable">JobPosts</Link></li>
    <li><Link class="dropdown-item" to="/admin/companyTable">Company</Link></li>
    <li><Link class="dropdown-item" to="/admin/categoryTable">Category</Link></li>
    <li><Link class="dropdown-item" to="/admin/locationTable">Location</Link></li>
    <li><Link class="dropdown-item" to="/admin/jobTypeTable">JobTypes</Link></li>
    <li><Link class="dropdown-item" to="/admin/userTable">User</Link></li>
  </ul>

              
              
              </Link>
        <Link to="" class="list-group-item list-group-item-action py-2 ">

        <div class="dropdown dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  <i
            class="fas fa-table fa-fw me-3"/>Form
  </div>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><Link class="dropdown-item" to="/addJob">JobPost Form</Link></li>
    <li><Link class="dropdown-item" to="/companyForm">Company Form</Link></li>
    <li><Link class="dropdown-item" to="/categoryForm">Category Form</Link></li>
    <li><Link class="dropdown-item" to="/locationForm">Location Form</Link></li>
    <li><Link class="dropdown-item" to="/jobTypeForm">JobTypes Form</Link></li>
  </ul>
            
            </Link>
        
        <Link href="#" class="list-group-item list-group-item-action py-2 ripple"><i
            class="fas fa-users me-3"></i><span>Users</span></Link>
        
      </div>
    </div>
  </nav>



  <nav id="main-navbar" class="navbar navbar-expand-lg navbar-light bg-white fixed-top">

    <div class="container-fluid">
    
      <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#sidebarMenu"
        aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-bars"></i>
      </button>

      <Link class="navbar-brand" href="#">
       J<span className="j4u">4</span>U
      </Link>
      

     
      <ul class="navbar-nav ms-auto d-flex flex-row">
       
        <li class="nav-item dropdown">
          <Link class="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow" href="#" id="navbarDropdownMenuLink"
            role="button" data-mdb-toggle="dropdown" aria-expanded="false">
            <i class="fas fa-bell"></i>
            <span class="badge rounded-pill badge-notification bg-danger">1</span>
          </Link>
          <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
            <li>
              <Link class="dropdown-item" href="#">Some news</Link>
            </li>
            <li>
              <Link class="dropdown-item" href="#">Another news</Link>
            </li>
            <li>
              <Link class="dropdown-item" href="#">Something else here</Link>
            </li>
          </ul>
        </li>

        
       

   
        <li class="nav-item dropdown align-items-center">
          <Link class="nav-link dropdown-toggle hidden-arrow d-flex align-items-center" href="#"
            id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
            <i class="fas fa-user "></i>
          </Link>
          <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
            <li>
              <Link class="dropdown-item" href="#">My profile</Link>
            </li>
            <li>
              <Link class="dropdown-item" href="#">Settings</Link>
            </li>
            <li>
              <Link class="dropdown-item" href="#">Logout</Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  
  </nav>
 
</header>




</>
  );
}

export default SideNav;
