export default function Navbar() {
  return (
    <nav className="bg-black text-lightGray p-4 flex justify-between items-center">
      <h1 className="text-teslaRed text-xl font-bold">Tessarion-Tsc</h1>
      <div className="space-x-6">
        <a href="/" className="hover:text-teslaRed">Home</a>
        <a href="/dashboard" className="hover:text-teslaRed">Dashboard</a>
        <a href="/learn" className="hover:text-teslaRed">Learn</a>
        <a href="/news" className="hover:text-teslaRed">News</a>
        <a href="/contact" className="hover:text-teslaRed">Contact</a>
      </div>
    </nav>
  );
}
