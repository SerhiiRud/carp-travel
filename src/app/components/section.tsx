import React from 'react';

export interface SectionProps {
  id: string;
  children: React.ReactNode;
}

export default function Section({ id, children }: SectionProps) {
  return (
    <section id={id} className={`${id} `}>
      <div className="sm:container mx-auto h-full px-5 py-14 md:py-16 xl:py-[104px] text-sm md:text-base md: leading-5 xl:text-lg xl:leading-6 text-white">
        {children}
      </div>
    </section>
  );
}
