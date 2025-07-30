import type { Metadata } from 'next';
import './globals.css';
import { AppRouterListener } from '@/components/layout/app-router-listener';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Grams to Gains',
  description: 'B2B Cannabis Marketplace',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Lexend:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <AppRouterListener>{children}</AppRouterListener>
        <Toaster />
      </body>
    </html>
  );
}
