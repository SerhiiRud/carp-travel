import React from 'react';

export interface HeroTagProps {}

export default function HeroTag({}: HeroTagProps) {
  return (
    <div className="mb-6 md:col-start-2 row-start-1 ml-auto md:ml-auto -mr-[8px] md:-mr-[24px]">
      <p className="flex -mb-1.5  text-3xl md:text-[67px] md:leading-[81px] xl:-mb-2.5 xl:text-[98px] xl:leading-[119px] ">
        <span className="font-medium xl:mr-2">7</span>
        <span className="font-thin tracking-wider md:tracking-[0.13em] xl:tracking-0">
          DAYS
        </span>
      </p>
      <p className="tracking-[0.79em] md:tracking-[26px] xl:tracking-[41px] xl:ml-0 text-xs md:text-sm font-light leading-[14.5px] md:leading-[16.9px] xl:leading-[19.4px] xl:text-[16px] ">
        JOURNEY
      </p>
    </div>
  );
}
