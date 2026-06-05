import { useParams } from "react-router-dom"; 
import { BlogData } from "../../data/BlogData";
import { useForm } from "react-hook-form";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function BlogListSection() {
      // aos Animation
    useEffect(() => {
  AOS.init({
   duration: 1200, // animation duration
    once: false,    // run only once
  });
}, []);

   const { id } = useParams();
    const Blog = BlogData.find((e) => e.id === Number(id) );
    
  if (!Blog) return <h2 className="text-center fs-2 my-3">Blogs Not Found</h2>;



    
         // form Validation 
            const { register,handleSubmit,reset,formState: { errors },} = useForm();

            const onSubmit = async (data) => {
            const formData = new FormData();

            formData.append("blogfmain", true);
            formData.append("fname", data.firstname);
            formData.append("website", data.website);
            formData.append("email", data.email);
            formData.append("comment", data.comment);

            try {
                const response = await fetch("http://localhost:8080/send_email.php", {
                method: "POST",
                body: formData,
                });

                const result = await response.text();
                console.log(result);

                reset(); 
                } catch (error) {
                    console.error("Error:", error);
                }
           };

    return (
        <>
                <section className="py-6">
        <div className="container d-flex justify-content-center">
            <div className="col-10">
                <h2 className="head-text text-capitalize fw-semibold mb-3 display-3" data-aos="fade-up" data-aos-duration="1500">How to Improve Bowling Speed and
                    Accuracy</h2>
                <div className="blogdetail-image-container rounded-3 mb-3" data-aos="zoom-in" data-aos-duration="1500">
                    <img src={Blog.image} alt="" className="rounded-3 w-100 object-fit-cover"
                        height="500"/>
                </div>
                <blockquote className="mb-2 para-text text-capitalize fw-medium" data-aos="fade-up" data-aos-duration="1500">
                    {Blog.BlogDescription1}
                </blockquote>
                <blockquote className="mb-2 para-text text-capitalize fw-medium" data-aos="fade-up" data-aos-duration="1500">
                    {Blog.BlogDescription2}
                </blockquote>
                <blockquote className="mb-2 para-text text-capitalize fw-medium" data-aos="fade-up" data-aos-duration="1500">
                    {Blog.BlogDescription3}
                </blockquote>
                <blockquote className="mb-2 para-text text-capitalize fw-medium" data-aos="fade-up" data-aos-duration="1500">
                    {Blog.BlogDescription4}
                </blockquote>
                <blockquote className="mb-2 para-text text-capitalize fw-medium" data-aos="fade-up" data-aos-duration="1500">
                    {Blog.BlogDescription5}
                </blockquote>
                <blockquote className="mb-3 para-text text-capitalize fw-medium" data-aos="fade-up" data-aos-duration="1500">
                    {Blog.BlogDescription6}
                    
                </blockquote>
                <h3 className="head-text text-capitalize fw-semibold fs-1" data-aos="zoom-in" data-aos-duration="1500">Leave a Reply</h3>
                <p className="para-text text-capitalize my-3" data-aos="zoom-in" data-aos-duration="1500">Your email address will not be published. Required fields are
                    marked *</p>
                <form action="send-email.php" method="POST" id="blogform" data-aos="zoom-in" data-aos-duration="1500" onSubmit={handleSubmit(onSubmit)} noValidate>
                    <div className="row gx-2 gy-3">
                        <div className="col-md-6">
                            <input type="text" aria-label="name"
                                className="form-control input-bg input-text shadow-none py-3 rounded-3 border light-border" name="fname"
                                id="fname" placeholder="Name" {...register("firstname", { required: "Enter Your Full Name" })}/>
                                <div className="error">{errors.firstname?.message}</div>
                        </div>
                        <div className="col-md-6">
                            <input type="email" aria-label="Email" 
                                className="form-control input-bg input-text shadow-none py-3 rounded-3 border light-border" name="email"
                                id="email" placeholder=" Email" {...register('email',{ required:"Enter Your Email Address",pattern: { value: /^\S+@\S+$/i,message: "Please Enter A Vaild Email Address"}})}/>
                                <div className="error">{errors.email?.message}</div>
                        </div>
                        <div className="col-12">
                            <input type="text" aria-label="website"
                                className="form-control input-bg input-text shadow-none py-3 rounded-3 border light-border" name="website"
                                id="website" placeholder="website" {...register("website", { required: "Enter Your Website" })}/>
                                <div className="error">{errors.website?.message}</div>
                        </div>
                        <div className="col-12">
                            <textarea name="comment" aria-label="comment" id="comment"
                                className="form-control input-bg input-text shadow-none border light-border" rows="5" placeholder=" comment" {...register("comment", { required: "Enter Your Comment" })}></textarea>
                                <div className="error">{errors.comment?.message}</div>
                        </div>
                        <div className="col-12">
                            <button type="submit" name="blogfmain"
                                className="btn prime-btn py-2 px-3 rounded-pill text-capitalize">
                               post comment
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
        </>
    );
}

export default BlogListSection;