function ServiceCard() {
  const ServiceData = [
    {
      id: 1,
      image: "/service-icon-1.webp",
      title: "Corporate car rental",
      description:
        "Open multipy a green form lesser their from in made herb multiply",
    },
    {
      id: 2,
      image: "/service-icon-2.webp",
      title: "Car rental with driver",
      description:
        "Open multipy a green form lesser their from in made herb multiply",
    },
    {
      id: 3,
      image: "/service-icon-3.webp",
      title: "Airport transfer",
      description:
        "Open multipy a green form lesser their from in made herb multiply",
    },
    {
      id: 4,
      image: "/service-icon-4.webp",
      title: "Fleet leasing",
      description:
        "Open multipy a green form lesser their from in made herb multiply",
    },
  ];
  return (
    <>
      {ServiceData.map((service) => (
        <div className="col-md-6 col-lg-3" key={service.id}>
          <div
            className="card gap-3 position-relative service-card p-3 h-100 card-bg"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="car-img mb-4">
              <img
                src={service.image}
                alt="service-icon-1"
                height="70"
                width="70"
                className="ms-2"
              />
            </div>
            <div className="car-body">
              <h3 className="prime-text text-capitalize fs-4">
                {service.title}
              </h3>
              <p className="white-text  fw-medium">{service.description}</p>
            </div>
            <div className="card-count d-flex align-items-center justify-content-center rounded-start rounded-end-0 position-absolute card-alt-bg">
              <h3 className="para-text fs-5">01</h3>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
export default ServiceCard;
