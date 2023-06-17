import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllCategories, selectAllCategories } from "./categorySlice";

const CategoryTable = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  const categories = useSelector(selectAllCategories);

  console.log("Categories are: " + categories);

  return (
    <>
      <main>
        <div class="container-fluid px-4 my-5">
          <h1 class="mt-4">Tables</h1>
          <ol class="breadcrumb mb-4">
            <li class="breadcrumb-item">
              <a href="index.html">Dashboard</a>
            </li>
            <li class="breadcrumb-item active">Tables</li>
          </ol>

          <div class="card mb-4">
            <div className="card-header row">
              <div class=" col-md-8">
                <i class="fas fa-table me-1"></i>
                Categories DataTable
              </div>
              <div class=" col-md-4">
                <button className="btn btn-outline-primary">
                  <Link to="/categoryForm">Create More</Link>
                </button>
              </div>
            </div>
            <div class="card-body">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Edit</th>
                  </tr>
                </thead>
                <tbody>
                  {categories.map((category) => (
                    <tr key={category.id}>
                      <td>{category.id}</td>
                      <td>{category.name}</td>
                      <td><Link to={`/editCategory/id/${category.id}`}>Edit</Link></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default CategoryTable;
