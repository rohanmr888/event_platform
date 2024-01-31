import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'

const poppins = Poppins({ subsets: ["latin"],
  weight:['400','500','600','700'],
  variable:'--font-poppins',
  })

export const metadata: Metadata = {
  title: "Campus Fiesta",
  description: "Campus Fiesta is perfect platform for event management ",
  icons: {
    icon: "/assets/images/logo-grey.svg"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={poppins.variable}>{children}</body>
    </html>
    </ClerkProvider>
  );
}