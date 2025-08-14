export default function HeroSection() {
  return (
    <section className="relative bg-black text-center py-20">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>
      <div className="relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-silver mb-4">
          AI-Driven Investment Intelligence
        </h1>
        <p className="text-lightGray mb-6">
          At Your Fingertips
        </p>
        <div className="space-x-4">
          <button className="bg-teslaRed px-6 py-3 rounded-lg hover:bg-red-700">
            Get Started
          </button>
          <button className="border border-teslaRed px-6 py-3 rounded-lg hover:bg-red-700 hover:text-white">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
