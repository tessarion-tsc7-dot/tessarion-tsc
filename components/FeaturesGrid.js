export default function FeaturesGrid() {
  const features = [
    { title: "AI Allocation Engine", desc: "Smart portfolio balancing." },
    { title: "Live Dashboard", desc: "Real-time market data." },
    { title: "Secure Auth", desc: "Advanced encryption login." },
    { title: "Education Portal", desc: "Learn investment basics." }
  ];

  return (
    <section className="bg-black py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8">
        {features.map((f, i) => (
          <div key={i} className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-red-500/50">
            <h3 className="text-teslaRed text-lg font-bold">{f.title}</h3>
            <p className="text-lightGray mt-2">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
