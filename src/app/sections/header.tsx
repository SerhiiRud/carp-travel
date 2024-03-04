import React from 'react';
import Logo from '../components/logo';

export interface HeaderProps {}

export default function Header({}: HeaderProps) {
  return (
    <header className="bg-gray-500">
      <Logo />
      <div>Header</div>
    </header>
  );
}
