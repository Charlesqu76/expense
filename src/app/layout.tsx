import Header from "@/components/Header";
import { Viewport } from "next";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <AntdRegistry>
          <div className="px-2 pb-4">{children}</div>
        </AntdRegistry>
      </body>
    </html>
  );
}
