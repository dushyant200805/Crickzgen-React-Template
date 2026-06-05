import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router";
function CommonBanner({BannerData}) {
    useEffect(() => {
      AOS.init({
       duration: 1200, // animation duration
        once: false,    // run only once
      });
    }, [])
    return (
        <>
        
         {/* <!-- about-banner --> */}
      <section className="banner-section">
         <div className="container">
             <div className="head-content mx-auto" data-aos="fade-up" data-aos-duration="1500">
                <h1 className="white-text text-capitalize fw-semibold mb-3 display-3">{BannerData.BannerTitle}</h1>
                 <Link to="/" className="prime-text text-capitalize fw-semibold fs-5">home
                 </Link> <span className="white-text text-capitalize fw-semibold fs-5"> / {BannerData.BannerTitle}</span>
             </div>
         </div>   
    </section>
        
        </>
    );
}

export default CommonBanner;