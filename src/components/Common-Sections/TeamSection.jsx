import TeamCard from "../Ui/TeamCard";
function TeamSection({noBg}){
    return(
        <>
            <section className={`py-6 ${noBg ? "" : "alt-bg"}`}>
               <div className="container">
            <div className="head-content mx-auto mb-5" data-aos="fade-down" data-aos-duration="1500">
                <span
                    className="py-2 px-4 text-capitalize head-text rounded-pill border light-border d-inline-block mb-3">meet
                    our member</span>
                <h2 className="head-text text-capitalize fw-semibold mb-3 display-5">Driven by Passion, United by Cricket
                </h2>
                <p className="para-text text-capitalize">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                    tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
            <div className="row g-3">
                 <TeamCard/>
            </div>
        </div>
            </section>
        </>
    );
}
export default TeamSection;