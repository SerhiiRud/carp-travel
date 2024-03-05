import React from 'react';
import Logo from '../components/logo';
import Navbar from '../components/navbar';

export interface HeaderProps {}

export default function Header({}: HeaderProps) {
  return (
    <header className="absolute w-full z-10 flex items-center justify-between px-5 py-9 ">
      <Logo />
      <Navbar />
    </header>
  );
}
