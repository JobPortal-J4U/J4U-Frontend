import { useSelector } from "react-redux";
import "./ProfilePage.css";
const ProfilePage = () => {

    const loginUser = useSelector(state => state.auths.user)

  return (
    <>
    <div className="container">
    {/* Header And Image Container */}
      <div class="header-wrapper">
        <header></header>
        <div class="cols-container">
          <div class="left-col ">
            <div class="img-container ">
              <img src="https://i.pinimg.com/236x/f7/3e/fe/f73efee3900f890a2239725468da9f9d.jpg"alt=""></img>
              
            </div>
            <h3 class="mb-3" style={{marginLeft:"30px"}}>{loginUser.fullname}</h3>
            <button class="">Edit Profile</button>
          </div>
        </div>
      </div>

      {/* About */}
      <div class="about" id="about">
        <div class="about-inner">
          <div class="about-header">
            <h2>About Me</h2>
          </div>
          <div class="row align-items-center">
            <div class="col-md-6">
              <div class="about-info">
                <p>
                  <i class="fa fa-user"></i>{loginUser.fullname}
                </p>
                <p>
                  <i class="fa fa-envelope"></i>
                  <a href="mailto:info@example.com">{loginUser.username}</a>
                </p>
                <p>
                  <i class="fa fa-phone"></i>
                  <a href="tel:+1234567890">{loginUser.phone}</a>
                </p>
                <p>
                  <i class="fa fa-map-marker"></i>123 Street, Los Angeles, CA,
                  USA
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

{/* Education */}
      <div class="education" id="education">
        <div class="content-inner">
          <div class="content-header">
            <h2>Education</h2>
          </div>
          <div class="row align-items-center">
            <div class="col-md-6">
              <div class="edu-col">
                <span>
                  01-Jan-2020 <i>to</i> 31-Dec-2050
                </span>
                <h3>Master Degree</h3>
                <p>
                  Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie
                  velit id libero.
                </p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="edu-col">
                <span>
                  01-Jan-2020 <i>to</i> 31-Dec-2050
                </span>
                <h3>Bachelor Degree</h3>
                <p>
                  Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie
                  velit id libero.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Experience */}
      <div class="experience" id="experience">
        <div class="content-inner">
          <div class="content-header">
            <h2>Experience</h2>
          </div>
          <div class="row align-items-center">
            <div class="col-md-6">
              <div class="exp-col">
                <span>
                  01-Jan-2020 <i>to</i> 31-Dec-2050
                </span>
                <h3>Codex Solution</h3>
                <h4>San Francisco, CA</h4>
                <h5>Project Manager</h5>
                <p>
                  Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie
                  velit id libero.
                </p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="exp-col">
                <span>
                  01-Jan-2020 <i>to</i> 31-Dec-2050
                </span>
                <h3>Soft Solution Ltd</h3>
                <h4>San Francisco, CA</h4>
                <h5>Web Developer</h5>
                <p>
                  Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie
                  velit id libero.
                </p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="exp-col">
                <span>
                  01-Jan-2020 <i>to</i> 31-Dec-2050
                </span>
                <h3>ABC Soft Ltd</h3>
                <h4>San Francisco, CA</h4>
                <h5>Web Designer</h5>
                <p>
                  Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie
                  velit id libero.
                </p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="exp-col">
                <span>
                  01-Jan-2020 <i>to</i> 31-Dec-2050
                </span>
                <h3>Soft Agency</h3>
                <h4>San Francisco, CA</h4>
                <h5>Graphic Designer</h5>
                <p>
                  Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie
                  velit id libero.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default ProfilePage;
