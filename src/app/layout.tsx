import type { Metadata } from "next";
import { Inter, Modak } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const modakDisplay = Modak({
  weight: ["400"],
  variable: "--font-modak",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FACET",
  description:
    "Shop premium rings or design your own with custom styles, metals, and finishes. Built for everyday wear and personal expression.",
};

// export const viewport: Viewport = {
//   themeColor: {
//     color: "#11BF5D",
//   },
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${modakDisplay.variable} text-base antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
