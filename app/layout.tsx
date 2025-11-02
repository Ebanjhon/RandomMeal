import type { Metadata } from "next";
import Splash from "../components/Splash";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hôm nay ăn gì?",
  description: "Ứng dụng gợi ý món ăn ngẫu nhiên cho bạn mỗi ngày.",
  manifest: "/manifest.json",
  themeColor: "#ffffff",
  icons: {
    apple: "/assets/icons/apple_icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <head>
        {/* Cấu hình iOS PWA */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="Ăn gì?" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/icons/apple_icon.png"
        />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=no, viewport-fit=cover"
        />

        {/* ================== Ảnh Splash iOS (đường dẫn đúng) */}
        {/* <link
          rel="apple-touch-startup-image"
          href="/splash/launch-828x1792.png"
          media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/splash/launch-1170x2532.png"
          media="(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/splash/launch-1284x2778.png"
          media="(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3)"
        /> */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
         cz-shortcut-listen="true"
      >
        <Splash>{children}</Splash>
      </body>
    </html>
  );
}
