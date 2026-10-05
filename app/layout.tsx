import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'منصة تعليمية للأطفال',
  description: 'تعلم الحروف والأرقام بطريقة ممتعة وتفاعلية',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
