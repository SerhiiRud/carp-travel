'use client';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import '../styles/swiper.css';
import Section from '../components/section';
import servicesList from '../utils/services-list.json';
import ServicesCard from '../components/services-card';

export interface ServicesProps {}

export default function Services({}: ServicesProps) {
  const [swiper, setSwiper] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const onSliderClick = (id: number) => {
    if (swiper) {
      setActiveIndex(id);
      swiper.slideTo(id);
    }
  };

  const slideNumber = activeIndex + 1;
  const count = servicesList.length.toString();

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(2, 15, 8, 0.5), rgba(2, 15, 8, 0.5)), linear-gradient(to bottom, rgba(0, 24, 38, 1), rgba(0, 37, 49, 0)), url('/images/services-bg-${activeIndex + 1}.jpg')`,
      }}
    >
      <Section id="services">
        <div className="relative text-sm   md:text-base  md:leading-5  xl:text-lg xl:leading-6 ">
          <div className="mb-6 md:flex items-center gap-[162px]">
            <h2 className="self-start text-4xl font-thin md:col-start-1 md:row-start-1 md:text-[67px] md:leading-[81px] xl:text-[98px] xl:tracking-tight xl:leading-none">
              WE <span className="font-medium">OFFER</span>
            </h2>
            <div className="mb-4 text-right text-[43px] font-thin leading-[52px] md:row-start-1 md:mb-0 md:text-[67px] md:leading-[68px] xl:flex-1 xl:text-left xl:text-[98px] xl:leading-[119px] ">
              <span>
                {slideNumber < 10
                  ? 0 + slideNumber.toString()
                  : slideNumber.toString()}
              </span>
              /
              <span className="opacity-20">
                {Number(count) < 10 ? 0 + count : count}
              </span>
            </div>
          </div>
          <Swiper
            effect={'fade'}
            modules={[EffectFade, Pagination]}
            onSwiper={(s) => setSwiper(s)}
          >
            {servicesList.map((item) => (
              <SwiperSlide key={item.id}>
                <ServicesCard
                  id={item.id}
                  count={count}
                  title={item.title}
                  description={item.description}
                  slogan={item.slogan}
                  image={item.image}
                >
                  <ul className="text-left mb-[34px] md:col-start-2 md:row-start-1 md:mb-[25px]">
                    {servicesList.map((item) => (
                      <li key={item.id} className="mb-4 last:mb-0">
                        <button
                          onClick={() => onSliderClick(Number(item.id) - 1)}
                          className={`${Number(item.id) === activeIndex + 1 ? 'active-menu font-medium' : 'font-extralight opacity-50'} text-left text-xl uppercase leading-[17px] md:text-[22px] md:leading-[18px] xl:text-[28px] xl:leading-[24px]`}
                        >
                          {item.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                </ServicesCard>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Section>
    </div>
  );
}
