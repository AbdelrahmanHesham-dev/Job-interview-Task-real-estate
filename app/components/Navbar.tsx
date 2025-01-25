"use client";

import { ChevronDown, Globe, Heart, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="mx-auto max-w-7xl p-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href={"/"} className="flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Madmon LOGO"
                width={120}
                height={120}
              />
            </Link>
          </div>

          <div className="flex items-center gap-5 md:gap-10">
            <div className="hidden md:flex items-center gap-6">
              <ul className="space-x-6 flex">
                <li>
                  <Link href="/" className="text-primary text-xl block py-2">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-primary text-xl block py-2">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-primary text-xl block py-2">
                    Contact
                  </Link>
                </li>
                <li className="relative py-2">
                  <button className="flex items-center text-xl font-medium text-primary">
                    <Heart className="h-5 w-5 text-primary" />
                    <span className="ms-1">Favourite</span>
                  </button>
                </li>
                <li className="relative py-2">
                  <select className="flex items-center text-xl font-medium text-primary w-full bg-transparent border-none focus:ring-0">
                    <option value="en" className="text-primary">
                      <Globe className="h-5 w-5 text-primary inline-block mr-2" />
                      EN
                    </option>
                    <option value="ar" className="text-primary">
                      <Globe className="h-5 w-5 text-primary inline-block mr-2" />
                      AR
                    </option>
                  </select>
                </li>
              </ul>
              <Image
                className="h-8 w-8 rounded-full"
                src="/me-circle.png"
                alt="User"
                width={32}
                height={32}
              />
              <span className="ml-2 font-medium text-gray-700">
                Abdelrahman
              </span>
              <ChevronDown />
            </div>

            <button
              onClick={toggleMenu}
              className="md:hidden text-primary focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-primary text-xl block py-2">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/" className="text-primary text-xl block py-2">
                  About
                </Link>
              </li>
              <li>
                <Link href="/" className="text-primary text-xl block py-2">
                  Contact
                </Link>
              </li>
              <li className="relative py-2">
                <button className="flex items-center text-xl font-medium text-primary">
                  <Heart className="h-5 w-5 text-primary" />
                  <span className="ms-1">Favourite</span>
                </button>
              </li>
              <li className="relative py-2">
                <select className="flex items-center text-xl font-medium text-primary w-full bg-transparent border-none focus:ring-0">
                  <option value="en" className="text-primary">
                    <Globe className="h-5 w-5 text-primary inline-block mr-2" />
                    EN
                  </option>
                  <option value="ar" className="text-primary">
                    <Globe className="h-5 w-5 text-primary inline-block mr-2" />
                    AR
                  </option>
                </select>
              </li>
            </ul>
            <div className="flex">
              <Image
                className="h-8 w-8 rounded-full"
                src="/me-circle.png"
                alt="User"
                width={32}
                height={32}
              />
              <span className="ml-2 font-medium text-gray-700">
                Abdelrahman
              </span>
              <ChevronDown />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
