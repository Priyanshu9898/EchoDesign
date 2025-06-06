import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="w-full max-w-md p-8 rounded-lg">{children}</div>
    </div>
  );
}
