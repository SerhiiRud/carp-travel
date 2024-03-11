import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './styles/globals.css';

export const metadata: Metadata = {
  title: 'Carp Travel - Trips to the Carpathians',
  description: 'ATVS traveling, rock climbing, rafting at the Carpathians',
  keywords:
    'Carpathians, ATVS traveling, rock climbing, rafting, hot air ballooning, skydiving',
};

const font = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
