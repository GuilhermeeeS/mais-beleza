import type { Metadata } from "next";
import { Castoro, Inter, Parisienne } from "next/font/google";
import { SmoothScroll } from "@/components/smooth-scroll";
import "./globals.css";

const serif = Castoro({
  variable: "--font-castoro",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const sans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const script = Parisienne({
  variable: "--font-parisienne",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mais Beleza · Bem estar e Estética",
  description:
    "Quick massage, spa day e experiências de beleza por demanda. Levamos bem-estar com propósito até você, sua empresa ou seu evento.",
  openGraph: {
    title: "Mais Beleza · Bem estar e Estética",
    description:
      "Bem-estar que vai até você. Quick massage, spa day e experiências de beleza para pessoas, empresas e eventos.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${serif.variable} ${sans.variable} ${script.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
