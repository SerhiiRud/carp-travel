import React from 'react';

export interface SectionProps {
  id: string;
  children: React.ReactNode;
}

export default function Section({ id, children }: SectionProps) {
  return (
    <section id={id} className={`${id} `}>
      <div className="px-5 py-14 md:py-16 xl:py-[104px] sm:container mx-auto h-full">
        {children}
      </div>
    </section>
  );
}
