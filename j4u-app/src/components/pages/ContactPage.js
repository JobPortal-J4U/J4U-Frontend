import React from 'react'
import Contact from './Contact'
import { Link } from 'react-router-dom'
import './Contact.css'
const ContactPage = () => {
  return (
   <>
         <div class="container py-5 bg-dark contact-header mb-2  ">
        <div class="container my-5 pt-5 pb-4">
          <h1 class="display-3 text-white mb-3 ">
            Contact Page
          </h1>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb text-uppercase">
              <li class="breadcrumb-item text-white">
                <Link href="#">Home</Link>
              </li>
              <li class="breadcrumb-item text-white">
                <Link href="#">Pages</Link>
              </li>
              <li class="breadcrumb-item  active" aria-current="page">
                Contact Us
              </li>
            </ol>
          </nav>
        </div>
      </div>
   <Contact/>
   </>
  )
}

export default ContactPage