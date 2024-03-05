'use client';
import { useState, useEffect } from 'react';
import NavItem from './nav-item';
import Button from './button';
import MobileNav from './mobile-nav';

export interface NavbarProps {}
const navItems = ['About', 'Services', 'Career', 'Gallery', 'Contacts'];

export default function Navbar({}: NavbarProps) {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex">
      <div className="hidden md:block">
        <ul className="flex gap-6">
          {navItems.map((item, i) => (
            <NavItem key={i} pathName={item.toLocaleLowerCase()}>
              {item}
            </NavItem>
          ))}
        </ul>
      </div>

      <div className="md:hidden">
        <Button onClick={() => setOpen(true)}>Menu</Button>
        {open && <MobileNav />}
      </div>
    </nav>
  );
}
