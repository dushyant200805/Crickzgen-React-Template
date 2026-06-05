import HeroBanner from "./HeroBanner";
import AboutSection from "../../components/Common-Sections/AboutSection";
import WhyChooseSection from "../../components/Common-Sections/WhyChooseSection";
import StepSection from "../../components/Common-Sections/StepSection";
import MatchSection from "../../components/Common-Sections/matchesection";
import TeamSection from "../../components/Common-Sections/TeamSection";
import TestimonialSection from "../../components/Common-Sections/TestimonialSection";
import BlogSection from "../../components/Common-Sections/BlogSection";
import ParmotionSection from "../../components/Common-Sections/ParmotionSection";
import "../../includes/css/mainstyle.css";
import "../../includes/css/style.css";
function Home() {
  return (
    <>

      <title>Crickzgen Cricket Academy – Professional Cricket Coaching & Training</title>

      <HeroBanner />
      <AboutSection noBg />
      <WhyChooseSection />
      <MatchSection limit={4} noBg />
      <ParmotionSection />
      <StepSection noBg />
      <TeamSection />
      <TestimonialSection noBg />
      <BlogSection limit={3} />
    </>
  );
}

export default Home;