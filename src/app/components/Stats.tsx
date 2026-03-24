const stats = [
  {
    value: "-30",
    suffix: "%",
    desc: "сокращение срока доставки",
  },
  {
    value: "х2",
    suffix: "",
    desc: "меньше времени на оформление документов",
  },
  {
    value: "1",
    suffix: "час",
    desc: "среднее время отклика менеджера",
  },
  {
    value: "92",
    suffix: "%",
    desc: "клиентов получают точный расчет стоимости в течение рабочего дня",
  },
  {
    prefix: "менее",
    value: "1",
    suffix: "%",
    desc: "уровень задержек",
  },
];

export function Stats() {
  return (
    <section className="py-16 md:py-24 bg-[#f2f2f2]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            style={{ fontFamily: "'Open Sans', sans-serif" }}
            className="text-3xl md:text-5xl mb-4"
          >
            <span style={{ fontWeight: 800 }} className="text-[#1876a6]">НАША ЭФФЕКТИВНОСТЬ </span>
            <span style={{ fontWeight: 800 }} className="text-[#595b61]">В ЦИФРАХ</span>
          </h2>
          <p
            style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 400 }}
            className="text-[#595b61] text-lg md:text-2xl"
          >
            С нами логистика становится{" "}
            <strong style={{ fontWeight: 800 }}>быстрее, проще и точнее</strong>
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 mb-10">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col gap-4">
              {/* Number */}
              <div
                style={{ fontFamily: "'Open Sans', sans-serif" }}
                className="text-[#595b61] h-20 flex items-end"
              >
                {stat.prefix && (
                  <span style={{ fontWeight: 400 }} className="text-base mr-1">{stat.prefix}</span>
                )}
                <span style={{ fontWeight: 800 }} className="text-5xl md:text-6xl leading-none">{stat.value}</span>
                <span style={{ fontWeight: 300 }} className="text-5xl md:text-6xl leading-none">{stat.suffix}</span>
              </div>
              {/* Description with green line */}
              <div className="flex gap-3 items-start">
                <div className="w-[2px] bg-[#89C946] self-stretch flex-shrink-0 min-h-[40px]" />
                <p
                  style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 400 }}
                  className="text-[#595b61] text-sm leading-relaxed"
                >
                  {stat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Company tagline box */}
        <div className="flex justify-center">
          <div className="border border-[#1876a6] rounded-2xl px-6 py-4 max-w-sm text-center">
            <p
              style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 800 }}
              className="text-[#595b61] text-base"
            >
              Express Trans Service —{" "}
              <span className="text-[#1876a6]">когда важна не только скорость, но и стабильность</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
