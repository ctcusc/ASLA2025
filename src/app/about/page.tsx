'use client';

import React, { useEffect, useState } from "react";
import { isMobile } from 'react-device-detect';
import Image from "next/image";
import Slider from "react-slick";
import Navbar from "@/components/navbar/page";
import Footer from "@/components/footer/page";

const images = [
  { src: '/about/partners/esperanza.png', alt: 'Esperanza' },
  { src: '/about/partners/cdtech.png', alt: 'CDTech' },
  { src: '/about/partners/usc.png', alt: 'USC' },
  { src: '/about/partners/communitycoalition.png', alt: 'Community Coalition' },
  { src: '/about/partners/scope.png', alt: 'SCOPE' },
  { src: '/about/partners/trustsouthla.png', alt: 'TRUST South LA' },
  { src: '/about/partners/saje.png', alt: 'SAJE' },
];

const aboutImage = '/about/homeabout.png';

const PartnershipCarousel = () => {

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="my-6 mx-6 px-2">
      <Slider {...settings}>
        {images.map(({ src, alt }) => (
          <div key={src} className="flex justify-center text-center">
            <Image
              src={src}
              alt={alt}
              width={300}
              height={150}
              className="center object-contain w-auto h-32 mx-auto justify-center"
              style={{ display: 'center' }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

const About = () => {

  return (
    <div className="min-h-screen ">
      <Navbar/>

      <div className="max-w-5xl mx-auto px-4 py-8">
        <h1>ABOUT</h1>

        <p>
          <span className="font-semibold">In Spring 2018</span>, community members gathered to share their experiences around the 
          rapidly increasing costs of living in South L.A. Residents not only voiced the obstacles they faced in meeting their basic 
          needs, but also expressed a clear vision for the future. These meetings took place in the form of 17 focus groups conversations 
          with residents representing the area stretching from Crenshaw Avenue to Alameda Street and from the I-10 Freeway to Florence Avenue. 
          Participants were given a survey at the beginning of each session, followed by conversations that lasted roughly 60 minutes.
        </p>

        <p>
         This work was made possible through generous partnerships with community organizations. These partners include CDTech, 
         Community Coalition, SCOPE, SAJE, Esperanza Community Housing, and T.R.U.S.T. South LA. These organizations have been on the ground
         for years working to ensure that Los Angeles is a place where every person can live and thrive. Together, we can make sure that the 
         promise of home, health, and peace becomes a reality for all.
        </p>

        <Image 
          src={aboutImage} 
          alt="About" 
          layout="responsive" 
          width={0} 
          height={0} 
          className="w-full h-auto mb-6 rounded" 
        />

        <p>
          South L.A. is a diverse and complex place with a wide breadth of experiences. This work only captures a portion of resident 
          perspectives and focuses on renters. The conversations engaged many different groups of people including families, children, 
          young adults, foster parents, and grandparents. It’s important to note that this record does not include community members 
          that have been displaced or those that currently own homes. Renters are fighting for their place in L.A. and it is crucial 
          that their voices are heard. We hope this site can be used to inform policy that helps protect residents and provides greater 
          stability to communities that need it most.
        </p>

        <hr className="my-8 border-lightgray" />
        <h1>VOICES</h1>

        <div className="flex flex-wrap justify-center mx-24 gap-4 mb-8">
          {["Families", "Children", "Young Adults", "Foster Parents", "Grandparents"].map((group) => (
            <div
              key={group}
              className="rounded-full border-lightgray border-4 text-lightgray px-2 py-2 flex items-center justify-center text-center w-[120px] md:w-[150px] md:text-md aspect-square"
            >
              {group}
            </div>
          ))}
        </div>

        <hr className="my-8 border-lightgray" />

        <p>
          In no way should the exact location of the quotes shared on the maps be interpreted as specific 
          or real life locations. To protect the identity of participants, quotes have been randomized 
          spatially and only represent a rough approximation of the neighborhoods in which focus group 
          residents lived. We ensure anonymity through adding noise to 10% of the sample by choosing a 
          point randomly from the study area for those selected.
        </p>

        <p>
          We believe in the importance of intersectionality. The experiences shared in the focus groups 
          show the particular burdens and dreams held by women and immigrants. Based on our conversations, 
          though, these groups are especially vulnerable to landlord abuse and other negative impacts of 
          the affordability crisis. In order to further protect their identities, immigration status and 
          gender has not been linked to any of the quotes provided. We hope that the perspective and 
          experiences of these communities are still present and interpretable with the context given in 
          the quotes. We also highlight these voices in detail for the full report found in the Research 
          & Campaigns section.
        </p>

        <div className="mt-12">
          <h1>PARTNERSHIPS</h1>
          <PartnershipCarousel />
        </div>
      </div>

      <Footer/>
    </div>
  );
};

export default About;