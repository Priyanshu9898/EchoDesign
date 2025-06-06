"use client";

import { useCallback, useState } from "react";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";

export default function HomePage() {
  // Replace demo placeholders with URLs relevant to your cloning project
  const placeholders = [
    "https://example.com",
    "https://openai.com",
    "https://github.com",
    "https://yourdomain.com",
  ];

  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!url) return;
      setLoading(true);
      fetch("/api/clone", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      })
        .then((res) => res.json())
        .then((data) => {
          // TODO: Render the returned HTML preview
          console.log(data.html);
        })
        .catch(console.error)
        .finally(() => setLoading(false));
    },
    [url]
  );

  return (
    <div className="flex items-center justify-center min-h-screen bg-background text-foreground p-6">
      <div className="w-full max-w-xl">
        <h1 className="text-3xl sm:text-5xl font-bold text-center mb-12 dark:text-white">
          Echo Design Website Cloner
        </h1>
        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
        {loading && <p className="mt-4 text-center">Cloning...</p>}
      </div>
    </div>
  );
}
