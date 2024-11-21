import localFont from "next/font/local";
import "./globals.css";
import Navbar from '/src/Components/Navbar/Navbar.jsx'
import Categories from "@/Components/Categories/Categories";
import Settings from "@/Components/Settings/Settings";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Dua & Ruqyah | All Duas Collection",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en " data-theme="light">
      <head>
        <link rel="icon" href="https://i.ibb.co/fYXX6jJ/logo-1.png" />
      </head>
      <body
        className={` bg-gray-300`}
      >
        <div className="flex space-x-6">
          <div className=""><Navbar></Navbar></div>
          <div><Categories/></div>
          <div>
            {children}
          </div>
          <div><Settings/></div>
        </div>
      </body>
    </html>
  );
}
