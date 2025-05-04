import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "HTML Template Generator",
  description: "Buat dan sesuaikan template HTML secara cepat dan responsif.",
  keywords: [
    "generator template HTML",
    "pembuat layout website",
    "template HTML responsif",
    "pembuat kode HTML",
    "desain template web"
  ],
  authors: [
    { name: "PT Imersa" },
    { name: "Ryan Bagus Bimantoro" },
    { name: "Rizki Baehtiar Afandi" },
    { name: "Titis Fajar Nurdiansyah" },    
  ],
  creator: "Mahasiswa Magang Universitas Pembangunan Nasional (UPN) 'Veteran' Jawa Timur di PT Imersa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={inter.variable}>
      <body className="antialiased font-sans bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
