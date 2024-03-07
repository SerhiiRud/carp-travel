import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

export interface NavItemProps {
  pathName: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export default function NavItem({ pathName, children, onClick }: NavItemProps) {
  return (
    <li className="text-white hover:underline ">
      <ScrollLink
        to={pathName}
        href={pathName}
        onClick={onClick}
        spy={true}
        smooth={true}
        duration={1500}
      >
        {children}
      </ScrollLink>
    </li>
  );
}
