import { Toaster } from '@/components/ui/sonner';
import { autoBriefFont } from '@/styles/font';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Auto Brief',
  description: 'Auto Brief'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${autoBriefFont.className} antialiased bg-background text-foreground`}>
        <main className="min-h-screen">{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
