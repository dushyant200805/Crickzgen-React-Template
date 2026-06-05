import { MatcheData } from "../../data/MatcheData";
import MatcheCard from "../Ui/MatcheCard";
function MatcheSection({ limit, noBg }) {
      const displayedMatches = limit
    ? MatcheData.slice(0, limit)
    : MatcheData;
  return (
     <>
     <section className={`py-6 ${noBg ? "" : "alt-bg"}`}>
             <div className="container">
            <div className="head-content mb-5 mx-auto" data-aos="fade-down" data-aos-duration="1500">
                <span
                    className="py-2 px-4 text-capitalize head-text rounded-pill border light-border d-inline-block mb-3">matches</span>
                <h2 className="head-text text-capitalize fw-semibold mb-5 display-5">Upcoming Clashes You Don’t Want to Miss
                </h2>
            </div>
            <div className="row g-3">
                 {displayedMatches.map(matche => (
                 <MatcheCard key={matche.id} matche={matche} />
               ))}
            </div>
        </div>
     </section>
     </>
  );
}

export default MatcheSection;