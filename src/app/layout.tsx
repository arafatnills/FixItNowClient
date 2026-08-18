import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";


import { Toaster } from "@/components/ui/sonner";
import GlowTheme from "@/components/shared/GlobalTheme";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/shared/Footer";
import ThemeColorSync from "@/components/shared/ThemeColorSync";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL("https://fixitnowclient.vercel.app"),
  title: {
    default: "FixItNow — Expert Home Services, Just a Click Away",
    template: "%s | FixItNow",
  },
  description:
    "From leaky pipes to full home cleaning, find trusted, vetted professionals in your area instantly.",
  openGraph: {
    title: "FixItNow — Expert Home Services, Just a Click Away",
    description:
      "From leaky pipes to full home cleaning, find trusted, vetted professionals in your area instantly.",
    url: "https://fixitnowclient.vercel.app",
    siteName: "FixItNow",
    images: [
      {
        url: "/opengraph-image.png", 
        width: 1200,
        height: 630,
        alt: "FixItNow",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FixItNow — Expert Home Services, Just a Click Away",
    description:
      "From leaky pipes to full home cleaning, find trusted, vetted professionals in your area instantly.",
    images: ["/opengraph-image.png"],
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default async function RootLayout({ children }: LayoutProps<"/">) {


  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        inter.variable,
      )}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ThemeColorSync/>
          <GlowTheme />
          <Toaster position="top-center" richColors />

          {children}

          
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
