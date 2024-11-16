import "./globals.css";
import XNavbar from "@/components/XNavbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={`antialiased`}>
        <XNavbar />
        {children}
      </body>
    </html>
  );
}
