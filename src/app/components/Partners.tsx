import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import imgRectangle3 from "figma:asset/08260f9d649b91d1099b23395dabd0cc71c947bb.png";
import imgRectangle4 from "figma:asset/7c89bab0ede26cf38dbeaddff367017afb5d8cf6.png";
import imgRectangle5 from "figma:asset/165ae63995116a13a6f217bb2dddf2f3c7f96776.png";
import imgRectangle6 from "figma:asset/0a0b168c1a7e18441410296cad553c8c0bb5f4f5.png";
import imgRectangle7 from "figma:asset/ab5b43dcfbca7ec17391f7c9cf7709cad5ebe56a.png";

const partners = [
  { img: imgRectangle3, alt: "Partner 1" },
  { img: imgRectangle4, alt: "Partner 2" },
  { img: imgRectangle5, alt: "Partner 3" },
  { img: imgRectangle6, alt: "Partner 4" },
  { img: imgRectangle7, alt: "Partner 5" },
];

export function Partners() {
  const [startIdx, setStartIdx] = useState(0);
  const visibleCount = 4;
  const totalSlides = Math.ceil(partners.length / visibleCount);

  const prev = () => setStartIdx((p) => Math.max(0, p - 1));
  const next = () => setStartIdx((p) => Math.min(partners.length - visibleCount, p + 1));

  const visible = partners.slice(startIdx, startIdx + visibleCount);
  const activeSlide = Math.round(startIdx / (visibleCount - 1) * (totalSlides - 1));

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2
          style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600 }}
          className="text-[#474d5b] text-2xl md:text-4xl tracking-tight text-center mb-12"
        >
          НАШИ ПАРТНЕРЫ
        </h2>

        <div className="relative flex items-center justify-between gap-2 md:gap-4">
          {/* Prev Button */}
          <button
            onClick={prev}
            disabled={startIdx === 0}
            className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#474d5b] flex items-center justify-center text-[#474d5b] hover:bg-[#474d5b] hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Partner logos */}
          <div className="flex items-center justify-around flex-1 min-w-0 gap-4 overflow-hidden">
            {visible.map((partner, idx) => (
              <div
                key={startIdx + idx}
                className="flex-1 min-w-0 flex items-center justify-center"
              >
                <img
                  src={partner.img}
                  alt={partner.alt}
                  className="h-12 md:h-20 max-w-full object-contain"
                />
              </div>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={next}
            disabled={startIdx >= partners.length - visibleCount}
            className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#474d5b] flex items-center justify-center text-[#474d5b] hover:bg-[#474d5b] hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition-colors ${
                i === activeSlide ? "bg-[#474d5b]" : "bg-[#474d5b]/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}