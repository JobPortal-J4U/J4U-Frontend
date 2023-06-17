import { Link } from 'react-router-dom'
import './Profile.css'


const ProfilePage = () => {
  return (
    <>
<div class="container">
        <div class="row align-items-center">
          <div class="col">
            <img
              class="profile-image float-start rounded-circle"
              src="https://i.pinimg.com/236x/63/ec/68/63ec68f2e7c656a47b4498f4570cd189.jpg"
              alt="profile image"
              style={{ width: "150px", height: "170px", margin: "30px" }}
            />
            <div class="profile-content pt-4">
              {/* {personalInfos.map((personalInfo) => ( */}
                <h1 class="name">This is name</h1>
              {/* ))} */}
            </div>
          </div>
        </div>
      </div>

      <div class="container sections-wrapper py-5">
        <div class="row">
          <div class="primary col-lg-8 col-12">
            <section class="about section">
              <div class="section-inner shadow-sm rounded">
                <h2 class="heading">About Me</h2>
                <div class="content">
                  <p>
                    Write Link brief intro about yourself. It's Link good idea to
                    include your personal interests and hobbies as well. Lorem
                    ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                    commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                    penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Donec quam felis, ultricies nec. Commodo
                    ligula eget dolor. Aenean massa.
                  </p>
                </div>
              </div>
            </section>
          </div>
          <div class="secondary col-lg-4 col-12">
            <aside class="info aside section">
              <div class="section-inner shadow-sm rounded">
                <h2 class="heading sr-only">Basic Information</h2>
                <div class="content">
                  {/* {personalInfos.map((personalInfo) => ( */}
                    <ul class="list-unstyled">
                      <li>
                        <i class="fas fa-map-marker-alt"></i>
                        <span class="sr-only"></span>
                        This is address
                      </li>
                      <li>
                        <i class="fa-solid fa-phone"></i>
                        <span class="sr-only"></span>
                        <Link href="#">This is phone</Link>
                      </li>
                      <li>
                        <span class="sr-only">Website:</span>
                        <Link href="#">https://www.website.com</Link>
                      </li>
                    </ul>
                
                </div>
              </div>
            </aside>
            <aside class="education aside section">
              <div class="section-inner shadow-sm rounded">
                <h2 class="heading">Education</h2>
                <div class="content">
                  <div class="item">
                    <h3 class="title">
                      <i class="fas fa-graduation-cap"></i> MSc Computer Science
                    </h3>
                    <h4 class="university">
                      University College London{" "}
                      <span class="year">(2017-2018)</span>
                    </h4>
                  </div>
                  <div class="item">
                    <h3 class="title">
                      <i class="fas fa-graduation-cap"></i> BSc Computer Science
                    </h3>
                    <h4 class="university">
                      University of Bristol{" "}
                      <span class="year">(2013-2017)</span>
                    </h4>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfilePage