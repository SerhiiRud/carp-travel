'use client';
import { useState } from 'react';
import NavItem from './nav-item';
import Button from './button';
import MobileNav from './mobile-nav';

export interface NavbarProps {}
const navItems = ['About', 'Services', 'Career', 'Gallery', 'Contacts'];

export default function Navbar({}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex">
      <div className="hidden md:block">
        <ul className="flex gap-6">
          {navItems.map((item, i) => (
            <NavItem key={i} pathName={item.toLocaleLowerCase()}>
              <div className="text-sm tracking-widest leading-tight">
                {item}
              </div>
            </NavItem>
          ))}
        </ul>
      </div>

      <div className="md:hidden">
        <Button onClick={() => setIsOpen(true)}>MENU</Button>
        {isOpen && <MobileNav onCloseModal={handleCloseModal} />}
      </div>
    </nav>
  );
}
