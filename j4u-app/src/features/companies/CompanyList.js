import { Link } from "react-router-dom";
import "./CompanyList.css";
import { getAllCompanies, selectAllCompanies } from "./companySlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const CompanyList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCompanies());
  }, [dispatch]);

  const companies = useSelector(selectAllCompanies);

  return (
    <>
      <div class="container py-3">
        <div class="container">

          <div class="row g-4 text-left" data-aos="fade-up">
            {companies.map((company) => (
              <div
                class="col-lg-2 col-sm-6 wow fadeInUp "
                data-wow-delay="0.1s"
              >
                <Link class="com-item rounded p-4" to={`/company/${company.id}`}>
                  <img
                    class="flex-shrink-0 img-fluid border rounded  mb-2"
                    src={company.logo}
                    alt=""
                    style={{ width: "80px", height: "80px" }}
                  />

                  <div key={company.id}>
                    <h6 class="mb-2 text-dark ">{company.name}</h6>
                    <p class="mb-2 text-dark">{company.jobOpening} Jobs</p>
                    <Link
                      class="view btn btn-outline-primary"
                      to={`/company/${company.id}`}
                    >
                      <i class="fas fa-arrow-right "></i>
                    </Link>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyList;
