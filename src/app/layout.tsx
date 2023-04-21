import Link from "next/link";
import "./globals.css";
import Image from "next/image";
import { VscGithub, VscTwitter, VscVerifiedFilled } from "react-icons/vsc";
import { Inter } from "next/font/google";
import Background from "../../components/Background";
const font = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header>
      <div className="flex justify-between z-10 shadow-sm text-center  items-center p-4  ">
        <div className="flex">
          <Link href="/">
            <p className="text-slate-400 hover:decoration-8 hover:underline hover:underline-offset-8 hover:decoration-lime-400 text-sm ">
              <b>Jeet</b>Chaudhuri{" "}
            </p>{" "}
          </Link>
          {/* <VscVerifiedFilled className="text-lime-500 " /> */}
        </div>
        <div className="flex items-center gap-4">
          <Link href="https://twitter.com/jeetchaudhuri">
            <VscTwitter className="h-[20px] w-[20px] text-slate-600 hover:text-lime-400" />
          </Link>
          <Link href="https://github.com/jeetch">
            <VscGithub className="h-[20px] w-[20px] text-slate-600 hover:text-lime-400" />
          </Link>
          {/* <Link href="/">
            <Image
              className="block rounded-full hover:border-4 hover:border-lime-400 transition"
              height="30"
              width="30"
              alt="Avatar"
              src="/images/header.jpg"
            />
          </Link> */}
        </div>
      </div>
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
        <div className="z-10  mx-auto max-w-3xl px-6">
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  );
}
