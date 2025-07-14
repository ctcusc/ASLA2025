import Image from "next/image";
import Navbar from "@/components/header/page";
import Footer from "@/components/footer/page";
import VoiceCarousel from "@/components/VoiceCarousel";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#181a23] overflow-hidden">
      {/* Background Image and Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/gallery-bg.jpg"
          alt="South LA background"
          fill
          style={{ objectFit: "cover" }}
          className="opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-[#232834] opacity-90" />
      </div>

      <div className="relative z-10">
        <Navbar />
      </div>

      {/* Section 1: Main Intro Content */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center gap-y-10">
        <h1 className="text-white sm:text-xl md:text-2xl font-bold font-opensans mb-6 max-w-xl" style={{ fontFamily: 'Work Sans, sans-serif' }}>
          This site provides a glimpse into the lives of tenants in South Los Angeles through their own words.
        </h1>
        <p className="text-white text-base sm:text-lg max-w-3xl mb-12" style={{ fontFamily: 'Work Sans, sans-serif' }}>
          We hope the voices and images that follow amplify their experiences and motivate policy interventions that remedy past and present harms. We need to work together with our neighbors and our politicians to make a different future possible.
        </p>
        <a href="#voice-section" className="flex flex-col items-center group">
          <span className="text-[#bde3fe] font-semibold text-large mb-2" style={{ fontFamily: 'Work Sans, sans-serif' }}>Explore Voices</span>
          <svg className="w-10 h-10 text-[#bde3fe] transition" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </section>

      {/* Section 2: Explore Voices */}
      <section
        id="voice-section"
        className="relative z-10 bg-[#191d27] text-black w-full px-6 py-24 text-center"
      >

        <div className="max-w-3xl mx-auto">
          <VoiceCarousel />
        </div>
      </section>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
