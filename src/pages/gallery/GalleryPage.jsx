import CommonBanner from "../../components/Common-Sections/CommonBanner";
import GallerySection from "./GallerySection";
function GalleryPage() {
    const BannerData = {
        "BannerTitle": "Gallery",
    }
    return (
        <>
            <title>Gallery – Crickzgen Cricket Academy | Building Future Cricket Champions</title>
            <CommonBanner BannerData={BannerData} />
            <GallerySection noBg />
        </>
    );
}

export default GalleryPage;