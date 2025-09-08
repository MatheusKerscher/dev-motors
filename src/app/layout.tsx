import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.scss";
import Header from "@/components/header";
import Footer from "@/components/footer";

const SoraSans = Sora({
  variable: "--font-sora-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dev Motors",
  description: "Site do Dev Motors, a melhor oficina do país",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${SoraSans.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
