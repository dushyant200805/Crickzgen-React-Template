import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function AboutSection({ noBg }) {
  useEffect(() => {
    AOS.init({
      duration: 1200, // animation duration
      once: false, // run only once
    });
  }, []);
  return (
    <section className={`py-6 ${noBg ? "" : "alt-bg"} `}>
      <div className="container">
        <div className="row g-4">
          <div
            className="col-xl-6"
            data-aos="fade-down"
            data-aos-duration="1500"
          >
            <div className="image-container position-relative d-flex align-items-center justify-content-center p-3">
              <div className="about-image-container-1">
                <img src="/public/about-image-1.webp" alt="" />
              </div>
              <div className="about-image-container-2">
                <img src="/public/about-image-2.webp" alt="" />
              </div>
            </div>
          </div>
          <div className="col-xl-6" data-aos="fade-up" data-aos-duration="1500">
            <div className="about-content p-3">
              <span className="py-2 px-4 text-capitalize head-text rounded-pill border light-border d-inline-block mb-3">
                about us
              </span>
              <h2 className="head-text text-capitalize fw-semibold  display-5">
                Behind Every Boundary, There’s a Brotherhood
              </h2>
              <p className="para-text text-capitalize fw-normal my-4">
                Sed dignissim massa tellus, ac pulvinar dolor porta quis. Aenean
                consequat, velit eget vulputate lobortis, sapien tortor maximus
                nulla, sit amet ultrices velit lectus sed turpis. Nunc a
                convallis lorem, ut pretium nisi.
              </p>
              <div className="pb-4 border-bottom light-border">
                <h3 className="fs-7 para-text text-capitalize fw-semibold mb-3">
                  {" "}
                  <span className="icon-bg me-2">
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                  A place where talent meets opportunity
                </h3>
                <h3 className="fs-7 para-text text-capitalize fw-semibold mb-3">
                  {" "}
                  <span className="icon-bg me-2">
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                  Guided by teamwork, discipline, and respect
                </h3>
                <h3 className="fs-7 para-text text-capitalize fw-semibold mb-3">
                  {" "}
                  <span className="icon-bg me-2">
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                  Creating champions on and off the field
                </h3>
              </div>
              <div className="d-flex align-items-center flex-wrap justify-content-between">
                <div className="about-player-card py-4 d-flex align-items-center gap-3">
                  <div className="image-container ">
                    <img
                      src="/public/about-image-3.webp"
                      alt=""
                      className="w-100 object-fit-cover "
                      height="80"
                    />
                  </div>
                  <div className="content">
                    <h3 className="head-text text-capitalize fs-4 mb-0 fw-semibold">
                      James Whitmore
                    </h3>
                    <p className="para-text text-capitalize fw-medium mb-0">
                      Founder & Head Coach
                    </p>
                  </div>
                </div>
                <div className="">
                  <Link
                    to="/about-us"
                    className="py-2 px-4 btn prime-btn rounded-pill text-capitalize fs-5"
                  >
                    read more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
