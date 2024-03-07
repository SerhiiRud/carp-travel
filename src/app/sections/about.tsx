import React from 'react';
import Section from '../components/section';

export interface AboutProps {}

export default function About({}: AboutProps) {
  return (
    <Section id="about">
      <div className="container mx-auto mt-14 z-10 flex h-full flex-col justify-between md:grid md:grid-cols-[auto,250px] md:grid-rows-2 md:gap-x-[24px] xl:grid-cols-[auto,370px] text-white ">
        ABOUT
      </div>
    </Section>
  );
}
