import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
function BlogCard({Blog}){
    useEffect(() => {
      AOS.init({
       duration: 1200, // animation duration
        once: false,    // run only once
      });
    }, [])
    return(
        <>
              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1000" >
                    <div className="blog-card-container rounded-3">
                        <div className="image-container rounded-top-3">
                            <Link to={`/blogdetails/${Blog.id}`}>
                                <img src={Blog.image} alt="blog-image-1"
                                    className="w-100 object-fit-cover rounded-top-3" height="250"/>
                            </Link>
                        </div>
                        <div className="content card-bg rounded-bottom-3 p-2">
                            <span className="white-text text-uppercase fw-semibold d-block mb-3">
                                <FontAwesomeIcon icon={faCalendar} className="me-2" /> {Blog.date}
                            </span>
                            <Link to={`/blogdetails/${Blog.id}`} className="white-text text-capitalize fw-semibold d-block mb-3 fs-4">
                                {Blog.title}
                            </Link>
                            <p className="white-text text-capitalize">
                                {Blog.CardDescription}
                            </p>
                        </div>
                    </div>
                </div>
        </>
    )
}
export default BlogCard;