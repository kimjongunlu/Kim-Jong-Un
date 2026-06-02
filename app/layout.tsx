import type { Metadata } from "next";
import "./globals.css";

/**
 * Metadata configuration
 * Defines the title, description, and other SEO metadata for the application
 */
export const metadata: Metadata = {
  title: "Hello World - Next.js",
  description:
    "A simple Hello World website built with Next.js 14, App Router, and pure CSS",
  viewport: "width=device-width, initial-scale=1",
  charset: "utf-8",
};

/**
 * RootLayout Component
 *
 * This is the root layout component for the entire application.
 * In Next.js App Router, this wraps all pages and provides:
 * - HTML structure and metadata
 * - Global CSS imports
 * - Shared layout components
 *
 * @param children - The page content that will be rendered inside this layout
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body>
        {/* Main content rendered here */}
        {children}
      </body>
    </html>
  );
}
