// components/IndexPage.js

import React, { useState } from 'react';
// import Modal from '../assets/layout/Modal';
import Navbar from "../features/index/Navbar";
import Banner from "../features/index/Banner";
import BenefitsOfTracking from "../features/index/BenefitsOfTracking";
import CallToAction from "../features/index/CallToAction";
import Footer from "../features/index/Footer";

const IndexPage = ({ onTrackPeriodClick }) => {

  return (
    <div>
      <Navbar />
      <Banner />
      <BenefitsOfTracking />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default IndexPage;
