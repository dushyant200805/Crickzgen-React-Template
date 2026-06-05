import { useForm } from "react-hook-form";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faEnvelopeOpen, faLocationDot, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
function ContactFrom() {
                // aos Animation
            useEffect(() => {
          AOS.init({
           duration: 1200, // animation duration
            once: false,    // run only once
          });
        }, []);

         // form Validation 
            const { register,handleSubmit,reset,formState: { errors },} = useForm();

            const onSubmit = async (data) => {
            const formData = new FormData();

            formData.append("contactfmain", true);
            formData.append("fname", data.firstname);
            formData.append("lname", data.lastname);
            formData.append("email", data.email);
            formData.append("phone", data.phone);
            formData.append("message", data.message);

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
            {/* <!-- contact section --> */}
       <section className="py-6">
            <div className="container">
                <div className="row g-3 align-items-center">
                    <div className="col-xl-6" data-aos="fade-right" data-aos-duration="1000">
                        <div className="pe-xl-5" >
                            <span
                                className="py-2 px-4 text-capitalize head-text rounded-pill border light-border d-inline-block mb-3">get
                                in touch</span>
                            <h2 className="head-text text-capitalize fw-semibold pb-3 border-bottom light-border display-5">Your cricket journey starts right
                                here
                            </h2>
                            <div className="row g-3">
                                {/* <!-- Phone --> */}
                                <div className="col-md-6">
                                    <div className="d-flex h-100 align-items-center p-3 gap-2">
                                        <div className="icon-bg ">
                                         <FontAwesomeIcon icon={faPhoneVolume} />
                                        </div>
                                        <div>
                                            <p className="mb-0 head-text fw-semibold fs-5">Phone Number</p>
                                            <a href="#" className="mb-0 para-text">+1 (451) 515-551</a>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Email --> */}
                                <div className="col-md-6">
                                    <div className="d-flex h-100 align-items-center p-3 gap-2">
                                        <div className="icon-bg ">
                                             <FontAwesomeIcon icon={faEnvelopeOpen} />
                                        </div>
                                        <div>
                                            <p className="mb-0 head-text fw-semibold fs-5">Email Address</p>
                                            <a href="#" className="mb-0 para-text">demo@example.com</a>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Office Address --> */}
                                <div className="col-md-6">
                                    <div className="d-flex h-100 align-items-center p-3 gap-2">
                                        <div className="icon-bg ">
                                            <FontAwesomeIcon icon={faLocationDot} />
                                        </div>
                                        <div>
                                            <p className="mb-0 fw-semibold fs-5 head-text">Office Address</p>
                                            <p className="mb-0 para-text">
                                                4857 Westbrook Avenue, 12th Floor, Financial District, Los Angeles, USA
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Working Hours --> */}
                                <div className="col-md-6">
                                    <div className="d-flex h-100 align-items-center p-3 gap-2">
                                        <div className="icon-bg ">
                                             <FontAwesomeIcon icon={faClock} />
                                        </div>
                                        <div>
                                            <p className="mb-0 fw-semibold fs-5 head-text">Working Hours</p>
                                            <p className="mb-0 para-text">
                                                Mon - Sun: 8:00 AM - 8:00 PM
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6" data-aos="zoom-in" data-aos-duration="1000">
                        <div className="shadow p-2 p-sm-3 h-100 rounded-3">
                            <form action="send-email.php" method="POST" id="contactform"  onSubmit={handleSubmit(onSubmit)} noValidate>
                                <div>
                                    <div className="row g-3">
                                        {/* <!-- First Name --> */}
                                        <div className="col-md-6">
                                            <input type="text" aria-label="full-name"
                                                className="form-control input-text p-3 input-bg rounded-3 border light-border shadow-none primefont"
                                                name="fname" id="fname" placeholder="Enter Your Full Name" {...register("fullname", { required: "Enter Your Full Name" })} />
                                                <div className="error">{errors.fullname?.message}</div>
                                        </div>
                                        {/* <!-- Email --> */}
                                        <div className="col-md-6">
                                            <input type="email" aria-label="email-id"
                                                className="form-control input-text p-3 input-bg rounded-3 border light-border shadow-none primefont"
                                                name="email" id="email" placeholder="Enter Your Email Address" {...register('email',{ required:"Enter Your Email Address",pattern: { value: /^\S+@\S+$/i,message: "Please Enter A Vaild Email Address"}})} />
                                                 <div className="error ">{errors.email?.message}</div>
                                        </div>

                                        {/* <!-- Phone --> */}
                                        <div className="col-md-6">
                                            <input type="text" aria-label="phone-number"
                                                className="form-control input-text p-3 input-bg rounded-3 border light-border shadow-none primefont"
                                                name="phone" id="phone" placeholder="Enter Your Phone " onInput={(e) => { e.target.value = e.target.value.replace(/[^0-9]/g, ""); }} {...register("phone", { required: "Enter Your Phone",pattern: { value: /^[6-9]\d{9}$/,message: "Please Enter A Vaild Phone Number"} })}/>
                                                <div className="error ">{errors.phone?.message}</div>
                                        </div>
                                        {/* <!-- subject --> */}
                                        <div className="col-md-6">
                                            <input type="text" aria-label="subject" className="form-control input-text p-3 input-bg rounded-3 border light-border shadow-none primefont"
                                                name="subject" id="subject" placeholder="Enter Your subject" {...register("subject", { required: "Enter Your Subject" })}/>
                                                <div className="error ">{errors.subject?.message}</div>
                                        </div>

                                        {/* <!-- Message --> */}
                                        <div className="col-12">
                                            <textarea name="message" id="message" aria-label="message"
                                                className="form-control input-text p-3 input-bg rounded-3 border light-border shadow-none primefont"
                                                rows="7" placeholder="Your Message" {...register("message", { required: "Enter Your Message" })}></textarea>
                                                <div className="error ">{errors.message?.message}</div>
                                        </div>

                                        {/* <!-- Submit Button --> */}
                                        <div className="col-12 ">
                                            <button type="submit" name="contactfmain"
                                                className="btn prime-btn px-4 rounded-pill w-100 py-2 fs-5 fw-medium text-capitalize rounded-3">
                                            submit Message
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div className="map" data-aos="zoom-in" data-aos-duration="1000">
            <div className="container-fluid">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2480.4438406346094!2d-0.06430397633102654!3d51.56009649352875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sin!4v1751880412504!5m2!1sen!2sin"
                loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-100" style={{height: "450px"}}></iframe>
            </div>
        </div>
        </>
    );
}
export default ContactFrom ;         
    