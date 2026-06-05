import CommonBanner from "../../components/Common-Sections/CommonBanner";
import BlogDetailsSection from "./BlogListSection";
function BlogDetailsPage() {
    const BannerData ={
    "BannerTitle" :"Blog Details",
  }
    return (
        <>
            <title>Blog Details – Crickzgen Cricket Academy | Building Future Cricket Champions</title>
            <CommonBanner  BannerData={BannerData}/>
            <BlogDetailsSection/>
        </>
    );
}

export default BlogDetailsPage;