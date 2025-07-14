'use client';
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const voices = [
  {
    image: '/houses/house1.jpg',
    quote: "I've lived in South LA my whole life. Rent has doubled, but my wages haven't.",
  },
  {
    image: '/houses/house2.jpg',
    quote: "We fight every day to stay in the neighborhood we grew up in.",
  },
  {
    image: '/houses/house3.jpg',
    quote: "Community isn't just where you live—it's who you live with.",
  },
  {
    image: '/houses/house4.jpg',
    quote: "I want my kids to grow up in the same place I did.",
  },
];

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-10 text-white text-3xl z-10 cursor-pointer"
    >
      ❯
    </div>
  );
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-10 text-white text-3xl z-10 cursor-pointer"
    >
      ❮
    </div>
  );
};

const VoiceCarousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 640, settings: { slidesToShow: 1 } },
        ],
    };

  return (
    <Slider {...settings}>
      {voices.map((voice, index) => (
        <div key={index} className="px-4">
          <div className="relative overflow-hidden rounded-xl shadow-lg group">
            <Image
              src={voice.image}
              alt={`Voice ${index}`}
              width={600}
              height={400}
              className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white px-6 text-center transition-opacity duration-300">
              <p className="text-sm sm:text-base">{voice.quote}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default VoiceCarousel;
