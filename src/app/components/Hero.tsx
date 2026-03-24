import { useState } from "react";
import { ChevronRight } from "lucide-react";
import imgRectangle9 from "figma:asset/65f08d765c02ca1935bd2e1bf413fc9b8b13ea42.png";

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section className="relative h-[560px] md:h-[700px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={imgRectangle9}
          alt="Containers"
          className="w-full h-full object-cover"
        />
        {/* Dark gradient overlay on left side */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#25354e]/90 via-[#25354e]/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full pt-20">
          <div className="max-w-xl">
            <h1
              style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 800, lineHeight: 1.15 }}
              className="text-white text-3xl md:text-5xl mb-4"
            >
              Широкий спектр<br />
              логистических услуг
            </h1>
            <div
              style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 400 }}
              className="text-white/80 text-sm md:text-base mb-6 leading-relaxed"
            >
              <p>Территория деятельности компании:</p>
              <p>Казахстан, Центральная Азия, Китай, страны</p>
              <p>Балтии и Таможенного союза.</p>
            </div>

            <a
              href="#calculator"
              style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 400 }}
              className="inline-block border-2 border-white text-white px-8 py-3 text-sm tracking-widest hover:bg-white hover:text-[#25354e] transition-colors"
            >
              РАСЧЕТ ПЕРЕВОЗКИ
            </a>
          </div>
        </div>
      </div>

      {/* Right arrow */}
      <button className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white hover:text-[#25354e] transition-colors">
        <ChevronRight size={20} />
      </button>

      {/* Carousel Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {[0, 1, 2].map((i) => (
          <button
            key={i}
            onClick={() => setActiveSlide(i)}
            className={`w-3 h-3 rounded-full transition-colors ${
              activeSlide === i ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
