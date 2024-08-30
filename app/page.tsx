/* eslint-disable @next/next/no-img-element */

import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/HeroSection/Hero";
import Productivity from "./Components/Productivity/Productivity";
import StickyNav from "./Components/Navbar/StickyNav";
import Collaboration from "./Components/Collaboration.tsx/Collaboration";

export default function Home() {
  return (
    <div className="">
      <div className="relative z-50">
        <div className="absolute">
          <Navbar />
        </div>
      </div>
      <div>
        <div className="overflow-hidden">
          <div className="relative">
            <img
              className="absolute top-0 transition ease-in duration-200 max-xl:right-[-1050px] xl:right-[-970px] image"
              width="4377"
              src="https://github.githubassets.com/images/modules/site/home-campaign/hero-bg.webp"
              alt=""
            />
          </div>
          <div className="hero-section px-3">
            <Hero />
          </div>
          <StickyNav/>
          <div id='productivity' className='home-campaign-productivity px-4 pt-8 overflow-hidden'>
            <Productivity/>
          </div>
          <div id='collaboration' className='home-campaign-productivity px-4 pt-8  overflow-hidden'>
            <Collaboration/>
          </div>
        </div>
      </div>
    </div>
  );
}
