import imgRectangle1 from "figma:asset/fbd0fb976b4884d64ad228923681d0fe50d20051.png";

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Left: Image */}
          <div className="w-full md:w-1/2 flex-shrink-0">
            <img
              src={imgRectangle1}
              alt="Express Trans Service Containers"
              className="w-full h-[320px] md:h-[420px] object-cover rounded-sm shadow-lg"
            />
          </div>

          {/* Right: Text */}
          <div className="w-full md:w-1/2">
            <h2
              style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600 }}
              className="text-[#474d5b] text-2xl md:text-4xl tracking-tight mb-6"
            >
              О КОМПАНИИ
            </h2>
            <div
              style={{ fontFamily: "'Open Sans', sans-serif" }}
              className="text-[#3c3c3b] text-base md:text-lg leading-relaxed"
            >
              <p className="mb-3">
                <strong>«Express Trans Service»</strong> - высокоэффективная,
                динамически развивающаяся казахстанская
                транспортно-логистическая компания,
                являющаяся ведущим оператором на рынке
                контейнерных перевозок.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
