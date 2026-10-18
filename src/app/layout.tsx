import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "devOvi — Frontend developer",
  description:
    "A frontend developer building thoughtful digital experiences and growing into full-stack development. Selected work by devOvi.",
  applicationName: "devOvi",
  openGraph: {
    title: "devOvi — Frontend developer",
    description: "Thoughtful interfaces. Practical ideas. Carefully built for the web.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#080808",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
