import "./globals.css";
import XNavbar from "@/components/XNavbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={`antialiased font-mono`}>
        <XNavbar />
        {children}
      </body>
    </html>
  );
}
