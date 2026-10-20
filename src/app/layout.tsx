import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";
import { profile } from "@/lib/content";
import { THEME_INIT_SCRIPT } from "@/lib/theme";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${profile.name} — ${profile.headline}`,
    template: `%s — ${profile.name}`,
  },
  description: profile.summary,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    // `suppressHydrationWarning`: the init script below sets `data-theme`
    // before React hydrates, so the server's markup will not match.
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
