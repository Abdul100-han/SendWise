import type { Metadata } from "next";
import "../shared/styles/globals.css";
import Providers from "@/shared/utils/Providers";
import localFont from "next/font/local";
import { ClerkProvider } from '@clerk/nextjs'

const clashDisplay = localFont({
  src: "../assets/fonts/ClashDisplay-Variable.ttf",
  variable: "--font-clashDisplay",
  weight: "700",
});

export const metadata: Metadata = {
  title: "SendWise",
  description: "A SaaS Email Newsletter platform built with Next.js 14, TypeScript, AWS SES, AstraDB, and Stripe. This platform enables users to create, manage, and send newsletters efficiently while integrating subscription-based payments and seamless email delivery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={`${clashDisplay.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
    </ClerkProvider>
  );
}