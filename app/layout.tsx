import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mental Healthcare - Your Wellness Journey',
  description: 'Access professional mental health services, resources, and support from the comfort of your home.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} animated-gradient`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen backdrop-blur-sm">
            <Navbar />
            <div className="page-transition">
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}