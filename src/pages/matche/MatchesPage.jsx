import CommonBanner from "../../components/Common-Sections/CommonBanner";
import MatchSection from "../../components/Common-Sections/MatcheSection";
import TeamSection from "../../components/Common-Sections/TeamSection";
function MatchesPage() {
    const BannerData = {
        "BannerTitle": "Matches",
    }
    return (
        <>
            <title>Matches – Crickzgen Cricket Academy | Building Future Cricket Champions</title>
            <CommonBanner BannerData={BannerData} />
            <MatchSection noBg />
            <TeamSection />
        </>
    );
}

export default MatchesPage;