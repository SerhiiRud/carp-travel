import React from 'react';
import Logo from '../components/logo';
import Navbar from '../components/navbar';

export interface HeaderProps {}

export default function Header({}: HeaderProps) {
  return (
    <header className="absolute w-full z-10 flex items-center justify-between xs:px-5 md:px-8 xl:px-[101px] xs:py-9 md:py-[25px] xl:py-6">
      <Logo />
      <Navbar />
    </header>
  );
}
