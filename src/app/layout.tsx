import { url } from "@/__shared__/utils/url";
import { Inter } from "next/font/google";
import Link from "next/link";
import React from "react";
import "src/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ゆめみコーディングテスト(フロントエンド)",
  description: "ゆめみコーディングテスト(フロントエンド)です。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <div className="relative flex min-h-screen flex-col bg-gray-100">
          <div className={"flex h-20 items-center shadow-md"}>
            <Link href={url.TOP}>
              <h1 className={"pl-8 font-extrabold"}>
                ゆめみコーディングテスト(フロントエンド)
              </h1>
            </Link>
          </div>
          <main className="flex flex-row items-center justify-center">
            <div
              className={
                "max-w-screen-lg flex-1 items-center space-y-8 p-8 md:p-12"
              }
            >
              {children}
            </div>
          </main>
          <footer
            className={
              "flex h-20 items-center justify-center bg-black text-white"
            }
          >
            <Link href={"https://blog.ampersand.today/"}>
              <p className={"opacity-80"}>© 2023 ampersand</p>
            </Link>
          </footer>
        </div>
      </body>
    </html>
  );
}
