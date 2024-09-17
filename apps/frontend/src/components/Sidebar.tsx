"use client";
import React, { useState } from "react";
import { Button } from "@repo/components/button";
import { Input } from "@repo/components/input";
import {
  ChevronLeft,
  ChevronRight,
  LogIn,
  LogOut,
  Search,
  UserPlus,
} from "lucide-react";
import ThemeButton from "./Themebutton";
import Link from "next/link";

const Sidebar = () => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleMinimize = () => setIsMinimized((prev) => !prev);
  const toggleLogin = () => setIsLoggedIn((prev) => !prev);

  return (
    <div
      className={`h-screen flex bg-primary-500 dark:bg-primary-200 transition-colors duration-300`}
    >
      <aside
        className={`flex flex-col ${isMinimized ? "w-16" : "w-48"} p-4 transition-all duration-300 ease-in-out`}
        aria-label="Sidebar"
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center mb-8">
          {!isMinimized && (
            <h1 className="text-2xl font-bold transition-opacity duration-300">
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
            <Button
              key={item.label}
              variant={"destructive"}
              className={`w-full justify-start hover:bg-primary-400 dark:hover:bg-primary-300 transition-colors py-2 text-lg ${isMinimized ? "px-2" : "px-4"}`}
              aria-label={item.label}
            >
              <Link href={item.href}>
                {isMinimized ? item.label.charAt(0).toUpperCase() : item.label}
              </Link>
            </Button>
          ))}
        </nav>

        {/* Footer Section */}
        <div className="space-y-4 mt-auto">
          {!isMinimized && (
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="search"
                placeholder="Search"
                className="pl-10 focus:ring-primary-500 focus:border-primary-500"
                aria-label="Search"
              />
            </div>
          )}

          {isLoggedIn ? (
            <Button
              onClick={toggleLogin}
              className="w-full justify-start"
              aria-label="Log Out"
            >
              <LogOut className="mr-2 h-4 w-4" />
              {!isMinimized && "Log Out"}
            </Button>
          ) : (
            <>
              <Button
                className="w-full justify-start"
                variant="outline"
                aria-label="Sign Up"
              >
                <UserPlus className="mr-2 h-4 w-4" />
                {!isMinimized && "Sign Up"}
              </Button>
              <Button
                className="w-full justify-start"
                onClick={toggleLogin}
                aria-label="Log In"
              >
                <LogIn className="mr-2 h-4 w-4" />
                {!isMinimized && "Log In"}
              </Button>
            </>
          )}

          <ThemeButton />
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;

const links = [
  { href: "/", label: "home" },
  { href: "/play", label: "play" },
  { href: "/odds", label: "odds" },
  { href: "/news", label: "news" },
  { href: "/community", label: "community" },
];
