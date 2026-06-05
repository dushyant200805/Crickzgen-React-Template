import { Link } from "react-router-dom";
import Splide from "@splidejs/splide";
import "@splidejs/splide/css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faShare } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef } from "react";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
function HeroBanner() {
  // aos Animation
  useEffect(() => {
    AOS.init({
      duration: 1200, // animation duration
      once: false, // run only once
    });
  }, []);

  const sliderRef = useRef(null);
  useEffect(() => {
    const splide = new Splide(sliderRef.current, {
      type: "fade", // 🔥 Fade instead of slide
      rewind: true, // Smooth looping
      perPage: 1,
      autoplay: true,
      interval: 3000, // Change timing if needed
      speed: 800, // Fade transition speed
      arrows: false,
      pagination: false,
      pauseOnHover: false,
      pauseOnFocus: false,
      drag: false,
      keyboard: false,
    });

    splide.mount();

    return () => splide.destroy();
  }, []);

  return (
    //  <!-- banner-section -->
    <section className="banner-bg  mx-4">
      <div id="banner-slider" className="splide" ref={sliderRef}>
        <div className="splide__track">
          <ul className="splide__list">
            <li className="splide__slide slide-1">
              <div className="container">
                <div className="splide-container  py-5">
                  <div className="row g-5">
                    <div className="col-12 order-3 order-lg-1">
                      <div className="d-flex  justify-content-between gap-3 flex-wrap">
                        <div
                          className="hero-block-1 p-2"
                          data-aos="fade-down"
                          data-aos-duration="1000"
                        >
                          <div className="hero-player d-flex  mb-3">
                            <div className="player-wrapper gap-2">
                              <div className="player-img">
                                <img src="/hero-player-4.webp" alt="Player 1" />
                              </div>
                              <div className="player-img">
                                <img src="/hero-player-5.webp" alt="Player 2" />
                              </div>
                              <div className="player-img">
                                <img src="/hero-player-6.webp" alt="Player 3" />
                              </div>
                            </div>
                          </div>
                          <p className="white-text text-capitalize mb-2 mb-lg-5">
                            We’re committed to building a cricketing community
                            rooted in sportsmanship, teamwork, and excellence.
                          </p>
                          <p className="white-text text-capitalize ">
                            {" "}
                            <span className="fw-semibold">
                              All-in-one cricket training{" "}
                            </span>{" "}
                            & competition center
                          </p>
                          <Link
                            to="/contact"
                            className="btn prime-btn py-2 px-4 rounded-5 fs-5 text-capitalize"
                          >
                            join with us{" "}
                            <FontAwesomeIcon
                              icon={faArrowRight}
                              className="ms-2"
                            />{" "}
                          </Link>
                        </div>
                        <div className="hero-block-2 p-2 gap-2 d-none d-lg-flex flex-wrap   flex-lg-column justify-content-center">
                          <Link
                            to="#"
                            aria-label="social-icon-1"
                            className="btn prime-btn py-2 px-4  text-capitalize rounded-5 fs-5"
                            data-aos="fade-down"
                            data-aos-duration="600"
                          >
                            instagram
                          </Link>
                          <Link
                            to="#"
                            aria-label="social-icon-2"
                            className="btn prime-btn py-2 px-4  text-capitalize rounded-5 fs-5"
                            data-aos="fade-down"
                            data-aos-duration="700"
                          >
                            twitter
                          </Link>
                          <Link
                            to="#"
                            aria-label="social-icon-3"
                            className="btn prime-btn py-2 px-4  text-capitalize rounded-5 fs-5"
                            data-aos="fade-down"
                            data-aos-duration="800"
                          >
                            FaceBook
                          </Link>
                          <Link
                            to="#"
                            aria-label="social-icon-4"
                            className="btn prime-btn py-2 px-4  text-capitalize rounded-5 fs-5"
                            data-aos="fade-down"
                            data-aos-duration="900"
                          >
                            Youtube
                          </Link>
                        </div>
                        <div className="hero-block-2 p-2 gap-2 d-lg-none flex-wrap d-flex  flex-sm-column ">
                          <Link
                            to="#"
                            aria-label="social-icon-1"
                            className="btn prime-btn icon-bg icon-xl  text-capitalize p-0 fs-3"
                            data-aos="fade-down"
                            data-aos-duration="600"
                          >
                            <FontAwesomeIcon icon={faInstagram} />{" "}
                          </Link>
                          <Link
                            to="#"
                            aria-label="social-icon-2"
                            className="btn prime-btn icon-bg icon-xl  text-capitalize p-0 fs-3"
                            data-aos="fade-down"
                            data-aos-duration="700"
                          >
                            <FontAwesomeIcon icon={faXTwitter} />
                          </Link>
                          <Link
                            to="#"
                            aria-label="social-icon-3"
                            className="btn prime-btn icon-bg icon-xl  text-capitalize p-0 fs-3"
                            data-aos="fade-down"
                            data-aos-duration="800"
                          >
                            <FontAwesomeIcon icon={faFacebook} />
                          </Link>
                          <Link
                            to="#"
                            aria-label="social-icon-4"
                            className="btn prime-btn icon-bg icon-xl  text-capitalize p-0 fs-3"
                            data-aos="fade-down"
                            data-aos-duration="900"
                          >
                            <FontAwesomeIcon icon={faYoutube} />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-8 mt-6 order-1 order-lg-2">
                      <h1
                        className="white-text text-capitalize text-center hero-heading text-lg-start  fw-semibold display-2"
                        data-aos="fade-right"
                        data-aos-duration="1000"
                      >
                        Born for Boundaries, Built for Brotherhood
                      </h1>
                    </div>
                    <div className="col-lg-4 mt-6 order-2 order-lg-3">
                      <div
                        className="hero-banner-card p-4 border light-border rounded-4 "
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                      >
                        <h2 className="fs-5 white-text text-capitalize fw-semibold">
                          Refer a teammate
                        </h2>
                        <p className="text-capitalize white-text fw-medium mb-3">
                          Share your referral link and grow the squad.
                        </p>
                        <div className="d-flex flex-wrap gap-3 align-items-center justify-content-center ">
                          <div className="hero-player-custom d-flex  mb-2">
                            <div className="player-wrapper gap-1">
                              <div className="player-img">
                                <img src="/hero-player-1.webp" alt="Player 1" />
                              </div>
                              <div className="player-img">
                                <img src="/hero-player-2.webp" alt="Player 2" />
                              </div>
                              <div className="player-img">
                                <img src="/hero-player-3.webp" alt="Player 3" />
                              </div>
                            </div>
                          </div>
                          <div className="btn-caontainer">
                            <Link
                              to="#"
                              className="btn prime-btn text-capitalize px-4 py-2 fw-semibold rounded-5"
                            >
                              <FontAwesomeIcon
                                icon={faShare}
                                className="me-1"
                              />{" "}
                              share link
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="splide__slide slide-2">
              <div className="container">
                <div className="splide-container  py-5">
                  <div className="row g-5">
                    <div className="col-12 order-3 order-lg-1">
                      <div className="d-flex  justify-content-between gap-3 flex-wrap">
                        <div
                          className="hero-block-1 p-2"
                          data-aos="fade-down"
                          data-aos-duration="1000"
                        >
                          <div className="hero-player d-flex  mb-3">
                            <div className="player-wrapper gap-2">
                              <div className="player-img">
                                <img src="/hero-player-4.webp" alt="Player 1" />
                              </div>
                              <div className="player-img">
                                <img src="/hero-player-5.webp" alt="Player 2" />
                              </div>
                              <div className="player-img">
                                <img src="/hero-player-6.webp" alt="Player 3" />
                              </div>
                            </div>
                          </div>
                          <p className="white-text text-capitalize mb-2 mb-lg-5">
                            We’re committed to building a cricketing community
                            rooted in sportsmanship, teamwork, and excellence.
                          </p>
                          <p className="white-text text-capitalize ">
                            {" "}
                            <span className="fw-semibold">
                              All-in-one cricket training{" "}
                            </span>{" "}
                            & competition center
                          </p>
                          <Link
                            to="/contact"
                            className="btn prime-btn py-2 px-4 rounded-5 fs-5 text-capitalize"
                          >
                            join with us{" "}
                            <FontAwesomeIcon
                              icon={faArrowRight}
                              className="ms-2"
                            />{" "}
                          </Link>
                        </div>
                        <div className="hero-block-2 p-2 gap-2 d-none d-lg-flex flex-wrap   flex-lg-column justify-content-center">
                          <Link
                            to="#"
                            aria-label="social-icon-1"
                            className="btn prime-btn py-2 px-4  text-capitalize rounded-5 fs-5"
                            data-aos="fade-down"
                            data-aos-duration="600"
                          >
                            instagram
                          </Link>
                          <Link
                            to="#"
                            aria-label="social-icon-2"
                            className="btn prime-btn py-2 px-4  text-capitalize rounded-5 fs-5"
                            data-aos="fade-down"
                            data-aos-duration="700"
                          >
                            twitter
                          </Link>
                          <Link
                            to="#"
                            aria-label="social-icon-3"
                            className="btn prime-btn py-2 px-4  text-capitalize rounded-5 fs-5"
                            data-aos="fade-down"
                            data-aos-duration="800"
                          >
                            FaceBook
                          </Link>
                          <Link
                            to="#"
                            aria-label="social-icon-4"
                            className="btn prime-btn py-2 px-4  text-capitalize rounded-5 fs-5"
                            data-aos="fade-down"
                            data-aos-duration="900"
                          >
                            Youtube
                          </Link>
                        </div>
                        <div className="hero-block-2 p-2 gap-2 d-lg-none flex-wrap d-flex  flex-sm-column ">
                          <Link
                            to="#"
                            aria-label="social-icon-1"
                            className="btn prime-btn icon-bg icon-xl  text-capitalize p-0 fs-3"
                            data-aos="fade-down"
                            data-aos-duration="600"
                          >
                            <FontAwesomeIcon icon={faInstagram} />{" "}
                          </Link>
                          <Link
                            to="#"
                            aria-label="social-icon-2"
                            className="btn prime-btn icon-bg icon-xl  text-capitalize p-0 fs-3"
                            data-aos="fade-down"
                            data-aos-duration="700"
                          >
                            <FontAwesomeIcon icon={faXTwitter} />
                          </Link>
                          <Link
                            to="#"
                            aria-label="social-icon-3"
                            className="btn prime-btn icon-bg icon-xl  text-capitalize p-0 fs-3"
                            data-aos="fade-down"
                            data-aos-duration="800"
                          >
                            <FontAwesomeIcon icon={faFacebook} />
                          </Link>
                          <Link
                            to="#"
                            aria-label="social-icon-4"
                            className="btn prime-btn icon-bg icon-xl  text-capitalize p-0 fs-3"
                            data-aos="fade-down"
                            data-aos-duration="900"
                          >
                            <FontAwesomeIcon icon={faYoutube} />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-8 mt-6 order-1 order-lg-2">
                      <h1
                        className="white-text text-capitalize text-center hero-heading text-lg-start  fw-semibold display-2"
                        data-aos="fade-right"
                        data-aos-duration="1000"
                      >
                        Born for Boundaries, Built for Brotherhood
                      </h1>
                    </div>
                    <div className="col-lg-4 mt-6 order-2 order-lg-3">
                      <div
                        className="hero-banner-card p-4 border light-border rounded-4 "
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                      >
                        <h2 className="fs-5 white-text text-capitalize fw-semibold">
                          Refer a teammate
                        </h2>
                        <p className="text-capitalize white-text fw-medium mb-3">
                          Share your referral link and grow the squad.
                        </p>
                        <div className="d-flex flex-wrap gap-3 align-items-center justify-content-center ">
                          <div className="hero-player-custom d-flex  mb-2">
                            <div className="player-wrapper gap-1">
                              <div className="player-img">
                                <img src="/hero-player-1.webp" alt="Player 1" />
                              </div>
                              <div className="player-img">
                                <img src="/hero-player-2.webp" alt="Player 2" />
                              </div>
                              <div className="player-img">
                                <img src="/hero-player-3.webp" alt="Player 3" />
                              </div>
                            </div>
                          </div>
                          <div className="btn-caontainer">
                            <Link
                              to="#"
                              className="btn prime-btn text-capitalize px-4 py-2 fw-semibold rounded-5"
                            >
                              <FontAwesomeIcon
                                icon={faShare}
                                className="me-1"
                              />{" "}
                              share link
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="splide__slide slide-3">
              <div className="container">
                <div className="splide-container  py-5">
                  <div className="row g-5">
                    <div className="col-12 order-3 order-lg-1">
                      <div className="d-flex  justify-content-between gap-3 flex-wrap">
                        <div
                          className="hero-block-1 p-2"
                          data-aos="fade-down"
                          data-aos-duration="1000"
                        >
                          <div className="hero-player d-flex  mb-3">
                            <div className="player-wrapper gap-2">
                              <div className="player-img">
                                <img src="/hero-player-4.webp" alt="Player 1" />
                              </div>
                              <div className="player-img">
                                <img src="/hero-player-5.webp" alt="Player 2" />
                              </div>
                              <div className="player-img">
                                <img src="/hero-player-6.webp" alt="Player 3" />
                              </div>
                            </div>
                          </div>
                          <p className="white-text text-capitalize mb-2 mb-lg-5">
                            We’re committed to building a cricketing community
                            rooted in sportsmanship, teamwork, and excellence.
                          </p>
                          <p className="white-text text-capitalize ">
                            {" "}
                            <span className="fw-semibold">
                              All-in-one cricket training{" "}
                            </span>{" "}
                            & competition center
                          </p>
                          <Link
                            to="/contact"
                            className="btn prime-btn py-2 px-4 rounded-5 fs-5 text-capitalize"
                          >
                            join with us{" "}
                            <FontAwesomeIcon
                              icon={faArrowRight}
                              className="ms-2"
                            />{" "}
                          </Link>
                        </div>
                        <div className="hero-block-2 p-2 gap-2 d-none d-lg-flex flex-wrap   flex-lg-column justify-content-center">
                          <Link
                            to="#"
                            aria-label="social-icon-1"
                            className="btn prime-btn py-2 px-4  text-capitalize rounded-5 fs-5"
                            data-aos="fade-down"
                            data-aos-duration="600"
                          >
                            instagram
                          </Link>
                          <Link
                            to="#"
                            aria-label="social-icon-2"
                            className="btn prime-btn py-2 px-4  text-capitalize rounded-5 fs-5"
                            data-aos="fade-down"
                            data-aos-duration="700"
                          >
                            twitter
                          </Link>
                          <Link
                            to="#"
                            aria-label="social-icon-3"
                            className="btn prime-btn py-2 px-4  text-capitalize rounded-5 fs-5"
                            data-aos="fade-down"
                            data-aos-duration="800"
                          >
                            FaceBook
                          </Link>
                          <Link
                            to="#"
                            aria-label="social-icon-4"
                            className="btn prime-btn py-2 px-4  text-capitalize rounded-5 fs-5"
                            data-aos="fade-down"
                            data-aos-duration="900"
                          >
                            Youtube
                          </Link>
                        </div>
                        <div className="hero-block-2 p-2 gap-2 d-lg-none flex-wrap d-flex  flex-sm-column ">
                          <Link
                            to="#"
                            aria-label="social-icon-1"
                            className="btn prime-btn icon-bg icon-xl  text-capitalize p-0 fs-3"
                            data-aos="fade-down"
                            data-aos-duration="600"
                          >
                            <FontAwesomeIcon icon={faInstagram} />{" "}
                          </Link>
                          <Link
                            to="#"
                            aria-label="social-icon-2"
                            className="btn prime-btn icon-bg icon-xl  text-capitalize p-0 fs-3"
                            data-aos="fade-down"
                            data-aos-duration="700"
                          >
                            <FontAwesomeIcon icon={faXTwitter} />
                          </Link>
                          <Link
                            to="#"
                            aria-label="social-icon-3"
                            className="btn prime-btn icon-bg icon-xl  text-capitalize p-0 fs-3"
                            data-aos="fade-down"
                            data-aos-duration="800"
                          >
                            <FontAwesomeIcon icon={faFacebook} />
                          </Link>
                          <Link
                            to="#"
                            aria-label="social-icon-4"
                            className="btn prime-btn icon-bg icon-xl  text-capitalize p-0 fs-3"
                            data-aos="fade-down"
                            data-aos-duration="900"
                          >
                            <FontAwesomeIcon icon={faYoutube} />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-8 mt-6 order-1 order-lg-2">
                      <h1
                        className="white-text text-capitalize text-center hero-heading text-lg-start  fw-semibold display-2"
                        data-aos="fade-right"
                        data-aos-duration="1000"
                      >
                        Born for Boundaries, Built for Brotherhood
                      </h1>
                    </div>
                    <div className="col-lg-4 mt-6 order-2 order-lg-3">
                      <div
                        className="hero-banner-card p-4 border light-border rounded-4 "
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                      >
                        <h2 className="fs-5 white-text text-capitalize fw-semibold">
                          Refer a teammate
                        </h2>
                        <p className="text-capitalize white-text fw-medium mb-3">
                          Share your referral link and grow the squad.
                        </p>
                        <div className="d-flex flex-wrap gap-3 align-items-center justify-content-center ">
                          <div className="hero-player-custom d-flex  mb-2">
                            <div className="player-wrapper gap-1">
                              <div className="player-img">
                                <img src="/hero-player-1.webp" alt="Player 1" />
                              </div>
                              <div className="player-img">
                                <img src="/hero-player-2.webp" alt="Player 2" />
                              </div>
                              <div className="player-img">
                                <img src="/hero-player-3.webp" alt="Player 3" />
                              </div>
                            </div>
                          </div>
                          <div className="btn-caontainer">
                            <Link
                              to="#"
                              className="btn prime-btn text-capitalize px-4 py-2 fw-semibold rounded-5"
                            >
                              <FontAwesomeIcon
                                icon={faShare}
                                className="me-1"
                              />{" "}
                              share link
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
export default HeroBanner;
