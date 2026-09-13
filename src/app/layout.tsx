import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alvin Cheuk Profoilo｜Full-Stack & Mobile App Developer",
  description:
    "專注於 Next.js、React Native、TypeScript 與 AI 系統整合。從 UI/UX 原型、前後端開發到雲端部署與 App Store 上架的全流程實戰作品集。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-Hant">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Noto+Sans+TC:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  );
}
