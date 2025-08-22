import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['400', '600', '700'] 
});

export const metadata: Metadata = {
  title: "Sely Ruli Amanda | Web Developer Portfolio",
  description: "Portfolio Sely Ruli Amanda, seorang mahasiswa Teknik Informatika yang bersemangat dalam pengembangan web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-secondary text-white`} suppressHydrationWarning={true}>
        <Navbar />
        <main className="container mx-auto px-12 py-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}