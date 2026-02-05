"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname() || "/";

  const linkClass = (href: string) =>
    `text-sm font-medium px-1 ${
      pathname === href || (href !== "/" && pathname.startsWith(href))
        ? "text-amber-700 border-b-2 border-amber-700"
        : "text-gray-700 hover:text-amber-700"
    }`;

  return (
    <header className="bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Left logo */}
        <div className="flex items-center gap-2">
          <Image src="/image.png" alt="Shakti Punj Logo" width={40} height={40} className="object-contain" />
          <span className="text-xl font-bold text-amber-800">SHAKTI PUNJ</span>
        </div>

        {/* Menu */}
        <nav className="flex gap-8">
          <Link href="/" className={linkClass("/")}>Home</Link>
          <Link href="/category" className={linkClass("/category")}>Category</Link>
          <Link href="/blogs" className={linkClass("/blogs")}>Blogs</Link>
        </nav>

        {/* Icons */}
        <div className="flex gap-5 items-center">
          <span className="cursor-pointer text-xl hover:opacity-70">❤️</span>
          <Link href="/cart" className="cursor-pointer text-xl hover:opacity-70">🛒</Link>
          <Link href="/login" className="cursor-pointer text-xl hover:opacity-70">👤</Link>
        </div>
      </div>
    </header>
  );
}
