import Link from "next/link";
import { Facebook, Twitter, Instagram, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-white/80 backdrop-blur-lg">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand Section */}
          <div>
            <Link href="/" className="text-2xl font-bold text-blue-600">
              Eventify
            </Link>
            <p className="mt-3 text-sm text-gray-600">
              Your one-stop platform for managing and exploring events.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-3 text-lg font-semibold text-gray-800">
              Quick Links
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link href="/" className="hover:text-blue-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-blue-600">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-600">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="mb-3 text-lg font-semibold text-gray-800">
              Follow Us
            </h3>
            <div className="flex space-x-4 text-gray-600">
              <a href="#" className="hover:text-blue-600">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-blue-600">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-blue-600">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-blue-600">
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t pt-5 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Eventify. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
