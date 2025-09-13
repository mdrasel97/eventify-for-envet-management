"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        {/* Logo / Brand */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Event Management
        </Link>

        {/* Desktop Menu */}
        <div className="hidden space-x-6 md:flex">
          <Link href="/" className="text-gray-700 hover:text-blue-600">
            Home
          </Link>
          <Link href="/events" className="text-gray-700 hover:text-blue-600">
            Events
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600">
            About
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600">
            Contact
          </Link>
        </div>

        {/* Right side actions */}
        <div className="hidden md:flex space-x-3">
          <Link href="/login">
            <Button variant="outline">Login</Button>
          </Link>
          <Link href="/register">
            <Button>Register</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="rounded-md p-2 text-gray-700 md:hidden"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden border-t bg-white">
          <div className="flex flex-col space-y-3 px-6 py-4">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/events"
              className="text-gray-700 hover:text-blue-600"
              onClick={toggleMenu}
            >
              Events
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-blue-600"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-blue-600"
              onClick={toggleMenu}
            >
              Contact
            </Link>

            <div className="flex space-x-3 pt-3">
              <Link href="/login" className="flex-1">
                <Button variant="outline" className="w-full">
                  Login
                </Button>
              </Link>
              <Link href="/dashboard" className="flex-1">
                <Button className="w-full">Dashboard</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
