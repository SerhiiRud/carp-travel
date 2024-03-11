import React from 'react';
import Image from 'next/image';

export type ServicesCardProps = {
  id: string;
  count: string;
  title: string;
  description: string;
  slogan: string;
  image: string;
  children: React.ReactNode;
};

export default function ServicesCard({
  id,
  count,
  title,
  description,
  slogan,
  image,
  children,
}: ServicesCardProps) {
  return (
    <>
      <div className="bg-transparent">
        <div className="relative z-10 md:grid md:grid-cols-[463px,auto] md:gap-x-5 xl:grid-cols-[50%,1fr,1fr] ">
          <div className="relative mb-[12px] h-[213px] w-auto  object-cover md:row-span-3 md:mb-0 md:h-[370px] md:w-full xl:row-span-2 xl:h-[429px]">
            <Image
              src={`/images${image}`}
              alt={title}
              width={280}
              height={213}
            />
          </div>
          <p className="mb-6 text-right text-[12px] font-extralight leading-6 tracking-[0.20em] md:col-start-2 md:row-start-2 md:mb-[34px] md:text-left xl:col-start-3 xl:row-start-1">
            {slogan}
          </p>
          {children}
          <p className="text-left self-end text-sm font-extralight leading-5 md:col-start-2 md:row-start-3 md:text-justify md:text-[13px] xl:col-start-3 xl:row-start-2 xl:text-[18px] xl:leading-[24px] ">
            {description}
          </p>
        </div>
      </div>
    </>
  );
}
