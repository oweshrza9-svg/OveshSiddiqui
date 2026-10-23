import type { Metadata, Viewport } from "next";
import "./globals.css";
import "lenis/dist/lenis.css";
import PageIntro from "@/components/motion/page-intro";
import SmoothScrollProvider from "@/components/motion/smooth-scroll-provider";

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
      <body>
        <SmoothScrollProvider>
          <PageIntro />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
