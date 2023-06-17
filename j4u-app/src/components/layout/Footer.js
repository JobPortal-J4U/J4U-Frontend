
import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
  return (
    <>
            <div class="container bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
            <div class="container py-5">
                <div class="row g-5">
                    <div class="col-lg-3 col-md-6">
                        <h5 class="text-white mb-4">Company</h5>
                        <Link class="btn-link text-white-50" href="">About Us</Link>
                        <Link class="btn-link text-white-50" href="">Contact Us</Link>
                        <Link class="btn-link text-white-50" to="/jobs">Job Lists</Link>
                        <Link class="btn-link text-white-50" href="">Privacy Policy</Link>
                        <Link class="btn-link text-white-50" href="">Terms & Condition</Link>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h5 class="text-white mb-4">Quick Links</h5>
                        <Link class="btn-link text-white-50" href="">About Us</Link>
                        <Link class="btn-link text-white-50" href="">Contact Us</Link>
                        <Link class="btn-link text-white-50" href="">Our Services</Link>
                        <Link class="btn-link text-white-50" href="">Privacy Policy</Link>
                        <Link class="btn-link text-white-50" href="">Terms & Condition</Link>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h5 class="text-white mb-4">Contact</h5>
                        <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>HMM, Mandalay, Myanmar</p>
                        <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>09878787878</p>
                        <p class="mb-2"><i class="fa fa-envelope me-3"></i>j4u@gmail.com</p>
                        <div class="d-flex pt-2">
                            <Link class="btn btn-outline-light btn-social" href=""><i class="fab fa-twitter"></i></Link>
                            <Link class="btn btn-outline-light btn-social" href=""><i class="fab fa-facebook-f"></i></Link>
                            <Link class="btn btn-outline-light btn-social" href=""><i class="fab fa-youtube"></i></Link>
                            <Link class="btn btn-outline-light btn-social" href=""><i class="fab fa-linkedin-in"></i></Link>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h5 class="text-white mb-4">Newsletter</h5>
                        <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                        <div class="position-relative mx-auto" style={{maxWidth: "400px"}}>
                            <input class="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email"/>
                            <button type="button" class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="copyright">
                    <div class="row">
                        <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; <Link class="border-bottom" href="https://freewebsitecode.com">J<span>4</span>U</Link>, All Right Reserved. 
							
							
							Designed By <Link class="border-bottom" href="https://freewebsitecode.com">Zack</Link>
                        </div>
                        <div class="col-md-6 text-center text-md-end">
                            <div class="footer-menu">
                                <Link href="">Home</Link>
                                <Link href="">Cookies</Link>
                                <Link href="">Help</Link>
                                <Link href="">FQAs</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer