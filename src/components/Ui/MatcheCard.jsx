function MatcheCard({matche}) {
    return (
        <div className="col-lg-6" data-aos="fade-up" data-aos-duration="1000" key={matche.id}>
            <div className="p-3 border light-border rounded-5 text-center">
                <span className="prime-text text-capitalize fw-medium fs-5 d-inline-block mb-3">{matche.title}</span>
                <h3 className="head-text text-capitalize fw-medium">{matche.Heading}</h3>
                <p className="para-text text-capitalize mb-3">{matche.date} – {matche.time}</p>
                <div
                    className="border light-border rounded-5 d-flex gap-3 py-3 align-items-center justify-content-center flex-wrap">
                    <div className="team-logo">
                        <img src={matche.image1} alt="" className="w-100 object-fit-contain"
                            height="80" />
                    </div>
                    <h3 className="head-text text-capitalize mb-0 fw-semibold">vs</h3>
                    <div className="team-logo">
                        <img src={matche.image2} alt="" className="w-100 object-fit-contain"
                            height="80" />
                    </div>
                </div>
            </div>
        </div>
    )
}   
export default MatcheCard;