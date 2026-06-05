import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
import { useState, useEffect } from "react";
import { faArrowRight, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { faFacebookF, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";
const year = new Date().getFullYear();
function Footer() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShow(true);
            } else {
                setShow(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    // form Validation 
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();

    const onSubmit = async (data) => {
        const formData = new FormData();

        formData.append("newsletter", true);
        formData.append("n_email", data.email);

        try {
            const response = await fetch("http://localhost:8080/send_email.php", {
                method: "POST",
                body: formData,
            });

            const result = await response.text();
            console.log(result);

            reset();
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <>
            {/* <!-- footer --> */}
            <footer className="footer-bg pt-6">
                <div className="container">
                    <div className="row g-3 align-items-center justify-content-between border-bottom light-border py-3">
                        <div className="col-lg-6 ">
                            <h2 className="head-text text-capitalize fw-bold">Cricket coaching, training, and matches—together</h2>
                        </div>
                        <div className="col-lg-4 justify-content-lg-end d-flex justify-content-center">
                            <Link to="/contact" className="py-2 px-4 btn prime-btn rounded-pill text-capitalize fs-5">get
                                membership now <FontAwesomeIcon icon={faArrowRight} className="ms-2" /> </Link>
                        </div>
                    </div>
                    <div className="row g-3 py-5 border-bottom light-border">
                        <div className="col-sm-6 col-lg-4">
                            <Link to="/" className="d-block mb-2">
                                <img src="/logo-light.png" data-logo="light" className="object-fit-contain" height="80"
                                    alt="logo-light" />
                            </Link>
                            <p className="footer-text mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente sint,
                                vitae perferendis dolorem molestiae ducimus. </p>

                            <div className="d-flex py-3 gap-2 align-items-center">
                                <Link to="#" className="icon-bg" aria-label="Facebook-icon">
                                    <FontAwesomeIcon icon={faFacebookF} />
                                </Link>
                                <Link to="#" className="icon-bg" aria-label="instagram-icon">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </Link>
                                <Link to="#" className="icon-bg" aria-label="twitter-icon">
                                    <FontAwesomeIcon icon={faXTwitter} />
                                </Link>
                                <Link to="#" className="icon-bg" aria-label="youtube-icon">
                                    <FontAwesomeIcon icon={faFacebookF} />
                                </Link>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4 col-xl-3 footer-text">
                            <h3 className="text-capitalize fs-5 mb-3 pb-2 fw-semibold border-bottom light-border">Contact</h3>
                            <ul className="list-unstyled text-capitalize ps-2">
                                <li className="mb-2  footer-link"><Link to="#">+01 23456789</Link></li>
                                <li className="mb-2  footer-link"><Link to="#">xyz@gmail.com</Link></li>
                                <li className="mb-2">78 West 85th Street New York, NY 10024 United States</li>

                            </ul>
                        </div>
                        <div className="col-sm-6 col-lg-4 col-xl-2 footer-text">
                            <h3 className="text-capitalize fs-5 mb-3 pb-2 fw-semibold border-bottom light-border">other links</h3>
                            <ul className="list-unstyled text-uppercase ps-2">
                                <li className="mb-2  footer-link"><Link to="/">home</Link></li>
                                <li className="mb-2  footer-link"><Link to="/about-us">about us</Link></li>
                                <li className="mb-2  footer-link"><Link to="/gallery">gallery</Link></li>
                                <li className="mb-2  footer-link"><Link to="/blogs">Blogs</Link></li>
                                <li className="mb-2  footer-link"><Link to="/contact">contact </Link></li>
                            </ul>
                        </div>

                        <div className="col-sm-6 col-xl-3 footer-text">
                            <h3 className="text-capitalize fs-5 mb-3 pb-2 footer-text fw-semibold border-bottom light-border">
                                newsletter</h3>
                            <form action="send-email.php" method="POST" id="newsletter" onSubmit={handleSubmit(onSubmit)}>
                                <div className="input-group mb-3">
                                    <input type="email" name="n_email" id="n_email"
                                        className="form-control input-text shadow-none border light-border bg-transparent py-2 rounded-start-5"
                                        placeholder="subscribe now" aria-label="subscribe to our newsletter" {...register('email', { required: "Enter Your Email Address", pattern: { value: /^\S+@\S+$/i, message: "Please Enter A Vaild Email Address" } })} />
                                    <button className="btn prime-btn rounded-end-5" type="submit" name="newsletter">subscribe</button>
                                    <div className="error ">{errors.email?.message}</div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="text-center footer-text  text-capitalize py-4">
                    <div className="container d-flex justify-content-between">
                        <div className="">
                            &copy;{year} all rights reserved by theme.
                        </div>
                        <div className="">
                            <Link to="#">help</Link> | <Link to="#"> Privacy Policy</Link> | <Link
                                to="#"> Term’s & Condition</Link>
                        </div>
                    </div>
                </div>
            </footer>

            {/* <!-- back to top --> */}
            <a className={`btn prime-btn rounded-5 shadow ${show ? "show" : ""}`} id="backtotop" onClick={scrollToTop}>
                <FontAwesomeIcon icon={faChevronUp} className="fs-4" />
            </a>
        </>
    );
}
export default Footer;