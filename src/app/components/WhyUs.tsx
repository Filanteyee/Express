import imgRectangle11 from "figma:asset/ac7429122706bed3aecc3b0f67391bb3a0ec2f9f.png";
import { Train, DollarSign, Shield, Star, TrendingUp, Users } from "lucide-react";

const features = [
  {
    icon: Train,
    title: "Железнодорожные перевозки",
    description:
      "Вы можете быть уверены, что груз будет доставлен вовремя и в целостности. Опыт работы наших сотрудников более 10 лет в сфере логистических услуг.",
  },
  {
    icon: DollarSign,
    title: "Ценообразование",
    description:
      "Вы всегда можете быть уверены, что груз будет доставлен вовремя. Наша компания всегда ответственно подходит к выполнению поставленной задачи.",
  },
  {
    icon: Shield,
    title: "Сопровождение грузов",
    description:
      "Наша компания всегда ответственно подходит к выполнению поставленной задачи и при согласовании условий отражает их всех в соответствующем договоре.",
  },
  {
    icon: Star,
    title: "Качество",
    description:
      "Стандарты в работе, а также профессиональный опыт сотрудников позволяют гарантировать качество в нашей работе.",
  },
  {
    icon: TrendingUp,
    title: "Ценообразование",
    description:
      "Мы всегда ориентируемся на потребности наших клиентов и готовы найти оптимальное логистическое решение в соответствии с Вашими запросами.",
  },
  {
    icon: Users,
    title: "Сопровождение грузов",
    description:
      "Надежное и длительное сотрудничество с крупными компаниями позволяют нам постоянно совершенствовать свою работу.",
  },
];

export function WhyUs() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={imgRectangle11}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1a2a3e]/88" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600 }}
            className="text-white text-3xl md:text-5xl tracking-tight mb-4"
          >
            ПОЧЕМУ МЫ?
          </h2>
          <p
            style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 800 }}
            className="text-white text-base md:text-xl max-w-3xl mx-auto"
          >
            Персональный подход к решению транспортных и логистических задач —
          </p>
          <p
            style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 400 }}
            className="text-white/80 text-base md:text-xl max-w-2xl mx-auto mt-1"
          >
            решающее отличие в обслуживании клиентов каждой отрасли.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div key={idx} className="flex gap-4">
                {/* Icon */}
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full border border-white/30">
                  <Icon size={22} className="text-[#C3DFF1]" />
                </div>
                {/* Text */}
                <div>
                  <h3
                    style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 800 }}
                    className="text-white text-base md:text-lg mb-2"
                  >
                    {feature.title}
                  </h3>
                  <p
                    style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 400 }}
                    className="text-white/70 text-sm leading-relaxed"
                  >
                    {feature.description}
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
