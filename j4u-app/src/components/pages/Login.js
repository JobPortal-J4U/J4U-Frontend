import React from "react";
import { Link,useNavigate,useLocation } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import { useDispatch,useSelector } from "react-redux";
import { login,getSuccess } from "../features/auth/authSlice";
import { useState ,useEffect} from "react";

const Login = () => {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [loginRequestStatus,setLoginRequestStatus] = useState('idle')
  const [message,setMessage] = useState('')

  useEffect(()=>{
    setMessage('')
  },[email,password])

  const onEmailChange = e => {setEmail(e.target.value)}
  const onPasswordChange = e => {setPassword(e.target.value)}

  const canLogin = [email,password].every(Boolean) && loginRequestStatus === 'idle'
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.from?.pathname || "/"

  const success = useSelector(getSuccess)
  const roleType = useSelector(getRoles)

  const onLogin = (e) => {
    e.preventDefault()
    
    if (canLogin) {
      setLoginRequestStatus("pending");

      try {
        dispatch(
          login({
            username: email,
            password,
          })
        ).unwrap();

        if (success) {
          setEmail("");
          setPassword("");
          if(roleType == "ROLE_ADMIN"){
            navigate("/admin/", { replace: true });

          }else{
            navigate(from, { replace: true });
          }
          
        } 
        // else {
        //   setMessage(
        //     <span className="alert-danger">
        //       username or password is incorrect
        //     </span>
        //   );
        // }
      } catch (error) {
        console.error(error);
      } finally {
        setLoginRequestStatus("idle");
      }
    }
  }

  return (
    <>
      <Meta title={"Login"} />
      <BreadCrumb title="Login" />

      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              {message}
              <h3 className="text-center mb-3">Login</h3>
              <form className="d-flex flex-column gap-15">
                <CustomInput type="email" name="email" placeholder="Email" value={email} onchange={onEmailChange}/>
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password} onchange={onPasswordChange}
                />
                <div>
                  <Link to="/forgot-password">Forgot Password?</Link>

                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="button border-0" onClick={onLogin} disabled={!canLogin}>
                      Login
                    </button>
                    <Link to="/signup" className="button signup ">
                      SignUp
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Login;
