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
        <div className="flex justify-between z-10 shadow-sm text-center  items-center p-4  ">
          <div className="flex">
            <p className="text-slate-400 hover:decoration-8 hover:underline hover:underline-offset-8 hover:decoration-lime-400 text-sm ">
              <b>Jeet</b>Chaudhuri{" "}
            </p>{" "}
            {/* <VscVerifiedFilled className="text-lime-500 " /> */}
          </div>
          <Image
            className="block rounded-full"
            height="30"
            width="30"
            alt="Avatar"
            src="/images/header.jpg"
          />{" "}
        </div>
      </Link>
    </header>
  );

  const footer = (
    <div className="text-center p-4 text-slate-400 text-xs mt-8">
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

      <body className={` bg-neutral-900 ${font.className}`}>
        <div className="mx-auto max-w-2xl px-6">
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  );
}
