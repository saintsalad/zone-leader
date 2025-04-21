'use client'

import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from 'react';

function ClientHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-gray-900/80 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">ZONE LEADER</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/zones" className="text-gray-300 hover:text-blue-400 transition-colors">
              Zones
            </Link>
            <Link href="/rankings" className="text-gray-300 hover:text-blue-400 transition-colors">
              Rankings
            </Link>
            <Link href="/challenges" className="text-gray-300 hover:text-blue-400 transition-colors">
              Challenges
            </Link>
            <div className="relative group">
              <button className="flex items-center text-gray-300 hover:text-blue-400 transition-colors">
                System <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1">
                  <Link href="/system/tiers" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">Tiers</Link>
                  <Link href="/system/pvp" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">PvP</Link>
                  <Link href="/system/titles" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">Titles</Link>
                </div>
              </div>
            </div>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="outline" className="border-blue-600 text-blue-400 hover:bg-blue-600/10">
              Login
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/zones" className="block px-3 py-2 text-gray-300 hover:bg-gray-800 rounded-md">
              Zones
            </Link>
            <Link href="/rankings" className="block px-3 py-2 text-gray-300 hover:bg-gray-800 rounded-md">
              Rankings
            </Link>
            <Link href="/challenges" className="block px-3 py-2 text-gray-300 hover:bg-gray-800 rounded-md">
              Challenges
            </Link>
            <Link href="/system/tiers" className="block px-3 py-2 text-gray-300 hover:bg-gray-800 rounded-md">
              Tier System
            </Link>
            <Link href="/system/pvp" className="block px-3 py-2 text-gray-300 hover:bg-gray-800 rounded-md">
              PvP
            </Link>
            <Link href="/system/titles" className="block px-3 py-2 text-gray-300 hover:bg-gray-800 rounded-md">
              Titles
            </Link>
            <div className="flex flex-col space-y-2 pt-2 border-t border-gray-800">
              <Button variant="outline" className="w-full border-blue-600 text-blue-400 hover:bg-blue-600/10">
                Login
              </Button>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default ClientHeader;