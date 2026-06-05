import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrophy, faUser } from "@fortawesome/free-solid-svg-icons";
function StepSection({ noBg }) {
  useEffect(() => {
    AOS.init({
      duration: 1200, // animation duration
      once: false, // run only once
    });
  }, []);

  useEffect(() => {
    const counters = document.querySelectorAll(".counter");
    let hasRun = false;
    let observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasRun) {
            hasRun = true; // Run only once
            counters.forEach((counter) => {
              let target = +counter.getAttribute("data-target");
              let speed = target / 180; // Adjust speed
              let count = 0;

              let updateCounter = () => {
                count += speed;
                if (count < target) {
                  counter.innerText = Math.floor(count) + "+";
                  requestAnimationFrame(updateCounter);
                } else {
                  counter.innerText = target + "+"; // Ensure final value matches
                }
              };

              updateCounter();
            });
          }
        });
      },
      { threshold: 1.0 },
    ); // Trigger when 30% of section is visible
    
  }, []);

  return (
    <section className={`py-6 counterSection ${noBg ? "" : "alt-bg"}`}>
      <div className="container">
        <div className="row g-3 justify-content-between">
          <div
            className="col-xl-5"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <div className="step-image-container position-relative">
              <div className="image-1">
                <img
                  src="/public/step-image-1.webp"
                  alt=""
                  className="w-100 object-fit-cover rounded-3"
                  height="500"
                />
              </div>
              <div className="member-card card-bg text-center rounded-4 p-3">
                <h2
                  className="white-text  fw-semibold counter"
                  data-target="300"
                >
                  300
                </h2>
                <span className="white-text text-capitalize">
                  Members Joined
                </span>
              </div>
              <div className="image-2">
                <img
                  src="/public/step-image-2.webp"
                  alt=""
                  className="rounded-3"
                />
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <span
              className="py-2 px-4 text-capitalize head-text rounded-pill border light-border d-inline-block mb-3"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              our steps
            </span>
            <h2
              className="head-text text-capitalize fw-semibold mb-5 display-5"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              Ready to Play? Here’s How to Join the Squad
            </h2>
            <div
              className="d-flex gap-3 mb-2"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <div>
                <span className="icon-bg">
                  <FontAwesomeIcon icon={faPencil} />{" "}
                </span>
              </div>
              <div>
                <h3 className="head-text text-capitalize fw-semibold">
                  Fill Out the Registration Form
                </h3>
                <p className="para-text text-capitalize">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
            </div>
            <div
              className="d-flex gap-3 mb-2"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <div>
                <span className="icon-bg">
                  {" "}
                  <FontAwesomeIcon icon={faTrophy} />{" "}
                </span>
              </div>
              <div>
                <h3 className="head-text text-capitalize fw-semibold">
                  Attend a Trial Session
                </h3>
                <p className="para-text text-capitalize">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
            </div>
            <div
              className="d-flex gap-3 mb-2"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <div>
                <span className="icon-bg">
                  <FontAwesomeIcon icon={faUser} />{" "}
                </span>
              </div>
              <div>
                <h3 className="head-text text-capitalize fw-semibold">
                  Become an Official Member
                </h3>
                <p className="para-text text-capitalize">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default StepSection;
