import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
function ParmotionSection() {
    useEffect(() => {
        AOS.init({
            duration: 1200, // animation duration
            once: false,    // run only once
        });
    }, [])
    return (
        <>
            <section className="parmotion-section">
                <div className="container">
                    <div className="head-content mx-auto" data-aos="zoom-in" data-aos-duration="600">
                        <h2 className="white-text text-capitalize fw-semibold display-4 mb-3">Become Part of Our Cricket Family</h2>
                        <p className="white-text text-capitalize">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
                            quaerat consequuntur dolores veniam laudantium maxime voluptate autem, nam provident voluptatum?</p>
                        <Link to="/contact" className="py-2 px-4 btn prime-btn rounded-pill text-capitalize fs-5">join crickzgen
                            today !</Link>
                    </div>
                </div>
            </section>
        </>
    );
}
export default ParmotionSection;