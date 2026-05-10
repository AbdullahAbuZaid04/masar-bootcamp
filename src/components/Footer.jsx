export default function Footer() {
  return (
    <footer className="mt-auto p-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">

        <div className="space-y-1">
          <h3 className="text-[10px] font-bold uppercase tracking-wider text-gray-700">
            AidFlow Humanitarian Systems
          </h3>
          <p className="text-[11px] text-gray-400">
            © {new Date().getFullYear()} AidFlow Humanitarian Systems
          </p>
        </div>

        <div className="flex items-center gap-8">
          <a href="#" className="text-[11px] text-gray-400 hover:text-gray-800 transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="text-[11px] text-gray-400 hover:text-gray-800 transition-colors">
            Terms of Service
          </a>
          <a href="#" className="text-[11px] text-gray-500 hover:text-gray-800 transition-colors">
            Help Center
          </a>
        </div>

      </div>
    </footer>
  );
}
