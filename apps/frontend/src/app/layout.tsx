import type { Metadata } from "next";
import "../styles/globals.css";
import { PreloadProvider } from "@/context/PreloadContext";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { SessionProvider } from "next-auth/react";

export const metadata: Metadata = {
  title: "Unchess",
  description: "chess with gambling",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <head>{/* You can add any additional head tags here */}</head>
      <body className="">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <SessionProvider>
            <div className="flex flex-row">
              <Sidebar />
              <PreloadProvider>{children}</PreloadProvider>
            </div>
            <Footer />
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
