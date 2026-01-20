import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DDS Component Test - Next.js",
  description: "Testing DDS Web components in Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
