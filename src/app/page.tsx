import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/gallery-bg.jpg" // Replace with your actual background image path
          alt="South LA background"
          fill
          style={{ objectFit: "cover" }}
          className="opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-[#232834] opacity-90" />
      </div>
      {/* Content */}
      <main className="relative z-10 flex flex-col items-center justify-center w-full px-4 text-center">
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-6 max-w-2xl">
          South L.A. is a diverse and complex place with a wide breadth of experiences. Renters are fighting for their place in L.A. and it is crucial that their voices are heard.
        </h1>
        <p className="text-[#bfc9d1] text-base sm:text-lg max-w-xl mb-12">
          We hope this site can be used to inform policy that helps protect residents and provides greater stability to communities that need it most.
        </p>
        <a href="#voice-section" className="flex flex-col items-center group">
          <span className="text-white font-semibold text-base mb-2 group-hover:underline">Explore Voices</span>
          <svg className="w-8 h-8 text-white group-hover:text-blue-400 transition" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </main>
    </div>
  );
}
