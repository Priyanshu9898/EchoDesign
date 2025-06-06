import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-[calc(100vh-15rem)] flex items-center justify-center ">
     {children}
    </div>
  );
}
