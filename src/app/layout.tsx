import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header>
      <div className="text-center bg-slate-800  p-8 my-6 rounded-md ">
        <Link href="/">
          <h2 className="text-3xl text-white font-bold">Hi, I'm Jeet 👋 </h2>
        </Link>
        <p className="text-slate-400 text-sm pt-2 mx-16">
          I try to build cool stuff focused on the intersection between
          engineering and design
        </p>
      </div>
    </header>
  );

  const footer = (
    <footer className="border-t text-sm border-slate-400 mt-6 py-6 text-center text-slate-400">
      <p>💻 Built by Jeet</p>
    </footer>
  );

  return (
    <html lang="en">
      <head />

      <body className="">
        <div className="mx-auto max-w-2xl px-6">
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  );
}
