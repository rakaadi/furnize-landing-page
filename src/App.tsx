import React from "react";

import { GlobalStyles } from "./App.styles";

import HeaderSection from "./components/header-section/HeaderSection.component";
import AboutSection from "./components/about-section/AboutSection.component";
import PerksSection from "./components/perks-section/PerksSection.component";
import FeaturedProducts from "./components/product-card/ProductCard.components";
import BlogsPreview from "./components/blogs-preview/BlogsPreview.component";
import SocialMedia from "./components/social-media/SocialMedia.component";
import Footer from "./components/footer/Footer.component";

import PopularItemsProvider from "./context/PopularItems.context";
import BlogsPreviewProvider from "./context/BlogsPreview.context";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <HeaderSection />
      <AboutSection />
      <PerksSection />
      <PopularItemsProvider>
        <FeaturedProducts />
      </PopularItemsProvider>
      <BlogsPreviewProvider>
        <BlogsPreview />
      </BlogsPreviewProvider>
      <SocialMedia />
      <Footer />
    </>
  );
}

export default App;
