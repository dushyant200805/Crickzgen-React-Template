import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function TeamCard() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // animation duration
      once: false, // run only once
    });
  }, []);
  const TeamData = [
    {
      id: 1,
      img: "/public/team-player-1.webp",
      name: "Oliver Smith",
    },
    {
      id: 2,
      img: "/public/team-player-2.webp",
      name: "Emily Johnson",
    },
    {
      id: 3,
      img: "/public/team-player-3.webp",
      name: "Sophie Taylor",
    },
    {
      id: 4,
      img: "/public/team-player-4.webp",
      name: "Charlotte Brown",
    },
  ];
  return (
    <>
      {TeamData.map((item, index) => (
          <div
            className="col-xl-3 col-md-6"
            data-aos="zoom-in"
            data-aos-duration="1500"
            key={index}
          >
            <div className="player-card">
              <div className="image-container">
                <img
                  src={item.img}
                  alt=""
                  className="w-100 object-fit-cover rounded-3"
                  height="400"
                />
              </div>
              <div className="content text-center p-3 card-bg rounded-3 border light-border">
                <h3 className="white-text text-capitalize fw-semibold">
                  {item.name}
                </h3>
              </div>
            </div>
          </div>
      ))}
    </>
  );
}
export default TeamCard;
