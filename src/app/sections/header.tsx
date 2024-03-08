import React from 'react';
import Logo from '@/app/components/logo';
import Navbar from '@/app/components/navbar';

export interface HeaderProps {}

export default function Header({}: HeaderProps) {
  return (
    <header className="absolute w-full z-10">
      <div className="px-5 py-9 md:py-6 sm:container mx-auto flex items-center justify-between ">
        <Logo />
        <Navbar />
      </div>
    </header>
  );
}
