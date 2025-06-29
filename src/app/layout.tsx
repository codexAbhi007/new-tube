import type { Metadata } from "next";
import { Poppins } from "next/font/google"; // ✅ changed from Inter to Poppins
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { TRPCProvider } from "@/trpc/client";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "next-themes";
// ✅ Initialize Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Add the weights you plan to use
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider afterSignOutUrl="/">
      <html lang="en" className="dark" suppressHydrationWarning >
        <body className={`${poppins.className}`} >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem  >
            <TRPCProvider>
              <Toaster />
              {children}
            </TRPCProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
