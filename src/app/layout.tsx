import type {Metadata} from "next";
import {Geist, Geist_Mono, Vazirmatn} from "next/font/google";
import "./globals.css";
import {Header} from "@/app/partials/header";
import {Footer} from "@/app/partials/footer";


const vazirMatn = Vazirmatn({
    variable: "--font-vazir",
});

export const metadata: Metadata = {
    title: "برسا هاب - برسا نوین رای",
    description: "پلتفرم جامع معرفی نرم افزارهای توسعه یافته توسط سیستم ساز برسا نوین رای",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fa" dir={'rtl'}>
        <body className={`${vazirMatn.className} antialiased outer-container bg-slate-100 min-h-svh`}>
        <Header/>
        <div className="min-h-svh">
            {children}
        </div>
        <Footer/>
        </body>
        </html>
    );
}
