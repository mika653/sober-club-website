import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sober Club — Quezon City's Premier Mobile Bar",
  description:
    "It's never a party unless we're there. 20+ years of mixing memories. Mobile bar and mixologist services for weddings, debuts, corporate events, and more.",
  keywords:
    "mobile bar, Quezon City, cocktail bar hire, event bartender, Manila, Philippines",
  openGraph: {
    title: "Sober Club — Quezon City's Premier Mobile Bar",
    description: "It's never a party unless we're there.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=DM+Sans:wght@400;500;600;700&family=Cormorant+Garamond:wght@400;500;600;700&family=Jost:wght@300;400;500;600;700&family=Sora:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
