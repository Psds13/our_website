import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import GoldChatWidget from "@/app/components/GoldChatWidget";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <title>Ynnothivix</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Soluções de tecnologia sob medida para o seu negócio."
        />
        
        {/* Ícone principal */}
        <link rel="icon" href="/ynnothivix.jpg" type="image/jpeg" />
        
       
      </head>

      <body className="relative min-h-screen flex flex-col bg-white text-gray-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <GoldChatWidget />
      </body>
    </html>
  );
}
