import { useState } from "react";
import imgRectangle8 from "figma:asset/8b84e9345d6153dc602fe28eb7e33ff9f6236c9e.png";

export function Footer() {
  const [email, setEmail] = useState("");
  const [request, setRequest] = useState("");

  return (
    <footer id="contacts" className="relative overflow-hidden text-white">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={imgRectangle8}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1a2a3e]/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Col 1: О компании */}
          <div>
            <h4
              style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600 }}
              className="text-base mb-4 tracking-wide"
            >
              О компании
            </h4>
            <ul
              style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 300 }}
              className="space-y-2 text-sm text-white/80"
            >
              <li><a href="#about" className="hover:text-white transition-colors">О нас</a></li>
              <li><a href="#clients" className="hover:text-white transition-colors">Клиентам</a></li>
              <li><a href="#contacts" className="hover:text-white transition-colors">Контакты</a></li>
            </ul>

            <h4
              style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600 }}
              className="text-base mt-8 mb-4 tracking-wide"
            >
              Услуги
            </h4>
            <ul
              style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 300 }}
              className="space-y-2 text-sm text-white/80"
            >
              <li><a href="#services" className="hover:text-white transition-colors">Железнодорожные перевозки</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Контейнерные перевозки</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Сопровождение грузов</a></li>
            </ul>
          </div>

          {/* Col 2: Contacts */}
          <div className="md:col-span-1">
            <h4
              style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600 }}
              className="text-base mb-4 tracking-wide"
            >
              Контакты
            </h4>
            <div
              style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 300 }}
              className="space-y-3 text-sm text-white/80"
            >
              <p>г. Астана, р-н Нура, пр. Туран,<br />здание 50, н.п. 1, офис 306</p>
              <p
                style={{ fontWeight: 700 }}
                className="text-white text-base"
              >
                +7 (717) 298-00-50
              </p>
              <p>(вн. 1000)</p>
            </div>
          </div>

          {/* Col 3-4: Mini contact form */}
          <div className="md:col-span-2">
            <h4
              style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600 }}
              className="text-base mb-4 tracking-wide"
            >
              Оставить заявку
            </h4>
            <div className="space-y-3">
              <div className="border-b border-white/50 pb-2">
                <input
                  type="text"
                  placeholder="Ваш запрос"
                  value={request}
                  onChange={(e) => setRequest(e.target.value)}
                  style={{ fontFamily: "'Open Sans', sans-serif", fontStyle: "italic", fontWeight: 300 }}
                  className="w-full bg-transparent text-white text-sm placeholder:text-white/50 outline-none"
                />
              </div>
              <div className="border-b border-white/50 pb-2">
                <input
                  type="email"
                  placeholder="Введите ваш e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ fontFamily: "'Open Sans', sans-serif", fontStyle: "italic", fontWeight: 300 }}
                  className="w-full bg-transparent text-white text-sm placeholder:text-white/50 outline-none"
                />
              </div>
              <div className="border-b border-white pb-2">
                <button
                  style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 400 }}
                  className="text-[#232e42] bg-white text-sm px-4 py-1 hover:bg-white/80 transition-colors"
                >
                  Оставить заявку
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Logo */}
            <div className="flex flex-col items-center md:items-start">
              <span
                style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 800 }}
                className="text-white text-xl tracking-widest"
              >
                EXPRESS
              </span>
              <span
                style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 800 }}
                className="text-white text-xl tracking-widest"
              >
                TRANS SERVICE
              </span>
            </div>

            <p
              style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 300 }}
              className="text-white/50 text-xs"
            >
              ©2025 Все права защищены.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
