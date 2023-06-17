import React from 'react'
import { Link } from 'react-router-dom'
import './Company.css'
import SearchCompany from './SearchCompany'
import { useEffect } from 'react'
import Aos from 'aos'
import Meta from '../../components/pages/Meta'


const Company = () => {

  useEffect(()=>{
    Aos.init({duration: 500});
  },[])
  return (
    <>
      <Meta title={"Companies"} />
      
    <div class="container py-5 bg-dark company-header" >
        <div class="container my-5 pt-5 pb-5">
          <h1 class="display-3 text-white mb-3 animated slideInDown">
            Companies Lists
          </h1>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb text-uppercase">
              <li class="breadcrumb-item text-white">
                <Link href="#">Home</Link>
              </li>
              <li class="breadcrumb-item text-white">
                <Link href="#">Pages</Link>
              </li>
              <li class="breadcrumb-item text-white active" aria-current="page">
                Companies Lists
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <SearchCompany/>
      {/* <CompanyList/> */}
    
    </>
  )
}

export default Company