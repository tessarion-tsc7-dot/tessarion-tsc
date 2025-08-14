export default function Testimonials() {
  const testimonials = [
    { name: "Jane D.", text: "This platform transformed my investing!" },
    { name: "Mark R.", text: "The AI insights are unbelievably accurate." },
    { name: "Sophia L.", text: "Secure, fast, and easy to use." }
  ];

  return (
    <section className="bg-black py-16">
      <h2 className="text-center text-silver text-3xl font-bold mb-8">What Our Users Say</h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-6">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-gray-900 p-6 rounded-lg hover:shadow-red-500/50">
            <p className="text-lightGray">"{t.text}"</p>
            <h4 className="text-teslaRed mt-4 font-bold">{t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
