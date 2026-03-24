import { MapPin, FileText, Calendar } from "lucide-react";

const services = [
  {
    icon: MapPin,
    title: "Онлайн-отслеживание\nв режиме 24/7",
    boldDesc: "Мы обеспечиваем полную прозрачность на каждом этапе перевозки.",
    desc: "Вы можете отслеживать местоположение груза в реальном времени 24/7 через наш онлайн-сервис, что исключает неопределенность и позволяет быстро реагировать на изменения.",
  },
  {
    icon: FileText,
    title: "Автоматизированный\nдокументооборот",
    boldDesc: "Мы создали собственную ERP-систему для автоматизации документооборота и операций.",
    desc: "Это снижает влияние человеческого фактора, ускоряет процессы и минимизирует ошибки. Наши IT-решения позволяют обрабатывать заявки и маршруты быстрее, чем у конкурентов.",
  },
  {
    icon: Calendar,
    title: "Контроль сохранности и\nсроков",
    boldDesc: "Мы не просто перевозим, но и отвечаем за сохранность каждого груза.",
    desc: "Логистическая цепочка организована так, чтобы избежать повреждений и задержек. Наши логисты следят за процессом и быстро реагируют на отклонения.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-[#f7f8fa]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div key={idx} className="flex flex-col gap-5">
                {/* Icon */}
                <div className="w-16 h-16 flex items-center justify-center">
                  <Icon size={52} className="text-[#1876A6]" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3
                  style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 800, whiteSpace: "pre-line" }}
                  className="text-black text-xl md:text-2xl leading-snug"
                >
                  {service.title}
                </h3>

                {/* Description */}
                <div>
                  <p
                    style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 800 }}
                    className="text-black text-sm md:text-base mb-2 leading-relaxed"
                  >
                    {service.boldDesc}
                  </p>
                  <p
                    style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 300 }}
                    className="text-black text-sm md:text-base leading-relaxed"
                  >
                    {service.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
