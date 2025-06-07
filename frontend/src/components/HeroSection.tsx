import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <section
      className="
        relative overflow-hidden
        bg-white dark:bg-gray-900
        bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)]
        dark:bg-[linear-gradient(to_right,#2d3748_1px,transparent_1px),linear-gradient(to_bottom,#2d3748_1px,transparent_1px)]
        bg-[size:6rem_4rem]
      "
    >
      <div
        className="
          mx-auto max-w-screen-2xl px-6 py-32
          lg:flex lg:h-screen lg:items-center
          bg-[radial-gradient(circle_800px_at_100%_200px,#c3dafe,transparent)]
          dark:bg-[radial-gradient(circle_800px_at_100%_200px,#4a5568,transparent)]
        "
      >
        <div className="mx-auto max-w-xl text-center">
          <h1
            className="
              text-4xl font-extrabold tracking-tight
              text-gray-900 dark:text-white
              sm:text-6xl
            "
          >
            AI-Powered Website Cloner
            <strong className="block text-primary dark:text-purple-400">
              Clone Any Site in Seconds
            </strong>
          </h1>

          <p
            className="
              mt-6 text-lg text-gray-700 dark:text-gray-300
              sm:text-xl sm:leading-relaxed
            "
          >
            Enter a URL and let our AI instantly generate a standalone HTML
            replica—complete with inline CSS and semantic markup. Save hours
            of manual work and ship faster.
          </p>

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
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
