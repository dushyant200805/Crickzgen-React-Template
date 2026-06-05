import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  faBoxArchive,
  faGear,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";
function WhyChooseSection({ noBg }) {
  // aos Animation
  useEffect(() => {
    AOS.init({
      duration: 1200, // animation duration
      once: false, // run only once
    });
  }, []);

  return (
    <>
      {/* <!-- parmotion --> */}
      <section className={`py-6 ${noBg ? "" : "alt-bg"} `}>
        <div className="container">
          <div className="row g-3 align-items-center justify-content-center">
            <div
              className="col-xl-6"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <div className="p-3">
                <span className="py-2 px-4 text-capitalize head-text rounded-pill border light-border d-inline-block mb-3">
                  why choose us
                </span>
                <h2 className="head-text text-capitalize fw-semibold mb-5 display-5">
                  Where Passion Meets Performance
                </h2>
                <div className="d-flex align-items-center justify-content-center flex-wrap flex-md-nowrap why-choose-wrapper">
                  <div className="why-choose-image">
                    <img src="/why-choose-image-1.webp" alt="" />
                  </div>

                  <p className="para-text ps-sm-4 mb-0">
                    Aliquam condimentum pulvinar ante, sed pellentesque neque.
                    Aenean ut volutpat eros. Nulla mauris nisl, gravida aliquet
                    leo ut, porttitor laoreet nunc
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-6"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <div className="p-2">
                {/* <!-- NAV --> */}
                <ul
                  className="nav nav-pills gallery-tabs mb-5  flex-wrap gap-3 justify-content-center"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className="prime-btn btn border light-border rounded-5 text-capitalize py-2 px-3 fs-5 active"
                      id="pills-Coaching-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-Coaching"
                      type="button"
                      role="tab"
                    >
                      <FontAwesomeIcon icon={faUser} className="me-2" />{" "}
                      Coaching
                    </button>
                  </li>

                  <li className="nav-item" role="presentation">
                    <button
                      className="prime-btn btn border light-border rounded-5 text-capitalize py-2 px-3 fs-5"
                      id="pills-Community-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-Community"
                      type="button"
                      role="tab"
                    >
                      <FontAwesomeIcon icon={faBoxArchive} className="me-2" />{" "}
                      Community
                    </button>
                  </li>

                  <li className="nav-item" role="presentation">
                    <button
                      className="prime-btn btn border light-border rounded-5 text-capitalize py-2 px-3 fs-5"
                      id="pills-Facility-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-Facility"
                      type="button"
                      role="tab"
                    >
                      <FontAwesomeIcon icon={faGear} className="me-2" />{" "}
                      Facility
                    </button>
                  </li>
                </ul>

                {/* <!-- TAB CONTENT  --> */}
                <div className="tab-content">
                  {/* <!-- Coaching --> */}
                  <div
                    className="tab-pane fade show active"
                    id="pills-Coaching"
                    role="tabpanel"
                  >
                    <div className="row g-3 align-items-center">
                      <div className="col-sm-6">
                        <div className="image-container">
                          <img
                            src="/why-choose-image-2.webp"
                            className="w-100 object-fit-cover rounded-3"
                            height="300"
                            alt=""
                          />
                        </div>
                      </div>

                      <div className="col-sm-6">
                        <div className="content">
                          <h3 className="head-text fw-semibold fs-4 mb-3">
                            Coaching Built for Performance and Progress
                          </h3>

                          <p className="para-text pb-6">
                            Fusce efficitur justo non maximus iaculis. Aenean in
                            diam quis diam feugiat pulvinar.
                          </p>

                          <Link
                            to="/about-us"
                            className="py-2 px-4 btn prime-btn rounded-pill text-capitalize fs-5"
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Community --> */}
                  <div
                    className="tab-pane fade"
                    id="pills-Community"
                    role="tabpanel"
                  >
                    <div className="row g-3 align-items-center">
                      <div className="col-sm-6">
                        <div className="image-container">
                          <img
                            src="/why-choose-image-3.webp"
                            className="w-100 object-fit-cover rounded-3"
                            height="300"
                            alt=""
                          />
                        </div>
                      </div>

                      <div className="col-sm-6">
                        <div className="content">
                          <h3 className="head-text fw-semibold fs-4 mb-3">
                            Where Friendships Grow Alongside Skills
                          </h3>

                          <p className="para-text pb-6">
                            Fusce efficitur justo non maximus iaculis. Aenean in
                            diam quis diam feugiat pulvinar.
                          </p>

                          <Link
                            to="/about-us"
                            className="py-2 px-4 btn prime-btn rounded-pill text-capitalize fs-5"
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Facility --> */}
                  <div
                    className="tab-pane fade"
                    id="pills-Facility"
                    role="tabpanel"
                  >
                    <div className="row g-3 align-items-center">
                      <div className="col-sm-6">
                        <div className="image-container">
                          <img
                            src="/why-choose-image-3.webp"
                            className="w-100 object-fit-cover rounded-3"
                            height="300"
                            alt=""
                          />
                        </div>
                      </div>

                      <div className="col-sm-6">
                        <div className="content">
                          <h3 className="head-text fw-semibold fs-4 mb-3">
                            World Class Training Facility
                          </h3>

                          <p className="para-text pb-6">
                            Fusce efficitur justo non maximus iaculis. Aenean in
                            diam quis diam feugiat pulvinar.
                          </p>

                          <Link
                            to="/about-us"
                            className="py-2 px-4 btn prime-btn rounded-pill text-capitalize fs-5"
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
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
export default WhyChooseSection;
