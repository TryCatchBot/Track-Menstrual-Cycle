// components/IndexPage.js

import React, { useState } from 'react';
import Navbar from "../features/index/Navbar";
import Footer from "../features/index/Footer";
import WhyPartnerWithUs from "../features/whenStrualDry/WhyPartnerWithUs";
import WhenStrualDryBanner from "../features/whenStrualDry/WhenStrualDryBanner";
import WhenStrualDryCallToAction from "../features/whenStrualDry/WhenStrualDryCallToAction";

const IndexPage = ({ onTrackPeriodClick }) => {

  return (
    <div>
      <Navbar />
      <WhenStrualDryBanner />
     <WhyPartnerWithUs />
     <WhenStrualDryCallToAction />
      <Footer />
    </div>
  );
};

export default IndexPage;
