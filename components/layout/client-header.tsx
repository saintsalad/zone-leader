"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useUserStore } from "@/utils/store";
import { createClient } from "@/utils/supabase/client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function ClientHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, setUser } = useUserStore();
  const supabase = createClient();

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user: supabaseUser },
      } = await supabase.auth.getUser();
      setUser(supabaseUser);
    };

    getUser();
  }, [supabase, setUser]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  const getUserInitials = () => {
    if (!user?.email) return "??";
    return user.email.substring(0, 2).toUpperCase();
  };

  return (
    <header className="fixed w-full z-50 bg-gray-900/80 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="font-bold uppercase text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Strivyx
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {user && (
              <>
                <Link
                  href="/zones"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Zones
                </Link>
                <Link
                  href="/rankings"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Rankings
                </Link>

                <Link
                  href="/about"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  About Us
                </Link>
                <DropdownMenu modal={false}>
                  <DropdownMenuTrigger asChild>
                    <button className="focus:outline-none">
                      <Avatar className="h-9 w-9 cursor-pointer hover:opacity-80 transition">
                        <AvatarImage
                          src={user?.user_metadata?.avatar_url}
                          alt={user?.email || "User avatar"}
                        />
                        <AvatarFallback className="bg-blue-600 text-white">
                          {getUserInitials()}
                        </AvatarFallback>
                      </Avatar>
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    sideOffset={4}
                    className="w-48"
                    align="end"
                  >
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link className="w-full cursor-pointer" href="/profile">
                        Profile
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link className="w-full cursor-pointer" href="/settings">
                        Settings
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={handleLogout}
                      className="text-red-500 cursor-pointer"
                    >
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            )}
          </nav>

          {/* Auth Buttons */}
          {!user && (
            <div className="hidden md:flex items-center space-x-3">
              <Link href="/login">
                <Button
                  variant="outline"
                  className="border-blue-600 text-blue-400 hover:bg-blue-600/10"
                >
                  Login
                </Button>
              </Link>
              <Button className="bg-blue-600 hover:bg-blue-700">Sign Up</Button>
            </div>
          )}

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
            <Link
              href="/zones"
              className="block px-3 py-2 text-gray-300 hover:bg-gray-800 rounded-md"
            >
              Zones
            </Link>
            <Link
              href="/rankings"
              className="block px-3 py-2 text-gray-300 hover:bg-gray-800 rounded-md"
            >
              Rankings
            </Link>
            <Link
              href="/challenges"
              className="block px-3 py-2 text-gray-300 hover:bg-gray-800 rounded-md"
            >
              Challenges
            </Link>
            <Link
              href="/system/tiers"
              className="block px-3 py-2 text-gray-300 hover:bg-gray-800 rounded-md"
            >
              Tier System
            </Link>
            <Link
              href="/system/pvp"
              className="block px-3 py-2 text-gray-300 hover:bg-gray-800 rounded-md"
            >
              PvP
            </Link>
            <Link
              href="/system/titles"
              className="block px-3 py-2 text-gray-300 hover:bg-gray-800 rounded-md"
            >
              Titles
            </Link>
            <div className="flex flex-col space-y-2 pt-2 border-t border-gray-800">
              <Button
                variant="outline"
                className="w-full border-blue-600 text-blue-400 hover:bg-blue-600/10"
              >
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
