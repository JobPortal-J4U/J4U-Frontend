import React from 'react'
import './Job.css'
import { Link } from 'react-router-dom'

import Meta from '../../components/pages/Meta'
import SearchJob from './SearchJob'


const Job = () => {


  return (
    <>
    <Meta title={"JobPost"} />
          <div class="container py-5 bg-dark job-header  ">
        <div class="container my-5 pt-5 pb-4">
          <h1 class="display-3 text-white mb-3 ">
            Job List
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
                Job List
              </li>
            </ol>
          </nav>
        </div>
      </div>
      
      <SearchJob/>
      
    </>
  )
}

export default Job