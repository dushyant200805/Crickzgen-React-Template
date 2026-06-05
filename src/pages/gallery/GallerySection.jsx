import { Link } from "react-router";
import "lightbox2/dist/css/lightbox.min.css";
import lightbox from "lightbox2";
import { useEffect } from "react";
function GallerySection() {
    useEffect(() => {
        lightbox.option({
            'resizeDuration': 200,
            'wrapAround': true
        });
    }, []);
    return (
        <>
            <section className="py-6">
                <div className="container">
                    <div className="head-content mb-5 mx-auto" data-aos="fade-down" data-aos-duration="1500">
                        <span
                            className="py-2 px-4 text-capitalize head-text rounded-pill border light-border d-inline-block mb-3">Gallery</span>
                        <h2 className="head-text text-capitalize fw-semibold  display-5">Snapshots of Our Cricket Spirit
                        </h2>
                    </div>
                    <div className="grid-wrapper">
                        <a href="/gallery-image-1.webp" data-lightbox="gallery" data-title="Image 1 Caption">
                            <img src="/gallery-image-1.webp"
                                alt="gallery-img-1" />
                        </a>
                        <a href="/gallery-image-2.webp" data-lightbox="gallery" data-title="Image 2 Caption">
                            <img src="/gallery-image-2.webp"
                                alt="gallery-img-2" />
                        </a>
                        <a href="/gallery-image-3.webp" data-lightbox="gallery" data-title="Image 3 Caption" className="tall">
                            <img src="/gallery-image-3.webp"
                                alt="gallery-img-3" />
                        </a>
                        <a href="/gallery-image-4.webp" data-lightbox="gallery" data-title="Image 4 Caption" className="wide">
                            <img src="/gallery-image-4.webp"
                                alt="gallery-img-4" />
                        </a>
                        <a href="/gallery-image-5.webp" data-lightbox="gallery" data-title="Image 5 Caption">
                            <img src="/gallery-image-5.webp"
                                alt="gallery-img-5" />
                        </a>
                        <a href="/gallery-image-6.webp" data-lightbox="gallery" data-title="Image 6 Caption">
                            <img src="/gallery-image-6.webp"
                                alt="gallery-img-6" />
                        </a>
                        <a href="/gallery-image-7.webp" data-lightbox="gallery" data-title="Image 7 Caption" className="wide">
                            <img src="/gallery-image-7.webp"
                                alt="gallery-img-7" />
                        </a>
                        <a href="/gallery-image-8.webp" data-lightbox="gallery" data-title="Image 8 Caption" className="tall">
                            <img src="/gallery-image-8.webp"
                                alt="gallery-img-8" />
                        </a>

                    </div>
                </div>
            </section>

        </>
    );
}

export default GallerySection;