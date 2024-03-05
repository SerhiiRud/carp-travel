import React from 'react';
import NavItem from './nav-item';
import Button from './button';

export interface MobileNavProps {}
const navItems = ['About', 'Services', 'Career', 'Gallery', 'Contacts'];

export default function MobileNav({}: MobileNavProps) {
  return (
    <nav className="flex">
      <div className="w-50 h-50">
        <ul>
          {navItems.map((item, i) => (
            <NavItem key={i} pathName={item.toLowerCase()}>
              {item}
            </NavItem>
          ))}
        </ul>
      </div>

      <div className="md:hidden">
        <Button>Close</Button>
      </div>
    </nav>
  );
}
