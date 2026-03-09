import localFont from "next/font/local";
import "./globals.css";
import ClientLayout from "./layout/ClientLayout";
import ReduxProvider from "@/provider/ReduxProvider";


const style = localFont({
  src: "../font/Nunito-VariableFont_wght.ttf",
  variable: "--style-display",
});











const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Flonx App",
  description: "E-commerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="product">
      <body
        className={`${geistSans.variable} bg-white ${geistMono.variable} ${style.variable} antialiased`}
      >
        <ReduxProvider>
          <div className="font-style">
            <ClientLayout>{children}</ClientLayout>
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
