import type { Metadata } from "next";
import "../styles/globals.css";
import { ThemeProvider } from "@repo/components/theme-provider";
import { PreloadProvider } from "@/context/PreloadContext";

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
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <PreloadProvider>{children}</PreloadProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
