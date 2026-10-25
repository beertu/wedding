import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/navbar";

export const metadata: Metadata = {
  title: "Our Wedding Celebration",
  description: "Join us in celebrating our special day!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-emerald-50 via-stone-50 to-amber-50/50 text-stone-800 flex flex-col font-sans selection:bg-emerald-200">
        <Navbar />
        <main className="flex-grow flex flex-col items-center justify-start w-full max-w-5xl mx-auto p-6 md:p-12">
          {children}
        </main>
        <footer className="w-full py-6 text-center text-xs text-stone-500 border-t border-emerald-100/60 bg-white/40">
          With love and excitement ❤️
        </footer>
      </body>
    </html>
  );
}