import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function TestimonialCard() {
  // AOS Animation
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
    });
  }, []);

  const Jewelley = [
    {
      image: "/testimonial-slider-1.webp",
      Name: "Oliver Thompson",
      Designation: "team player",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi  suscipit numquam asperiores animi ratione error aperiam omnis  repudiandae incidunt quas nobis assumenda amet corrupti maiores minima,  sint est. Id, illum. Ipsum possimus nesciunt nulla quo.",
    },
    {
      image: "/testimonial-slider-2.webp",
      Name: "George Whitaker",
      Designation: "club enthusiast",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi  suscipit numquam asperiores animi ratione error aperiam omnis  repudiandae incidunt quas nobis assumenda amet corrupti maiores minima,  sint est. Id, illum. Ipsum possimus nesciunt nulla quo.",
    },
    {
      image: "/testimonial-slider-3.webp",
      Name: "Charlotte Bennett",
      Designation: "junior member",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi  suscipit numquam asperiores animi ratione error aperiam omnis  repudiandae incidunt quas nobis assumenda amet corrupti maiores minima,  sint est. Id, illum. Ipsum possimus nesciunt nulla quo.",
    },
  ];

  return (
    <>
      {Jewelley.map((item, index) => (
        <li
          className="splide__slide bg-transparent rounded-4 shadow-none"
          key={index}
        >
          <div className="test-body p-3">
            <blockquote className="fs-5 para-text mb-3">
              {item.description}
            </blockquote>
            <div className="d-flex align-items-center  gap-3">
              <div className="testimonial-img">
                <img src={item.image} alt="" />
              </div>
              <div>
                <h3 className="para-text text-capitalize text-uppercase fw-bold fs-6 m-0">
                  {item.Name}
                </h3>
                <p className="para-text m-0 text-capitalize">
                  {item.Designation}
                </p>
              </div>
            </div>
          </div>
        </li>
      ))}
    </>
  );
}

export default TestimonialCard;
