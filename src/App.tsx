import React from "react";

import { GlobalStyles, HeaderContainer } from "./App.styles";

import Navigationbar from "./components/navbar/Navbar.component";
import Slogan from "./components/slogan/Slogan.component";
import PopularFurniture from "./components/popular-furniture/PopularFurniture.component";
import SocialMedia from "./components/social-media/SocialMedia.component";
import ConfiguratorIntro from "./components/configurator/ConfiguratorIntro.component";
import ProjectsPreview from "./components/projects-preview/ProjectsPreview.component";
import Newsletter from "./components/newsletter/Newsletter.component";
import Footer from "./components/footer/Footer.component";

import PopularItemsProvider from "./context/PopularItems.context";
import ProjectsPreviewProvider from "./context/ProjectsPreview.context";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <HeaderContainer>
        <Navigationbar />
        <section className="relative grid place-items-center mt-40">
          <Slogan />
        </section>
      </HeaderContainer>
      <PopularItemsProvider>
        <PopularFurniture />
      </PopularItemsProvider>
      <SocialMedia />
      <ConfiguratorIntro />
      <ProjectsPreviewProvider>
        <ProjectsPreview />
      </ProjectsPreviewProvider>
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
