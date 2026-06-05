
import CommonBanner from "../../components/Common-Sections/CommonBanner";
import PricingCoupoon from "./PricingCoupoon";
import PricingSection from "../../components/Common-Sections/PricingSection";
import DriverSection from "../../components/Common-Sections/DeriverSection";
import TestimonialSection from "../../components/Common-Sections/TestimonialSection";
function CollectionPage() {
      const BannerData ={
   "BannerHeading" :"pricing plans",
    "BannerSubHeading":"fair & flexible pricing",
    "Bannerparagraph" :"Explore affordable and transparent car rental pricing with no hidden charges, designed to suit your travel and budget needs.",
  }
    return(
        <>
          <title>Pricing – Crickzgen Cricket Academy | Building Future Cricket Champions</title>
         <CommonBanner  BannerData={BannerData}/>
         <PricingCoupoon/> 
         <PricingSection/>
         <DriverSection noBg/>
         <TestimonialSection/>
        </>
    );
}
export default CollectionPage;