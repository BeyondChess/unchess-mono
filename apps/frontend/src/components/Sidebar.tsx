"use client";
import React, { useState } from "react";
import { Button } from "@repo/components/button";
import { Input } from "@repo/components/input";
import {
  ChevronLeft,
  ChevronRight,
  LogIn,
  Search,
  UserPlus,
  LogOut,
  Home,
  PlayCircle,
  Dice5,
  Newspaper,
  Users,
} from "lucide-react";
import ThemeButton from "./Themebutton";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

const Sidebar = () => {
  const [isMinimized, setIsMinimized] = useState(false);
  const { data: session } = useSession();

  const toggleMinimize = () => setIsMinimized((prev) => !prev);

  return (
    <div className="h-screen flex bg-primary-500 dark:bg-primary-200 transition-colors duration-300">
      <aside
        className={`flex flex-col ${
          isMinimized ? "w-16" : "w-56"
        } p-4 transition-all duration-300 ease-in-out`}
        aria-label="Sidebar"
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center mb-8">
          {!isMinimized && (
            <h1 className="text-2xl font-bold transition-opacity duration-300 text-primary-50 dark:text-gray-900">
              Unchess
            </h1>
          )}
          <Button
            variant="ghost"
            size="lg"
            onClick={toggleMinimize}
            aria-label={isMinimized ? "Expand Sidebar" : "Minimize Sidebar"}
          >
            {isMinimized ? (
              <ChevronRight className="h-8 w-8 hover:text-primary-400 animate-pulse" />
            ) : (
              <ChevronLeft className="h-8 w-8 hover:text-primary-400 animate-pulse" />
            )}
          </Button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-grow space-y-2">
          {links.map((item) => (
            <Link href={item.href} key={item.label}>
              <Button
                asChild
                variant="ghost"
                className={`w-full justify-start hover:bg-primary-400 dark:hover:bg-primary-300 transition-colors py-2 text-lg ${
                  isMinimized ? "px-2" : "px-4"
                }`}
                aria-label={item.label}
              >
                <span className="flex items-center text-primary-50 dark:text-gray-900">
                  {isMinimized ? (
                    <item.icon className="h-8 w-8" />
                  ) : (
                    <item.icon className="h-6 w-6" />
                  )}
                  {!isMinimized && <span className="ml-4">{item.label}</span>}
                </span>
              </Button>
            </Link>
          ))}
        </nav>

        {/* Footer Section */}
        <div className="space-y-4 mt-auto">
          {/* Search Input */}
          {!isMinimized && (
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="search"
                placeholder="Search"
                className="pl-10 focus:ring-primary-500 focus:border-primary-500 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-200"
                aria-label="Search"
              />
            </div>
          )}

          {/* User Section */}
          {session ? (
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2">
                {/* Profile Picture */}
                <Image
                  src={session.user?.image || "/default-avatar.png"}
                  alt="Profile Picture"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                {!isMinimized && (
                  <span className="text-primary-50 dark:text-gray-900">
                    {session.user?.name}
                  </span>
                )}
              </div>
              {/* Logout Button */}
              <Button
                onClick={() => signOut()}
                className={`w-full justify-start flex items-center ${
                  isMinimized ? "px-2" : "px-4"
                } hover:bg-red-500 dark:hover:bg-red-400 transition-colors`}
                aria-label="Log Out"
              >
                <LogOut className="h-6 w-6" />
                {!isMinimized && <span className="ml-2">Log Out</span>}
              </Button>
            </div>
          ) : (
            <>
              {/* Sign Up Button */}
              <Button
                className={`w-full justify-start flex items-center ${
                  isMinimized ? "px-2" : "px-4"
                } hover:bg-primary-400 dark:hover:bg-primary-300 transition-colors`}
                variant="outline"
                aria-label="Sign Up"
              >
                <UserPlus className="h-6 w-6" />
                {!isMinimized && <span className="ml-2">Sign Up</span>}
              </Button>
              {/* Log In Button */}
              <Button
                className={`w-full justify-start flex items-center ${
                  isMinimized ? "px-2" : "px-4"
                } hover:bg-green-500 dark:hover:bg-green-400 transition-colors`}
                onClick={() => signIn("github")}
                aria-label="Log In"
              >
                <LogIn className="h-6 w-6" />
                {!isMinimized && <span className="ml-2">Log In</span>}
              </Button>
            </>
          )}

          {/* Theme Toggle */}
          <ThemeButton />
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;

const links = [
  { href: "/", label: "home", icon: Home },
  { href: "/play", label: "play", icon: PlayCircle },
  { href: "/odds", label: "odds", icon: Dice5 },
  { href: "/news", label: "news", icon: Newspaper },
  { href: "/community", label: "community", icon: Users },
];
