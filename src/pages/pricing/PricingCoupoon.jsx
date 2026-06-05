import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router";
function PricingCoupoon() {
        useEffect(() => {
          AOS.init({
           duration: 1200, // animation duration
            once: false,    // run only once
          });
        }, [])
    return(
        <>
         <section className="py-5">
        <div className="container">
            <div className="row g-3">
                <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-duration="1500">
                    <div className="discount-card h-100 card-bg p-4 text-center border">
                        <div className="white-text text-uppercase mb-3" >EXPIRES ON : 10/11/<span className="currentyear">2025</span></div>
                        <h2 className="white-text fs-2 text-capitalize fw-semibold">$1,500 OFF</h2>
                        <h3 className="white-text fs-4 text-capitalize mb-4">Weekly Rentals</h3>
                        <Link to="#" className="btn prime-btn text-capitalize py-2 px-3">avail now</Link>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-duration="1500">
                    <div className="discount-card h-100 p-4 text-center border">
                        <div className="para-text text-uppercase mb-3">EXPIRES ON : 22/11/<span className="currentyear">2025</span></div>
                        <h2 className="head-text fs-2 text-capitalize fw-semibold">10% OFF</h2>
                        <h3 className="head-text fs-4 text-capitalize mb-4">Self-Drive Cars</h3>
                        <Link to="#" className="btn prime-btn text-capitalize py-2 px-3">avail now</Link>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-duration="1500">
                    <div className="discount-card h-100 card-bg p-4 text-center border">
                        <div className="white-text text-uppercase mb-3">EXPIRES ON : 05/12/<span className="currentyear">2025</span></div>
                        <h2 className="white-text fs-2 text-capitalize fw-semibold">$2,000 OFF</h2>
                        <h3 className="white-text fs-4 text-capitalize mb-4">Airport Transfers</h3>
                        <Link to="#" className="btn prime-btn text-capitalize py-2 px-3">avail now</Link>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-duration="1500">
                    <div className="discount-card h-100 p-4 text-center border">
                        <div className="para-text text-uppercase mb-3">EXPIRES ON : 18/12/<span className="currentyear">2025</span></div>
                        <h2 className="head-text fs-2 text-capitalize fw-semibold">15% OFF</h2>
                        <h3 className="head-text fs-4 text-capitalize mb-4">Corporate Bookings</h3>
                        <Link to="#" className="btn prime-btn text-capitalize py-2 px-3">avail now</Link>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-duration="1500">
                    <div className="discount-card h-100 border  p-4 text-center">
                        <div className="para-text text-uppercase mb-3">EXPIRES ON : 02/11/<span className="currentyear">2025</span></div>
                        <h2 className="head-text fs-2 text-capitalize fw-semibold">$1,000 OFF</h2>
                        <h3 className="head-text fs-4 text-capitalize mb-4">Weekend Trips</h3>
                        <Link to="#" className="btn prime-btn text-capitalize py-2 px-3">avail now</Link>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-duration="1500">
                    <div className="discount-card h-100 border card-bg p-4 text-center">
                        <div className="white-text text-uppercase mb-3">EXPIRES ON : 28/11/<span className="currentyear">2025</span></div>
                        <h2 className="white-text fs-2 text-capitalize fw-semibold">12% OFF</h2>
                        <h3 className="white-text fs-4 text-capitalize mb-4">Long Distance Travel</h3>
                        <Link to="#" className="btn prime-btn text-capitalize py-2 px-3">avail now</Link>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-duration="1500">
                    <div className="discount-card h-100 border  p-4 text-center">
                        <div className="para-text text-uppercase mb-3">EXPIRES ON : 12/12/<span className="currentyear">2025</span></div>
                        <h2 className="head-text fs-2 text-capitalize fw-semibold">$2,500 OFF</h2>
                        <h3 className="head-text fs-4 text-capitalize mb-4">Luxury Cars</h3>
                        <Link to="#" className="btn prime-btn text-capitalize py-2 px-3">avail now</Link>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-duration="1500">
                    <div className="discount-card h-100 border card-bg p-4 text-center">
                        <div className="white-text text-uppercase mb-3">EXPIRES ON : 27/12/<span className="currentyear">2025</span></div>
                        <h2 className="white-text fs-2 text-capitalize fw-semibold">20% OFF</h2>
                        <h3 className="white-text fs-4 text-capitalize mb-4">Festive Bookings</h3>
                        <Link to="#" className="btn prime-btn text-capitalize py-2 px-3">avail now</Link>
                    </div>
                </div>

            </div>
        </div>
         </section>
        </>
    );
}
export default PricingCoupoon;  