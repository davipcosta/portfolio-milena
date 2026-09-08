import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.psi-milena.com.br"),
  title: {
    default: "Milena Nobre | Psicóloga Clínica em Belém e Online",
    template: "%s | Milena Nobre",
  },
  description:
    "Atendimento psicológico individual para jovens adultos, adultos e idosos. Presencial em Belém (PA) e online para todo o mundo. CRP 10/10986.",
  keywords: [
    "Milena Nobre",
    "Psicóloga Belém",
    "Psicologia Belém PA",
    "Psicóloga Clínica",
    "Psicoterapia Online",
    "Abordagem Centrada na Pessoa",
    "ACP",
    "Sexologia",
    "Terapia Belém",
    "Saúde Mental",
    "CRP 10/10986",
  ],
  authors: [{ name: "Milena Nobre", url: "https://www.psi-milena.com.br" }],
  creator: "Milena Nobre",
  publisher: "Milena Nobre",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.psi-milena.com.br",
    siteName: "Milena Nobre | Psicologia Clínica",
    title: "Milena Nobre | Psicóloga Clínica em Belém e Online",
    description:
      "Atendimento psicológico individual para jovens adultos, adultos e idosos. Presencial em Belém (PA) e online para todo o mundo. CRP 10/10986.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Milena Nobre - Psicóloga Clínica (CRP 10/10986)",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Milena Nobre | Psicóloga Clínica em Belém e Online",
    description:
      "Atendimento psicológico individual para jovens adultos, adultos e idosos. Presencial em Belém (PA) e online. CRP 10/10986.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}