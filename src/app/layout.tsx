import type { Metadata } from "next";
import "./globals.css"; // Ensure this matches your global CSS file path

export const metadata: Metadata = {
  title: "Our Wedding",
  description: "Join us in celebrating our special day!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}