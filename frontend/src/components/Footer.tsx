// components/Footer.tsx
import React from "react";
import Link from "next/link";
import {
  Mail,
  Github,

  Linkedin,
} from "lucide-react";

const newsletterEndpoint = "/api/subscribe"; // your newsletter API

const socialLinks = [
  { label: "GitHub", href: "https://github.com/Priyanshu9898", icon: Github },

  { label: "LinkedIn", href: "https://www.linkedin.com/in/priyanshumalaviya/", icon: Linkedin },
];

const footerNav = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/#features" },
      { label: "Pricing", href: "/#pricing" },
      { label: "Docs", href: "/docs" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "/help" },
      { label: "API Status", href: "/status" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 pt-16">
      <div className="mx-auto max-w-screen-xl px-6 sm:px-8 lg:px-12">
        {/* Newsletter */}
        <div className="mx-auto max-w-md text-center">
          <h3 className="text-2xl font-bold">
            Stay in the loop
          </h3>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Get notified when we launch new features or updates.
          </p>
          <form
            action={newsletterEndpoint}
            method="POST"
            className="mt-6 flex"
          >
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <div className="relative w-full">
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-full border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 px-4 py-2 pr-32 text-gray-900 dark:text-gray-100 focus:outline-none"
              />

              
              <button
                type="submit"
                className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full dark:bg-purple-500 dark:hover:bg-purple-400 bg-primary px-6 py-2 text-sm font-medium text-white hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                <Mail className="inline-block mr-1 h-4 w-4" />
                Subscribe
              </button>
            </div>
          </form>
        </div>

        {/* Navigation Links */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {footerNav.map(({ title, links }) => (
            <div key={title} className="space-y-4 text-center sm:text-left">
              <h4 className="font-semibold">{title}</h4>
              <ul className="space-y-2">
                {links.map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social Icons */}
          <div className="space-y-4 text-center sm:text-left">
            <h4 className="font-semibold">Follow Us</h4>
            <div className="flex justify-center sm:justify-start space-x-4">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-gray-200 dark:border-gray-700 pt-8 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Orchid’s Website Cloner. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
