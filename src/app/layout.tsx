import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import "@mantine/core/styles.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";

import Header from "@/components/Header/Header";

// Use with nextauth
import { Providers } from "./(auth)/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Client Track",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        <Providers>
          <MantineProvider>
            <Header />
            {children}
          </MantineProvider>
        </Providers>
      </body>
    </html>
  );
}
