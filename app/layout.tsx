import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Toaster } from "sonner";

const mulish = Mulish({
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: "Finance AI | ArcaWave",
  authors: [{ name: "ArcaWave", url: "https://arcawave.dev/" }],
  keywords: ["ArcaWave", "Finance AI", "App de finanças"],
  description: "App de gerenciamento pessoal de finanças",
  icons: {
    icon: "/ico/favicon.ico",
    apple: "/ico/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${mulish.className} dark flex h-full flex-col overflow-hidden antialiased`}
      >
        <ClerkProvider appearance={{ baseTheme: dark }}>
          {children}
        </ClerkProvider>
        <Toaster />
      </body>
    </html>
  );
}
