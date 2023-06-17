
import CustomInput from "../../components/CustomInput";
import "./Register.css";

import React from "react";
import { addNewUser, getStatus } from "../user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Container from "../../components/admin/components/Container";
import { Breadcrumb } from "react-bootstrap";
import { useState } from "react";

const Register = () => {


  const [firstname,setFirstname] = useState('')
  const [lastname,setLastname] = useState('')
  const [fullname,setFullname] = useState('')
  const [email,setEmail] = useState('')
  const [phone,setPhone] = useState('')
  const [password,setPassword] = useState('')
  const [confirmPassword,setConfirmPassword] = useState('')
  const [address,setAddress] = useState('')
  const [signUpRequestStatus,setSignUpRequestStatus] = useState('idle')
  const [message,setMessage] = useState('')

  useEffect(()=>{
    setMessage('')
  },[firstname,lastname,fullname,email,password,phone])

  const onFirstnameChange = e => {setFirstname(e.target.value)}
  const onLastnameChange = e => {setLastname(e.target.value)}
  const onFullnameChange = e => {setFullname(e.target.value)}
  const onEmailChange = e => {setEmail(e.target.value)}
  const onPhoneChange = e => {setPhone(e.target.value)}
  const onPasswordChange = e => {setPassword(e.target.value)}
  const onConPasswordChange = e => {setConfirmPassword(e.target.value)}
  const onAddressChange = e => {setAddress(e.target.value)}
  const canCreate = [firstname,lastname,fullname,email,phone,password,confirmPassword,address].every(Boolean) && signUpRequestStatus === 'idle'
  const dispatch = useDispatch();

  const status = useSelector(getStatus)

  const onSubmit = (e) => {
    e.preventDefault()

    if(canCreate){
      setSignUpRequestStatus('pending')
      try {
        dispatch(addNewUser({
          firstname,
          lastname,
          fullname,
          username:email,
          phone,
          password,confirmPassword,address
        })).unwrap()

        if(status === 'created'){
        setFirstname('')
        setLastname('')
        setEmail('')
        setPhone('')
        setFullname('')
        setPassword('')
        setConfirmPassword('')
        setAddress('')
       }else{
        setMessage(<span className="alert-danger">fail to create your account</span>)
       }
        
      } catch (error) {
        console.error(error)
      } finally{
        setSignUpRequestStatus('idle')
      }
    }
  }



  return (
    <>
      
  <div class="container register h-50 d-lg-flex half ">
    <div class="bg order-1 order-md-2 bg-image" style={{backgroundImage:" url('https://tycheventures.com/wp-content/uploads/2020/09/were-hiring-scaled.jpg')"}}>
     
    </div>
    <div class="contents order-2 order-md-1 ">

    
      <Breadcrumb title="Sign Up" />
      <Container class1="login-wrapper py-5 home-wrapper-2 bg-info">
        <div className="row">
          <div className="col-12 ">
            <div className="auth-card">
              {message}
              <h3 className="text-center mb-3">Sign Up</h3>
              <form action="" className="d-flex flex-column gap-15">

               


                <div className="row">
                  <div  className="col-md-6">
                    <label className="p-2">Firstname***</label>
                  <CustomInput type="text" name="firstname" placeholder="Firstname" value={firstname} onchange={onFirstnameChange}/>
                  </div>

                <div  className="col-md-6">
                <label className="p-2">Lastname***</label>
                <CustomInput type="text" name="lastname" placeholder="Lastname" value={lastname} onchange={onLastnameChange}/>
                </div>

                </div>

                <div className="row">
                  <div  className="col-md-6">
                  <label className="p-2">Fullname***</label>
                  <CustomInput type="text" name="fullname" placeholder="Fullname" value={fullname} onchange={onFullnameChange}/>
                  </div>
                <div  className="col-md-6">
                <label className="p-2">Username***</label>
                <CustomInput type="email" name="email" placeholder="Email" value={email} onchange={onEmailChange}/>
                  </div>
                  
                  </div>

                
                  <div className="row">
                    <div  className="col-md-6">
                    <label className="p-2">Password***</label>
                    <CustomInput
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password} onchange={onPasswordChange}
                />
                    </div>
                <div  className="col-md-6">

                <label className="p-2">ConfirmPassword***</label>
                <CustomInput
                  type="confirmPassword"
                  name="confirmPassword"
                  placeholder="confirmPassword"
                  value={confirmPassword} onchange={onConPasswordChange}
                />
                  </div></div>
                  <label className="p-2">Phone***</label>
                <CustomInput
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number"
                  value={phone} onchange={onPhoneChange}
                />
                <label className="p-2">Address***</label>
                  <CustomInput
                  type="address"
                  name="address"
                  placeholder="address"
                  value={address} onchange={onAddressChange}
                />
             
                <div>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center w-100">
                    <button className="button border-0" onClick={onSubmit} disabled={!canCreate}>Sign Up</button>
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

export default Register;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   MDBContainer,
//   MDBTabs,
//   MDBTabsItem,
//   MDBTabsLink,
//   MDBTabsContent,
//   MDBTabsPane,
//   MDBIcon,
//   MDBCustomInput,
//   MDBCheckbox,
// } from "mdb-react-ui-kit";
// import { useDispatch, useSelector } from "react-redux";
// import { addNewUser, getStatus } from "../user/userSlice";
// import { useEffect } from "react";

// function Register() {

//   const [justifyActive, setJustifyActive] = useState("tab1");

//   const handleJustifyClick = (value) => {
//     if (value === justifyActive) {
//       return;
//     }

//     setJustifyActive(value);
//   };

//   const [firstname,setFirstname] = useState('')
//   const [lastname,setLastname] = useState('')
//   const [fullname,setFullname] = useState('')
//   const [email,setEmail] = useState('')
//   const [phone,setPhone] = useState('')
//   const [password,setPassword] = useState('')
//   const [confirmPassword,setConfirmPassword] = useState('')
//   const [signUpRequestStatus,setSignUpRequestStatus] = useState('idle')
//   const [message,setMessage] = useState('')

//   useEffect(()=>{
//     setMessage('')
//   },[firstname,lastname,fullname,email,password,phone])

//   const onFirstnameChange = e => {setFirstname(e.target.value)}
//   const onLastnameChange = e => {setLastname(e.target.value)}
//   const onFullnameChange = e => {setFullname(e.target.value)}
//   const onEmailChange = e => {setEmail(e.target.value)}
//   const onPhoneChange = e => {setPhone(e.target.value)}
//   const onPwChanbe = e => {setPassword(e.target.value)}
//   const onConfirmPwChange = e => {setConfirmPassword(e.target.value)}

//   const canCreate = [firstname,lastname,fullname,email,phone,password,confirmPassword].every(Boolean) && signUpRequestStatus === 'idle'
//   const dispatch = useDispatch();

//   const status = useSelector(getStatus)

//   const onSubmit = (e) => {
//     e.preventDefault()

//     if(canCreate){
//       setSignUpRequestStatus('pending')
//       try {
//         dispatch(addNewUser({
//           firstname,
//           lastname,
//           fullname,
//           username:email,
//           phone,
//           password,
//           confirmPassword
//         })).unwrap()

//         if(status === 'created'){
//         setFirstname('')
//         setLastname('')
//         setEmail('')
//         setPhone('')
//         setFullname('')
//         setPassword('')
//         setConfirmPassword('')
//        }else{
//         setMessage(<span className="alert-danger">fail to create your account</span>)
//        }

//       } catch (error) {
//         console.error(error)
//       } finally{
//         setSignUpRequestStatus('idle')
//       }
//     }
//   }

//   return (
//     <>
//       <div class="container py-5 bg-dark reg-header mb-2  ">
//         <div class="container my-5 pt-5 pb-4">
//           <h1 class="display-3 text-white mb-3 ">Registeration Page</h1>
//           {message}
//           <nav aria-label="breadcrumb">
//             <ol class="breadcrumb text-uppercase">
//               <li class="breadcrumb-item text-white">
//                 <Link href="#">Home</Link>
//               </li>
//               <li class="breadcrumb-item text-white">
//                 <Link href="#">Pages</Link>
//               </li>
//               <li class="breadcrumb-item  active" aria-current="page">
//                 Registeration
//               </li>
//             </ol>
//           </nav>
//         </div>
//       </div>

//       <h2 className="text-center my-5 mb-1">Registeration</h2>
//       <MDBContainer className="p-4  d-flex flex-column text-center w-50 auth-3d-card">
//         <MDBTabs
//           pills
//           justify
//           className="mb-3 d-flex flex-row justify-content-between  "
//         >
//           <MDBTabsItem>
//             <MDBTabsLink
//               onClick={() => handleJustifyClick("tab1")}
//               active={justifyActive === "tab1"}
//               className="register text-dark ">
//               Login
//             </MDBTabsLink>
//           </MDBTabsItem>
//           <MDBTabsItem >
//             <MDBTabsLink
//               onClick={() => handleJustifyClick("tab2")}
//               active={justifyActive === "tab2"}
//             className="register  text-dark">
//               Register
//             </MDBTabsLink>
//           </MDBTabsItem>
//         </MDBTabs>

//         {/* User */}
//         <MDBTabsContent>
//           <MDBTabsPane show={justifyActive === "tab1"}>
//             <div className="text-center mb-3">
//               <p>Sign in with:</p>

//               <div
//                 className="d-flex justify-content-between mx-auto"
//                 style={{ width: "40%" }}
//               >
//                 <Link

//                   className="m-1"
//                   style={{ color: "#1266f1" }}
//                 >
//                  <i class="fa-brands fa-facebook"></i>
//                 </Link>

//                 <Link

//                   className="m-1"
//                   style={{ color: "#1266f1" }}
//                 >
//                   <i class="fa-brands fa-twitter"></i>
//                 </Link>

//                 <Link

//                   className="m-1"
//                   style={{ color: "#1266f1" }}
//                 >
//                   <i class="fa-brands fa-google"></i>
//                 </Link>

//                 <Link

//                   className="m-1"
//                   style={{ color: "#1266f1" }}
//                 >
//                   <i class="fa-brands fa-github"></i>
//                 </Link>
//               </div>

//               <p className="text-center mt-3">or:</p>
//             </div>

//             <MDBCustomInput
//               wrapperClass="mb-4"
//               label="Email address"
//               id="form1"
//               type="email"
//             />
//             <MDBCustomInput
//               wrapperClass="mb-4"
//               label="Password"
//               id="form2"
//               type="password"
//             />

//             <div className="d-flex justify-content-between mx-4 mb-4">
//               <MDBCheckbox
//                 name="flexCheck"
//                 value=""
//                 id="flexCheckDefault"
//                 label="Remember me"
//               />
//               <Link href="!#">Forgot password?</Link>
//             </div>

//             <button className="regButton btn btn-outline-primary mb-4 w-100">Sign in</button>
//             <p className="text-center">
//               Have an account ? {" "}
//               <Link
//                 onClick={() => handleJustifyClick("tab2")}
//                 active={justifyActive === "tab2"}
//               >
//                 Register
//               </Link>
//             </p>
//           </MDBTabsPane>

//           <MDBTabsPane show={justifyActive === "tab2"}>
//             <div className="text-center mb-3">
//               <p>Sign un with:</p>

//               <div
//                 className="d-flex justify-content-between mx-auto"
//                 style={{ width: "40%" }}
//               >
//                 <Link

//                   className="m-1"
//                   style={{ color: "#1266f1" }}
//                 >
//                   <i class="fa-brands fa-facebook"></i>
//                 </Link>

//                 <Link

//                   className="m-1"
//                   style={{ color: "#1266f1" }}
//                 >
//                   <MDBIcon fab icon="twitter" size="sm" />
//                 </Link>

//                 <Link

//                   className="m-1"
//                   style={{ color: "#1266f1" }}
//                 >
//                   <i class="fa-brands fa-google"></i>
//                 </Link>

//                 <Link

//                   className="m-1"
//                   style={{ color: "#1266f1" }}
//                 >
//                   <i class="fa-brands fa-github"></i>
//                 </Link>
//               </div>

//               <p className="text-center mt-3">or:</p>
//             </div>
//             <form class="row g-3">
//               <div className="row ">
//                 <div className="col-md-6">
//                   <MDBCustomInput
//                     wrapperClass="mb-4"
//                     label="Firstame"
//                     id="firstname"
//                     type="text"
//                     value={firstname} onchange={onFirstnameChange}
//                   />
//                 </div>
//                 <MDBCustomInput
//               wrapperClass="mb-4"
//               label="Password"
//               id="firstname"
//               type="password"
//               value={firstname}
//             />
//                 <div className="col-md-6">
//                   <MDBCustomInput
//                     wrapperClass="mb-4"
//                     label="LastName"
//                     id="lastname"
//                     type="text"
//                     value={lastname} onchange={onLastnameChange}
//                   />
//                 </div>
//               </div>
//               <div className="row ">
//                 <div className="col-md-6">
//                   <MDBCustomInput
//                     wrapperClass="mb-4"
//                     label="Fullname"
//                     id="fullname"
//                     type="text"
//                     value={fullname} onchange={onFullnameChange}
//                   />
//                 </div>
//                 <div className="col-md-6">
//                   <MDBCustomInput
//                     wrapperClass="mb-4"
//                     label="Username"
//                     id="email"
//                     type="email"
//                     value={email} onchange={onEmailChange}
//                   />
//                 </div>
//               </div>
//               <div className="row ">
//                 <div className="col-md-6">
//                   <select
//                     class="form-select"
//                     aria-label="Default select example"
//                   >
//                     <option selected>Select Country</option>
//                     <option value="1">Myanmar</option>

//                   </select>
//                 </div>
//                 <div className="col-md-6">
//                   <MDBCustomInput
//                     wrapperClass="mb-4"
//                     label="Phone Number"
//                     id="phone"
//                     type="text"
//                     value={phone} onchange={onPhoneChange}
//                   />
//                 </div>
//               </div>
//               <div className="row ">
//                 <div className="col-md-6">
//                   <MDBCustomInput
//                     wrapperClass="mb-4"
//                     label="Password"
//                     id="password"
//                     type="password"
//                     value={password} onchange={onPwChanbe}
//                   />
//                 </div>
//                 <div className="col-md-6 ">
//                   <MDBCustomInput
//                     wrapperClass="mb-4"
//                     label="ConfirmPassword"
//                     id="confirmPassword"
//                     type="confirmpassword"
//                     value={confirmPassword} onchange={onConfirmPwChange}
//                   />
//                 </div>
//               </div>
//             </form>

//             <div className="d-flex justify-content-center mb-4">
//               <MDBCheckbox
//                 name="flexCheck"
//                 id="flexCheckDefault"
//                 label="I have read and agree to the terms"
//               />
//             </div>

//             <button className="regButton btn btn-outline-primary mb-4 w-100" onClick={onSubmit} >Sign up</button>
//           </MDBTabsPane>
//         </MDBTabsContent>

//       </MDBContainer>
//     </>
//   );
// }

// export default Register;
