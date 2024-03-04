import React from 'react';
import Image from 'next/image';

export interface LogoProps {}

export default function Logo({}: LogoProps) {
  return (
    <a href="/">
      <Image src="/icons/logo.svg" alt="logo" width={66} height={31} />
    </a>
  );
}
