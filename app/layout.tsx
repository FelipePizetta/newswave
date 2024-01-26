import type { Metadata } from "next";
import { Open_Sans, Poppins } from "next/font/google";
import favicon from "./favicon.ico"
import "./globals.css";

const open_sans = Open_Sans({ 
  subsets: ["latin"],
  variable: '--font-openSans',
  display: "swap"
});
const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: "400",
  variable: '--font-poppins',
  display: "swap"
});

export const metadata: Metadata = {
  title: "Navegando com Profundidade pelas Marés Informativas | NewsWave",
  description: "Navegue por artigos aprofundados, atualizações em tempo real e recursos exclusivos que o manterão informado e inspirado.",
  icons: [{ rel: 'icon', url: favicon.src }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${open_sans.variable} ${poppins.variable}`}>{children}</body>
    </html>
  );
}
