import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

import ThemeSwitcher from "./theme/ThemeSwitcher";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 z-50">
      <nav className="container px-6 py-4 flex items-center justify-between">
        <Link href="/">
          <div className="text-2xl xl:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
            Echo Design
          </div>
        </Link>

        <div className="hidden md:flex items-start justify-center space-x-8">
            <Link
            href="/"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Home
          </Link>
          <Link
            href="#features"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Features
          </Link>
          <Link
            href="#testimonials"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Testimonials
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <ThemeSwitcher />

          <SignedOut>
            <SignInButton forceRedirectUrl="/main">
              <Button variant="outline" className="px-4">
                Login
              </Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton appearance={{ elements: { avatarBox: "w-10 h-10" } }} />
          </SignedIn>
        </div>
      </nav>
    </header>
  );

  
};

export default Header;
