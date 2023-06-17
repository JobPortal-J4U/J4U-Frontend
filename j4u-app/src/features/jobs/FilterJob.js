import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllJobPosts, selectAllJobPosts } from './jobSlice';
import SearchJob from './SearchJob';
import JobList from './JobList';
import { useEffect } from 'react';

const FilterJob = () => {


  const jobPosts = useSelector(selectAllJobPosts);

  let [filterJob,updateJob]= useState();
  let [newJobPostList,updateJobPostList]= useState(jobPosts);
  

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllJobPosts());
  }, [dispatch]);


  let filterJobPostList = newJobPostList.filter((jobPost)=>{
    if(filterJob === "1"){
      return jobPost.isPartTime === true;
    }else if (filterJob === '2'){
      return jobPost.isPartTime === false;
    }else {
      return jobPost;
    }
  })
  
  function onFilterJobSelected(filterValue){
    // console.log(filterValue)
    updateJob(filterValue);
}

  return (
    <>
    <SearchJob filterJobSelected={onFilterJobSelected}></SearchJob>
    <JobList newJobPostList={filterJobPostList}></JobList>
    </>
  )
}

export default FilterJob