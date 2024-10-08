import React from "react";
import Layout from "../Layout/Layout";

import Nav from "../Components/Nav";
import HeroSection from "../Components/HeroSection";
import Mission from "../Components/Mission";
import { AboutUs } from "../Components/AboutUs";
import Team from "../Components/Team";
import Community from "../Components/Community";
import { Work } from "../Components/Work";
import { ContactUs } from "../Components/ContactUs";
import Footer from "../Components/Footer";


const Home: React.FC = () => {
  return (
    <div>
      <Layout>
        <Nav />
        <HeroSection />
        <Mission />
        <AboutUs />
        <Team />
        <Community />
        <Work />
        <ContactUs />
        <Footer />
      </Layout>
    </div>
  );
};

export default Home;
