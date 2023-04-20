import Link from "next/link";
import "./globals.css";
import Image from "next/image";
import { VscVerifiedFilled } from "react-icons/vsc";
import { Inter } from "next/font/google";
const font = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header>
      <Link href="/">
        <div className="flex flex-row z-10 shadow-sm text-center gap-1 items-center p-4 border-b border-emerald-600 ">
          <Image
            className="hidden md:block rounded-full"
            height="30"
            width="30"
            alt="Avatar"
            src="/images/header.jpg"
          />{" "}
          <p className="text-slate-400  hover:text-slate-300 text-sm ">
            <b>@Jeet</b>Chaudhuri{" "}
          </p>{" "}
          <VscVerifiedFilled className="text-emerald-500 " />
        </div>
      </Link>
    </header>
  );

  const footer = (
    <div className="border-t border-emerald-600 text-center p-4 text-slate-400 text-sm mt-8">
      <p>
        🧑‍💻 Built by Jeet. Source Code on{" "}
        <a
          href="https://github.com/jeetch/my-blog"
          className="font-medium underline underline-offset-4"
        >
          GitHub
        </a>
      </p>
    </div>
  );

  return (
    <html lang="en">
      <head />

      <body className={` bg-slate-800 ${font.className}`}>
        <div className="mx-auto max-w-2xl px-6">
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  );
}
