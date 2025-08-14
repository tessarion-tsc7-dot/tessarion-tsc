export default function MarketHighlights() {
  const highlights = [
    { name: "TSLA", change: "+1.5%" },
    { name: "AAPL", change: "-0.8%" },
    { name: "BTC", change: "+2.1%" },
    { name: "ETH", change: "+0.6%" }
  ];

  return (
    <section className="bg-black py-12 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 flex justify-around">
        {highlights.map((item, i) => (
          <div key={i} className="text-center">
            <h4 className="text-silver font-bold">{item.name}</h4>
            <p className={text-sm ${item.change.includes("+") ? "text-green-500" : "text-red-500"}}>
              {item.change}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
