"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-amber-900 text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-4 gap-8 mb-8">
          {/* Left: Logo & Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/image.png"
                alt="Shakti Punj Logo"
                width={40}
                height={40}
                className="object-contain"
              />
              <span className="text-lg font-bold">SHAKTI PUNJ</span>
            </div>
            <p className="text-sm text-amber-100 mb-4">
              Crafted with purpose. Aligned with authenticity. Designed for spiritual growth and wellness.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-amber-200 hover:text-white">f</a>
              <a href="#" className="text-amber-200 hover:text-white">𝕏</a>
              <a href="#" className="text-amber-200 hover:text-white">in</a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-bold text-lg mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/category" className="text-amber-100 hover:text-white text-sm">
                  Category
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="text-amber-100 hover:text-white text-sm">
                  Blogs
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-amber-100 hover:text-white text-sm">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-amber-100 hover:text-white text-sm">
                  Help Center
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <p className="text-amber-100 text-sm mb-2">
              📧 Email: <a href="mailto:hello@shaktipunj.com" className="hover:text-white">hello@shaktipunj.com</a>
            </p>
            <p className="text-amber-100 text-sm">
              📞 Phone: <a href="tel:+1234567890" className="hover:text-white">+1 (234) 567-890</a>
            </p>
          </div>
        </div>

        {/* Bottom divider and copyright */}
        <div className="border-t border-amber-700 pt-6">
          <p className="text-center text-sm text-amber-100">
            © 2024 Shakti Punj. All rights reserved. | <a href="#" className="hover:text-white">Privacy Policy</a> | <a href="#" className="hover:text-white">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

