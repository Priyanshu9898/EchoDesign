"use client";

import Link from "next/link";
import React from "react";
import { DownloadCloud, Eye, Code } from "lucide-react";

const features = [
  {
    title: "One-Click Clone",
    description:
      "Instantly clone any public website with a single API call—no manual work required.",
    icon: DownloadCloud,
  },
  {
    title: "Live Preview",
    description:
      "See your cloned site in real time inside an embedded preview pane before you download.",
    icon: Eye,
  },
  {
    title: "Inline CSS Output",
    description:
      "Get a fully standalone HTML5 file with all styles inlined—perfect for sharing or offline use.",
    icon: Code,
  },
];

const FeatureSection = () => {
  return (
    <section className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-16">
      <div className="mx-auto max-w-screen-xl px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Meet Orchids Website Cloner
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Scrape, generate, and preview full HTML clones of any site in seconds.
            Store your history, tweak the result, or embed it directly—no hosting needed.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, description, icon: Icon }, idx) => (
            <Link
              key={idx}
              href="#"
              className="group block rounded-xl border border-gray-200 dark:border-gray-700 p-8 shadow transition hover:border-primary hover:shadow-lg hover:shadow-primary/20"
            >
              <Icon className="w-10 h-10 text-primary dark:text-purple-400 transition group-hover:text-primary-dark" />
              <h3 className="mt-4 text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {description}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
            <Link
              href="/sign-in"
              className="
                inline-block rounded-full bg-primary
                px-8 py-3 text-sm font-semibold
                text-white hover:bg-purple-600 focus:ring-2
                focus:ring-primary focus:ring-offset-2
                dark:bg-purple-500 dark:hover:bg-purple-400
              "
            >
              Try Orchids Cloner
            </Link>
          </div>

        
      </div>
    </section>
  );
};

export default FeatureSection;
