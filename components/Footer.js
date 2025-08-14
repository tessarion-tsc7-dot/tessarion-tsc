export default function Footer() {
  return (
    <footer className="bg-black text-lightGray py-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6">
        <p>© 2025 Tessarion-Tsc. All rights reserved.</p>
        <div className="space-x-4">
          <a href="/terms" className="hover:text-teslaRed">Terms</a>
          <a href="/privacy" className="hover:text-teslaRed">Privacy</a>
          <a href="/risk" className="hover:text-teslaRed">Risk</a>
          <a href="/contact" className="hover:text-teslaRed">Contact</a>
        </div>
      </div>
    </footer>
  );
}
