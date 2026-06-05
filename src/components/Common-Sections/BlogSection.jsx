import BlogCard from "../Ui/BlogCard";
import { BlogData } from "../../data/BlogData";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function BlogSection ({limit,noBg}) {
   const displayedBlog = limit
            ? BlogData.slice(0, limit)
            : BlogData;
  // console.log(displayedBlog);
  // aos Animation
  useEffect(() => {
    AOS.init({
      duration: 1200, // animation duration
      once: false, // run only once
    });
  }, []);
  return (
    <>
      <section className={`py-6 ${noBg ? "" : "alt-bg"}`}>
        <div className="container">
          <div
            className="head-content mb-5 text-start"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <span className="py-2 px-4 text-capitalize head-text rounded-pill border light-border d-inline-block mb-3">
              Blogs & Articles
            </span>
            <h2 className="head-text text-capitalize fw-semibold  display-5">
              Game On! Tips, Stories, and Club Updates
            </h2>
          </div>
          <div className="row g-3">
             {displayedBlog .map(Blog => (
                    <BlogCard key={Blog.id} Blog={Blog}/>
                   ))}
          </div>
        </div>
      </section>
    </>
  );
}
export default BlogSection;
