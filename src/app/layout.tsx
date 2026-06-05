import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Gezylle M. Lucban Christening Invitation',
  description: 'Join us for the Christening of Gezylle M. Lucban.',
  openGraph: {
    title: 'Gezylle M. Lucban Christening Invitation',
    description: 'Join us for the Christening of Gezylle M. Lucban.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}