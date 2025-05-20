import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: ["400", "500", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CAFnow",
  creator: "Ti0Elvis",
  description: "Gestisci il tuo CAF facilmente con CAFnow",
  authors: [{ name: "Ti0Elvis", url: "https://github.com/Ti0Elvis" }],
};

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Readonly<Props>) {
  return (
    <html lang="it" suppressHydrationWarning>
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
