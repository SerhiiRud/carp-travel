import React from 'react';
import Button from '@/app/components/button';

export interface HeroProps {}

export default function Hero({}: HeroProps) {
  return (
    <section id="hero" className="hero pt-28 h-96">
      <p>7 DAYS JOURNEY</p>
      <h1 className="text-white text-5xl">UNCOVER CARPATHIAN&#39;S SECRETS</h1>
      <p>
        Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake / Bukovel
      </p>
      <p>
        We offer you unforgettable trips to the most beautiful parts of the
        Carpathians. Enjoy stunning views, exciting expeditions, and the best
        service!
      </p>
      <Button>JOIN NOW</Button>
    </section>
  );
}
