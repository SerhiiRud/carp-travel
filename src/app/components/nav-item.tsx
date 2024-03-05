import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

export interface NavItemProps {
  pathName: string;
  children: React.ReactNode;
}

export default function NavItem({ pathName, children }: NavItemProps) {
  return (
    <li className="text-sm text-white">
      <ScrollLink
        to={pathName}
        href={pathName}
        spy={true}
        smooth={true}
        duration={1500}
      >
        {children}
      </ScrollLink>
    </li>
  );
}
