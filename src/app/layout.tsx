import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import "lenis/dist/lenis.css";
import { SmoothScroll } from "@/components/smooth-scroll";
import { Reveal } from "@/components/reveal";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mais Beleza | Bem estar e Estética que vai até você",
  description:
    "Quick massage, spa day e experiências de bem‑estar levados até você: em casa, empresas, eventos e momentos especiais. Terapeutas certificadas e estrutura completa.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${inter.variable}`}
    >
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: "try{document.documentElement.classList.add('js')}catch(e){}",
          }}
        />
        {children}
        <SmoothScroll />
        <Reveal />
      </body>
    </html>
  );
}
