import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'أبجد | منصة تعليمية للأطفال',
  description: 'منصة تعليمية تفاعلية للحروف الهجائية والأرقام للأطفال',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
