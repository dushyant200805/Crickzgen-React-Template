import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
// ================= UI Framework =================
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// ================= Project CSS =================
import "../../includes/css/mainstyle.css";
import "../../includes/css/style.css";
import { faBarsStaggered, faMoon, faSun, faXmark } from "@fortawesome/free-solid-svg-icons";


function Header() {
    // offcanvas
    const handleClose = () => {
        document.querySelector(".close")?.click();
    };
    // header menu active
    const { pathname } = useLocation();

    // theme change
    // Get saved theme from localStorage
    const getSavedTheme = () => {
    return localStorage.getItem("theme") || "light";
    };  
     const [theme, setTheme] = useState(getSavedTheme);

     // Apply theme + save it
        useEffect(() => {
            document.documentElement.setAttribute(
            "data-crickzgen-theme",
            theme
            );

            localStorage.setItem("theme", theme);
        }, [theme]);

        // Toggle theme
        const toggleTheme = () => {
            setTheme((prev) => (prev === "light" ? "dark" : "light"));
        };

    // header fixed
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

    }, []);

    return (
        <>
            {/* <!-- header --> */}
            <header className={`head-bg position-sticky top-0 z-9 ${isFixed ? "fix w-100" : ""}`}>
                <nav className="navbar navbar-expand-lg">
                    <div className="container">

                        {/* <!-- Logo --> */}

                        <Link to="/" className="navbar-brand py-2" >
                            <img src="/logo-light.png" className="object-fit-contain" height="80"
                                alt="logo-light" />

                        </Link>

                        {/*   <!-- Offcanvas Menu --> */}
                        <div className="offcanvas offcanvas-end head-bg" tabIndex="-1" id="offcanvasNavbar2">
                            <div className="offcanvas-header head-bg justify-content-between">

                                <img src="/logo-light.png" className="object-fit-contain" height="70"
                                    alt="logo-light" />


                                <button type="button" className="btn prime-btn lh-1 close" data-bs-dismiss="offcanvas"
                                    aria-label="Close">
                                    <FontAwesomeIcon icon={faXmark} className="fa-solid fa-moon white-text fs-5" />
                                </button>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="navbar-nav justify-content-center flex-grow-1 pe-3 gap-lg-3" id="nav_ul">
                                    <li className={`nav-item ${pathname === "/" ? "active" : ""}`} onClick={handleClose} >
                                        <Link to="/" className="nav-link  text-uppercase fw-semibold" aria-current="page">Home</Link>
                                    </li>
                                    <li className={`nav-item ${pathname === "/about-us" ? "active" : ""}`} onClick={handleClose}>
                                        <Link to="/about-us" className="nav-link  text-uppercase fw-semibold">About Us</Link>
                                    </li>
                                    <li className={`nav-item ${pathname === "/matches" ? "active" : ""}`} onClick={handleClose}>
                                        <Link to="/matches" className="nav-link  text-uppercase fw-semibold">Matches</Link>
                                    </li>
                                    <li className={`nav-item dropdown ${["/blogs", "/gallery"].includes(pathname) ? "active" : ""}`}>
                                        <button className="nav-link dropdown-link text-uppercase fw-semibold" id="pagesDropdown"
                                            aria-expanded="false">
                                            pages
                                        </button>

                                        <ul className="dropdown-menu border-0">
                                            <li>
                                                <Link to="/blogs" className={`dropdown-item ${pathname === "/blogs" ? "active" : ""}`} >blogs</Link>
                                            </li>
                                            <li>
                                                <Link to="/gallery" className={`dropdown-item ${pathname === "/gallery" ? "active" : ""}`}>gallery</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className={`nav-item ${pathname === "/contact" ? "active" : ""}`} onClick={handleClose}>
                                        <Link to="/contact" className="nav-link  text-uppercase fw-semibold">Contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* <!-- Right Buttons --> */}
                        <div className="d-flex gap-2">
                            {/* <!-- Mobile Menu Button --> */}
                            <button className="navbar-toggler  prime-border shadow-none py-2 px-3" type="button"
                                data-bs-target="#offcanvasNavbar2" data-bs-toggle="offcanvas" aria-controls="offcanvasNavbar2"
                                aria-label="Toggle navigation">
                                <FontAwesomeIcon icon={faBarsStaggered} className="fs-5 prime-text" />
                            </button>
                            {/* <!-- Theme Switch Button --> */}
                            <button className="btn prime-btn rounded theme-btn " aria-label="theme-switch button" id="btnSwitch" onClick={toggleTheme}>
                                {theme === "light" ? (
                                    <FontAwesomeIcon icon={faSun} className="fa-solid   fa-moon white-text" />
                                ) : (
                                    <FontAwesomeIcon icon={faMoon} className="fa-solid   fa-moon white-text" />
                                )}
                            </button>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}
export default Header;
