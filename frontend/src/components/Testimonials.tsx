"use client";

import React, { useEffect } from "react";
import "keen-slider/keen-slider.min.css";
import KeenSlider, { KeenSliderInstance } from "keen-slider";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Orchid’s Cloner saved me hours of manual HTML/CSS work—AI generated a pixel-perfect replica in seconds!",
    author: "Jane Doe, Frontend Engineer",
    rating: 5,
  },
  {
    quote:
      "I just input our marketing site URL and got a fully inline-CSS page back instantly. Game changer!",
    author: "Mark Lee, Product Manager",
    rating: 5,
  },
  {
    quote:
      "Seamless integration with my Next.js frontend. Works out of the box, day or night (literally 🌙).",
    author: "Sofia Patel, Full-Stack Dev",
    rating: 4,
  },
];

const Testimonials = () => {
  useEffect(() => {
    const slider: KeenSliderInstance = new KeenSlider("#keen-slider", {
      loop: true,
      slides: { origin: "center", perView: 1.25, spacing: 16 },
      breakpoints: {
        "(min-width: 1024px)": {
          slides: { origin: "auto", perView: 2.5, spacing: 32 },
        },
      },
    });

    document
      .getElementById("keen-slider-previous")
      ?.addEventListener("click", () => slider.prev());
    document
      .getElementById("keen-slider-next")
      ?.addEventListener("click", () => slider.next());

    return () => slider.destroy();
  }, []);

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16">
      <div className="mx-auto max-w-[1340px] px-6">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 sm:text-5xl">
            Read trusted reviews from our customers
          </h2>
          <div className="mt-8 lg:mt-0 flex gap-4">
            <button
              id="keen-slider-previous"
              aria-label="Previous slide"
              className="flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 p-3 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              id="keen-slider-next"
              aria-label="Next slide"
              className="flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 p-3 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div id="keen-slider" className="keen-slider mt-10 -mx-4 px-4">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="keen-slider__slide px-4"
            >
              <blockquote className="flex h-full flex-col justify-between bg-white dark:bg-gray-800 p-6 sm:p-8 lg:p-12 rounded-lg shadow-md dark:shadow-black/20">
                <div>
                  <div className="flex gap-1 text-yellow-500 dark:text-yellow-400">
                    {Array.from({ length: t.rating }).map((_, idx) => (
                      <Star key={idx} className="w-5 h-5" />
                    ))}
                  </div>
                  <p className="mt-4 text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
                    “{t.quote}”
                  </p>
                </div>
                <footer className="mt-6 text-sm font-semibold text-gray-600 dark:text-gray-400">
                  — {t.author}
                </footer>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
