import CommonBanner from "../../components/Common-Sections/CommonBanner";          
import AboutSection from "../../components/Common-Sections/AboutSection";
import StepSection from "../../components/Common-Sections/StepSection";
import WhyChooseSection from "../../components/Common-Sections/WhyChooseSection";
import TestimonialSection from "../../components/Common-Sections/TestimonialSection";
import ParmotionSection from "../../components/Common-Sections/ParmotionSection";

function AboutPage() {
      const BannerData ={
    "BannerTitle" :"About Us",
  }
  return (
    <>
        <title>About Us – Crickzgen Cricket Academy | Building Future Cricket Champions</title>

        <CommonBanner  BannerData={BannerData}/>
        <AboutSection noBg/> 
        <ParmotionSection/>
        <WhyChooseSection noBg/>
        <TestimonialSection/>
        <StepSection noBg/>
       
    </>
  );
}

export default AboutPage;