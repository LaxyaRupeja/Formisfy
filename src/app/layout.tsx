import type { Metadata } from "next";
import { REM } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Navbar } from "@/components/Navbar";

const inter = REM({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FormsOnWater",
  description: "FormsOnWater is a form builder for the modern web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Navbar />
          <div className="">{children}</div>
        </body>
      </html>
    </ClerkProvider>
  );
}
