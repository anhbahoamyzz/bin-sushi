import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
});

export const metadata: Metadata = {
  title: "BIN SUSHI Ái Nghĩa | Nhà hàng Sushi & Sashimi chuẩn Nhật tại Đại Lộc, Quảng Nam",
  description:
    "BIN SUSHI - Quán sushi chuẩn Nhật tươi ngon mỗi ngày tại Ái Nghĩa. Sushi, Sashimi, Lẩu Nhật, Combo gia đình. Địa chỉ: 153 Huỳnh Thúc Kháng, TT Ái Nghĩa, Đại Lộc, Quảng Nam. Đặt bàn: 0707.797.797",
  keywords: [
    "bin sushi",
    "bin sushi ái nghĩa",
    "sushi ái nghĩa",
    "sashimi ái nghĩa",
    "nhà hàng nhật ái nghĩa",
    "sushi đại lộc",
    "quán sushi quảng nam",
    "đặt bàn sushi",
    "combo sushi",
    "lẩu nhật ái nghĩa",
  ],
  openGraph: {
    title: "BIN SUSHI Ái Nghĩa | Sushi & Sashimi chuẩn Nhật",
    description:
      "Quán sushi chuẩn Nhật – tươi ngon mỗi ngày tại Ái Nghĩa, Đại Lộc, Quảng Nam. Đặt bàn: 0707.797.797",
    type: "website",
    locale: "vi_VN",
    siteName: "BIN SUSHI",
    images: [
      {
        url: "/images/gallery/exterior.jpg",
        width: 1200,
        height: 630,
        alt: "BIN SUSHI - Nhà hàng Sushi tại Ái Nghĩa",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  other: {
    "geo.region": "VN-QNa",
    "geo.placename": "Ái Nghĩa, Đại Lộc, Quảng Nam",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${playfair.variable} ${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: "BIN SUSHI",
              image: "/images/gallery/exterior.jpg",
              address: {
                "@type": "PostalAddress",
                streetAddress: "153 Huỳnh Thúc Kháng",
                addressLocality: "TT Ái Nghĩa, H. Đại Lộc",
                addressRegion: "Quảng Nam",
                addressCountry: "VN",
              },
              telephone: "+84707797797",
              servesCuisine: "Japanese",
              priceRange: "$$",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "16:00",
                  closes: "22:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Saturday", "Sunday"],
                  opens: "10:00",
                  closes: "22:00",
                },
              ],
              url: "https://binsushi.vn",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "150",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
