import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "./globals.css";

export const metadata = {
  title: "Fylo",
  description:
    "Frontend Mentor | Fylo landing page with dark theme and features grid",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#1b2330]">
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
