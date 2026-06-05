import CommonBanner from "../../components/Common-Sections/CommonBanner";
import BlogSection from "../../components/Common-Sections/BlogSection";
function BlogPage() {
    const BannerData ={
        "BannerTitle" :"Blogs",
    }
    return (
        <>
             <title>Blogs – Crickzgen Cricket Academy | Building Future Cricket Champions</title>
             <CommonBanner BannerData={BannerData}/>
             <BlogSection noBg/>
        </>
    );
}

export default BlogPage;