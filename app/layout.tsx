"use client";
import { Poppins } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <html lang="en">
      <body className={`${poppins.style} antialiased`}>
        <QueryClientProvider client={queryClient}>
          <main className="flex flex-col min-h-screen">
            <Navbar />
            <div>{children}</div>
          </main>
        </QueryClientProvider>
      </body>
    </html>
  );
}
