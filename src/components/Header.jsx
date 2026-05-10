import { Bell, Settings } from "lucide-react";
import userImage from "@/../public/user.png"
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex h-12 items-center justify-between px-8 shadow-sm">
      <div className="flex items-center gap-8">
        <h1 className="text-xl font-bold text-[#004a80]">AidFlow</h1>
        <nav>
          <a
            href="/dashboard"
            className="text-sm font-semibold py-2 text-[#004a80] border-b-2 border-[#004a80]"
          >
            Dashboard
          </a>
        </nav>
      </div>

      <div className="flex items-center gap-5 text-gray-500">
        <button className="hover:text-gray-800">
          <Bell size={20} />
        </button>
        <button className="hover:text-gray-800">
          <Settings size={20} />
        </button>
        <div className="ml-2 h-9 w-9 overflow-hidden rounded-full">
          <Image
            src={userImage}
            alt="User"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </header>
  );
}
