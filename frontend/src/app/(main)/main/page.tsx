"use client";

import { useCallback, useState } from "react";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";

export default function HomePage() {
  // URL placeholders for rotation
  const placeholders = [
    "https://example.com",
    "https://openai.com",
    "https://github.com",
    "https://yourdomain.com",
  ];

  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [html, setHtml] = useState<string | null>(null);
  // Update URL state as user types
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  }, []);

  // Form submission handler with validation, axios call, and toast
  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // Basic URL validation
      try {
        new URL(url);
      } catch {
        toast.error("Please enter a valid URL.");
        return;
      }

      setLoading(true);
      setHtml(null);

      try {
        const { data } = await axios.post("http://localhost:8000/clone", { url });
        setHtml(data.html);
        toast.success("Website cloned successfully!");
      } catch (err) {
        console.error(err);
        toast.error("Failed to clone website. Please try again.");
      } finally {
        setLoading(false);
      }
    },
    [url]
  );

  if (html) {
    return (
      <div className="fixed inset-0 bg-white z-50">
        <button
          className="absolute top-4 right-4 px-4 py-2 bg-black text-white rounded"
          onClick={() => setHtml(null)}
        >
          ← Back
        </button>
        <iframe
          srcDoc={html}
          sandbox="allow-scripts allow-same-origin"
          className="w-full h-full border-0"
        />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-background text-foreground p-6">
      {/* Toast container */}
      <Toaster position="top-right" reverseOrder={false} />

      <div className="w-full max-w-xl">
        <h1 className="text-3xl sm:text-5xl font-bold text-center mb-12 dark:text-white">
          Orchid&apos;s Website Cloner
        </h1>

        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />

        {loading && <p className="mt-4 text-center">Cloning...</p>}
      </div>
      {html && (
          <div className="mt-6 border border-gray-200 dark:border-gray-700 rounded">
            <iframe
              srcDoc={html}
              className="w-full h-[600px]"
              sandbox="allow-scripts allow-same-origin"
            />
          </div>
        )}
    </div>
  );
}
