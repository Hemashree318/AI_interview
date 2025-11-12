import type { Metadata } from "next";
import { Bitter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "@/components/header";

// ✅ Font setup
const bitter = Bitter({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

// ✅ Page metadata (only one definition)
export const metadata: Metadata = {
  title: "AI Interviewer",
  description: "AI-based Interview Preparation Assistant",
};

// ✅ Only one RootLayout function
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={bitter.className}>
      <body className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-blue-950 text-white">
        {/* Global Header */}
        <Header />

        {/* Main page content */}
        <main className="pt-20">{children}</main>

        {/* Global Toast notifications */}
        <ToastContainer position="top-center" autoClose={3000} />
      </body>
    </html>
  );
}
