import {  useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStatus, register } from "../user/userSlice";
import Meta from "../../components/pages/Meta";
import BreadCrumb from "../../components/pages/BreadCrumb";
import Container from "../../components/pages/Container";
import CustomInput from "../../components/CustomInput";
import { Link } from "react-router-dom";
import "./Login.css";

const Signup = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [signUpRequestStatus, setSignUpRequestStatus] = useState("idle");
  // const [message, setMessage] = useState("");

  // useEffect(() => {
  //   setMessage("");
  // }, [firstname, lastname, fullname, email, password, phone]);

  const onFirstnameChange = (e) => {
    setFirstname(e.target.value);
  };
  const onLastnameChange = (e) => {
    setLastname(e.target.value);
  };
  const onFullnameChange = (e) => {
    setFullname(e.target.value);
  };
  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const onPhoneChange = (e) => {
    setPhone(e.target.value);
  };
  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const canCreate =
    [firstname, lastname, fullname, email, phone, password].every(Boolean) &&
    signUpRequestStatus === "idle";
  const dispatch = useDispatch();

  const status = useSelector(getStatus);

  const onSubmit = (e) => {
    e.preventDefault();

    if (canCreate) {
      setSignUpRequestStatus("pending");
      try {
        dispatch(
          register({
            firstname,
            lastname,
            fullname,
            username: email,
            phone,
            password,
          })
        ).unwrap();

        if (status === "created") {
          setFirstname("");
          setLastname("");
          setEmail("");
          setPhone("");
          setFullname("");
          setPassword("");
        } 
        // else {
        //   setMessage(
        //     <span className="alert-danger">fail to create your account</span>
        //   );
        // }
      } catch (error) {
        console.error(error);
      } finally {
        setSignUpRequestStatus("idle");
      }
    }
  };

  return (
    <>
      <div class="container register h-50 d-lg-flex half my-2 ">
        <div
          class="bg order-1 order-md-2 bg-image"
          style={{
            backgroundImage:
              " url('https://tycheventures.com/wp-content/uploads/2020/09/were-hiring-scaled.jpg')",
          }}
        ></div>
        <div class="contents order-2 order-md-1 ">
          <h3 className="text-center my-2 ">
            Welcome to J<span className="logo">4</span>U
          </h3>
          <Meta title={"Sign Up"} />
          <BreadCrumb title="Sign Up" />
          <Container class1="login-wrapper  home-wrapper-2">
            <div className="row">
              <div className="col-12">
                <div className="auth-card">
                  {/* {message} */}
                  <h3 className="text-center mb-3">Sign Up</h3>
                  <form action="" className="d-flex flex-column gap-15">
                    <CustomInput
                      type="text"
                      name="firstname"
                      placeholder="Firstname"
                      value={firstname}
                      onchange={onFirstnameChange}
                    />
                    <CustomInput
                      type="text"
                      name="lastname"
                      placeholder="Lastname"
                      value={lastname}
                      onchange={onLastnameChange}
                    />
                    <CustomInput
                      type="text"
                      name="fullname"
                      placeholder="Fullname"
                      value={fullname}
                      onchange={onFullnameChange}
                    />
                    <CustomInput
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={email}
                      onchange={onEmailChange}
                    />
                    <CustomInput
                      type="tel"
                      name="mobile"
                      placeholder="Mobile Number"
                      value={phone}
                      onchange={onPhoneChange}
                    />
                    <CustomInput
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={password}
                      onchange={onPasswordChange}
                    />
                    <div>
                      <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                        <button
                          className="button1 border-0"
                          onClick={onSubmit}
                          disabled={!canCreate}
                        >
                          Sign Up
                        </button>
                      </div>
                      <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                        <Link to="/login">Already has an account?Login</Link>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Signup;
