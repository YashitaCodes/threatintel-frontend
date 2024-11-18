import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import { ThemeProvider } from "@/components/ThemeProvider"
import { Metadata } from 'next';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Threat Intel: AI-Powered News Aggregator for Threat Intelligence",
  description: "Threat Intel is an AI-powered news aggregator for threat intelligence. It uses advanced algorithms to analyze news articles and extract relevant information for threat intelligence.",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={true}
        >
          <div className="flex flex-col min-h-screen bg-background text-foreground">
            {/* <Header /> */}
            <main className="flex-1 overflow-hidden">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}