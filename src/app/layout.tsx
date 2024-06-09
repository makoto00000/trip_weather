import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";


import "./globals.css";

const noto = Noto_Sans_JP({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Trip Weather",
  description: "地域を選択すると、天気が分かるサービス",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={noto.className}>

          {children}

      </body>
    </html>
  );
}
