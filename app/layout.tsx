import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./componets/header";
import Footer from "./componets/footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Moonlight Landing",
  description: "Get to know and test things I have worked on",
};

icons: {
    icon: "/moon_icon_144203.ico"; 
  };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} font-sans antialiased bg-zinc-200`}
      >
        <div className="flex flex-col min-h-screen max-w-[1000px] mx-auto bg-white text-sm">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
