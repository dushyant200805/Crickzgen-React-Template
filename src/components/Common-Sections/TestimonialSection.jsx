import { useEffect, useRef } from "react";
import Splide from "@splidejs/splide";
import "@splidejs/splide/css";
import AOS from "aos";
import "aos/dist/aos.css";
import TestimonialCard from "../Ui/TestimonialCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function TestimonialSection({ noBg }) {
     const sliderRef = useRef(null);
  // aos animation
useEffect(() => {
  AOS.init({
    duration: 1000, // animation duration
    once: false,     // run only once
  });
}, []);


  useEffect(() => {
    const splide = new Splide(sliderRef.current, {
      type: "loop",
      perPage: 1,
      perMove: 1,             
      autoplay: false,
      interval: 2000,
      speed: 800,            
      arrows: false,
      pagination: false,
      pauseOnHover: true,     
      gap: "20px",
      breakpoints: {
        1024: { perPage: 2 },
        768: { perPage: 1 },
      },
    });

    splide.mount();

    return () => splide.destroy();  
  }, []);


    return (
        <>
                {/* <!-- testimonial --> */}
    <section className={`py-6 ${noBg ? "" : "alt-bg"}`} data-aos="fade-up" data-aos-duration="1500">
       <div className="container">
            <div className="row g-3">
          
                <div className="col-lg-4">
                    <div className="test-card mb-3 mb-lg-0">
                        <div className="image-container" data-aos="zoom-in" data-aos-duration="1500">
                            <img src="/public/testimonial-image-1.webp" alt=""
                                className="w-100 object-fit-cover rounded-3" height="450"/>
                        </div>
                        <div className="content text-center card-bg rounded-3 p-2" data-aos="zoom-in"
                            data-aos-duration="1500">
                            <div className="white-text">
                                <span><i className="fa-solid fa-star me-1"></i><i className="fa-solid fa-star me-1"></i><i
                                        className="fa-solid fa-star me-1"></i>
                                    <i className="fa-solid fa-star me-1"></i><i className="fa-solid fa-star me-1"></i></span>
                            </div>
                            <div className="white-text">
                                <h3 className="text-capitalize fs-7 fw-semibold">5.0 Rated Beginner Cricket Coaches</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8" data-aos="fade-right" data-aos-duration="1500">
                    <div className="p-3">
                        <span className="py-2 px-4 text-capitalize head-text rounded-pill border light-border d-inline-block mb-3">meet
                            Testimonial</span>
                        <h2 className="head-text text-capitalize fw-semibold mb-3 display-5">Trusted by Our Team, Loved
                            by Our Community
                        </h2>
                        <div id="testimonial-slider" className="splide" ref={sliderRef}>
                            <div className="splide__track">
                                <ul className="splide__list">
                                  <TestimonialCard/>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    </section>
        </>
    );
}
export default TestimonialSection;