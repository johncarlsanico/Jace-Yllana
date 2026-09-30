import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Jace Yllana M. Sanico Christening Invitation',
  description: 'Join us for the Christening of Jace Yllana M. Sanico.',
  openGraph: {
    title: 'Jace Yllana M. Sanico Christening Invitation',
    description: 'Join us for the Christening of Jace Yllana M. Sanico.',
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