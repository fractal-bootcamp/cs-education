import Navbar from "@/components/Navbar";
import "./globals.css";
import { navigationItems } from "@/lib/navigationItems";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={`antialiased`}>
        <Navbar items={navigationItems} />
        {children}
      </body>
    </html>
  );
}
