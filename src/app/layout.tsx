import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sober Club — Quezon City's Premier Mobile Bar",
  description:
    "It's never a party unless we're there. 20+ years of mixing memories. Mobile bar and mixologist services for weddings, debuts, corporate events, and more.",
  keywords: "mobile bar, Quezon City, cocktail bar hire, event bartender, Manila, Philippines",
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
      <body className="antialiased">{children}</body>
    </html>
  );
}
