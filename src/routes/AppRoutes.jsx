import {BrowserRouter, Routes,Route, useLocation,} from "react-router-dom";

import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";

import Home from "../pages/home/Home";
import AboutPage from "../pages/about/AboutPage";
import MatchesPage from "../pages/matche/matchesPage";
import ContactPage from "../pages/contact/contactPage";
import BlogPage from "../pages/blog/BlogPage";
import BlogDetailsPage from "../pages/blogdetail/BlogDetailsPage";
import GalleryPage from "../pages/gallery/galleryPage";
import NotFound from "../pages/notfound/NotFound";

import ScrollFunction from "../components/Common-Sections/ScrollFunction";

function Layout() {
  const location = useLocation();

  const validPaths = [
    "/",
    "/about-us",
    "/matches",
    "/gallery",
    "/blogs",
    "/contact",
  ];

  const isBlogDetails = location.pathname.startsWith("/blogdetails/");

  const showLayout =
    validPaths.includes(location.pathname) || isBlogDetails;

  return (
    <>
      {showLayout && <Header />}

      <ScrollFunction />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/matches" element={<MatchesPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/blogdetails/:id" element={<BlogDetailsPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      {showLayout && <Footer />}
    </>
  );
}

function AppRoutes() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default AppRoutes;