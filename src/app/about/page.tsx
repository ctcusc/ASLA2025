'use client';

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import Navbar from "@/components/header/page";
import Footer from "@/components/footer/page";
// import aboutImage from "@/lib/images/homeabout.png";

const images = [
  { src: '/resources/esperanza.png', alt: 'Esperanza' },
  { src: '/resources/cdtech.png', alt: 'CDTech' },
  { src: '/resources/usc.png', alt: 'USC' },
  { src: '/resources/communitycoalition.png', alt: 'Community Coalition' },
  { src: '/resources/scope.png', alt: 'SCOPE' },
  { src: '/resources/trustsouthla.png', alt: 'TRUST South LA' },
  { src: '/resources/saje.png', alt: 'SAJE' },
];

const PartnershipCarousel = () => {
  const [slidesToShow, setSlidesToShow] = useState(1);

  useEffect(() => {
    const updateSlides = () => {
      const width = window.innerWidth;
      if (width >= 1200) setSlidesToShow(3);
      else if (width >= 900) setSlidesToShow(2);
      else setSlidesToShow(1);
    };

    updateSlides();
    window.addEventListener('resize', updateSlides);
    return () => window.removeEventListener('resize', updateSlides);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="my-6 px-2">
      <Slider {...settings}>
        {images.map(({ src, alt }) => (
          <div key={src} className="flex justify-center items-center">
            <Image
              src={src}
              alt={alt}
              width={300}
              height={150}
              className="object-contain w-auto h-32"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar mobile={isMobile} />

      <div className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 tracking-wide">ABOUT</h1>

        <p className={`mb-6 ${isMobile ? "text-sm" : "text-base"} leading-relaxed`}>
          <span className="font-semibold">In Spring 2018</span>, community members gathered to share their experiences around the rapidly
          increasing costs of living in South L.A. Residents not only voiced the obstacles they faced in meeting their basic needs, but also
          expressed a clear vision for the future.
        </p>

        <p className={`mb-6 ${isMobile ? "text-sm" : "text-base"} leading-relaxed`}>
          This work was made possible through generous partnerships with community organizations: CDTech, Community Coalition, SCOPE, SAJE,
          Esperanza, and T.R.U.S.T. South LA. Together, we can ensure LA is a place where every person can live and thrive.
        </p>

        {/* Optional image block (uncomment and replace if needed) */}
        {/* <Image src={aboutImage} alt="About" className="w-full h-auto mb-6 rounded" /> */}

        <p className={`mb-6 ${isMobile ? "text-sm" : "text-base"} leading-relaxed`}>
          South L.A. is diverse and complex. This work captures a portion of renter perspectives. Focus groups included families, children, young
          adults, foster parents, and grandparents.
        </p>

        <hr className="my-8 border-gray-300" />
        <h2 className="text-2xl font-semibold text-center mb-4 tracking-wider">VOICES</h2>

        <div className={`flex flex-wrap justify-center gap-4 mb-8`}>
          {["Families", "Children", "Young Adults", "Foster Parents", "Grandparents"].map((group) => (
            <div
              key={group}
              className={`rounded-full bg-gray-200 text-gray-700 px-5 py-2 text-sm font-medium text-center shadow-md ${
                isMobile ? "text-xs" : "text-sm"
              }`}
            >
              {group}
            </div>
          ))}
        </div>

        <hr className="my-8 border-gray-300" />

        <p className={`mb-6 ${isMobile ? "text-sm" : "text-base"} leading-relaxed`}>
          Quote locations on maps are randomized to preserve anonymity. We add spatial noise to 10% of the sample.
        </p>

        <p className={`mb-6 ${isMobile ? "text-sm" : "text-base"} leading-relaxed`}>
          We believe in intersectionality. The burdens and dreams shared by women and immigrants are central, though we have removed gender and
          immigration status from quotes for protection.
        </p>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-center mb-6 tracking-wider">PARTNERSHIPS</h2>
          <PartnershipCarousel />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;