"use client"

import * as React from "react"



import HeroSection from "@/components/HeroSection"
import Testimonials from "@/components/Testimonials"
import FeatureSection from "@/components/FeatureSection"

const Home = () => {


  return (
    <>
      <HeroSection />
      <FeatureSection />
      <Testimonials />
      {/* <FeatureSection />
      <Footer /> */}
    </>
  )
}

export default Home;