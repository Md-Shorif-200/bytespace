import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "../globals.css";
import Navbar from "@/components/shared/navbar/Navbar";
import Footer from "@/components/shared/footer/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const satoshi = localFont({
  src: "../fonts/Satoshi-Variable.woff2",
  weight: "300 900",
  variable: "--font-satoshi-loaded",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bytespace New",
  description: "ByteSpace New is a platform for learning and growing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${satoshi.variable} antialiased`}>
        <main className="mx-auto w-full max-w-[1440px]">
          <div className="relative">
            <div className="absolute top-0 right-0 left-0 z-50">
              <Navbar />
            </div>
            {children}

            
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
