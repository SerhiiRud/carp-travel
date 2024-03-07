import React from 'react';
import Logo from '@/app/components/logo';
import Navbar from '@/app/components/navbar';

export interface HeaderProps {}

export default function Header({}: HeaderProps) {
  return (
    <header className="absolute w-full z-10">
      <div className="sm:container mx-auto flex items-center justify-between xs:px-5 xl:px-[101px] xs:py-9 md:py-[25px] xl:py-6">
        <Logo />
        <Navbar />
      </div>
    </header>
  );
}
