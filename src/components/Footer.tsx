export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-12 px-6 md:px-12 bg-white mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="mb-6 md:mb-0">
          <h2 className="text-xl font-bold tracking-tighter mb-2">HELTHEDIA</h2>
          <p className="text-sm text-gray-500 max-w-xs">
            The specialized search engine for scientific, medical, and health-related research.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
          <div>
            <h3 className="font-semibold mb-3">Platform</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-black">Search</a></li>
              <li><a href="#" className="hover:text-black">Journals</a></li>
              <li><a href="#" className="hover:text-black">Clinical Trials</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Resources</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-black">Documentation</a></li>
              <li><a href="#" className="hover:text-black">API</a></li>
              <li><a href="#" className="hover:text-black">Support</a></li>
            </ul>
          </div>
          <div className="hidden md:block">
            <h3 className="font-semibold mb-3">Legal</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-black">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-black">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
        <p>&copy; {new Date().getFullYear()} Helthedia. All rights reserved.</p>
        <p>helthedia.org</p>
      </div>
    </footer>
  );
}
