import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Merry Christmas — Timothy & My Love",
  description:
    "A little Christmas page from Timothy — memories, moments, and a love letter (with a little 中文 too).",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
