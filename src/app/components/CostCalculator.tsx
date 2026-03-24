import { useState } from "react";
import imgRectangle2 from "figma:asset/9126e4e89ce6dc0ec073fa36db80ba31f4e09efa.png";

export function CostCalculator() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Ваша заявка отправлена!");
    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <section id="calculator" className="relative overflow-hidden">
      <div className="flex flex-col md:flex-row min-h-[520px]">
        {/* Left: Form */}
        <div className="w-full md:w-1/2 bg-white py-16 md:py-24 px-8 md:px-16">
          <h2
            style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600 }}
            className="text-[#474d5b] text-2xl md:text-4xl tracking-tight mb-3"
          >
            РАСЧЕТ СТОИМОСТИ
          </h2>
          <p
            style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 400 }}
            className="text-[#3c3c3b] text-base mb-8 leading-relaxed"
          >
            Оставить заявку на расчет перевозки.<br />
            Наши менеджеры свяжутся с Вами<br />
            и обсудят все детали.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-1">
                <div className="border border-[#474d5b] px-4 py-3">
                  <input
                    type="text"
                    name="name"
                    placeholder="Ваше имя"
                    value={form.name}
                    onChange={handleChange}
                    style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 300 }}
                    className="w-full text-[#3c3c3b] text-base outline-none bg-transparent placeholder:text-[#3c3c3b]/60"
                  />
                </div>
              </div>
              <div className="flex-1">
                <div className="border border-[#474d5b] px-4 py-3">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Ваш телефон"
                    value={form.phone}
                    onChange={handleChange}
                    style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 300 }}
                    className="w-full text-[#3c3c3b] text-base outline-none bg-transparent placeholder:text-[#3c3c3b]/60"
                  />
                </div>
              </div>
            </div>

            <div className="border border-[#474d5b] px-4 py-3">
              <textarea
                name="message"
                placeholder="Сообщение"
                value={form.message}
                onChange={handleChange}
                rows={3}
                style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 300 }}
                className="w-full text-[#3c3c3b] text-base outline-none bg-transparent resize-none placeholder:text-[#3c3c3b]/60"
              />
            </div>

            <div className="flex gap-4 pt-2">
              <button
                type="submit"
                style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 400 }}
                className="flex-1 bg-[#474d5b] text-white py-4 text-sm tracking-widest hover:bg-[#25354e] transition-colors"
              >
                ОСТАВИТЬ ЗАЯВКУ
              </button>
              <button
                type="button"
                style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 400 }}
                className="flex-1 border border-[#474d5b] text-[#474d5b] py-4 text-sm tracking-widest hover:bg-[#474d5b] hover:text-white transition-colors"
              >
                ПОЗВОНИТЬ
              </button>
            </div>
          </form>
        </div>

        {/* Right: Image */}
        <div className="hidden md:block w-full md:w-1/2 relative">
          <img
            src={imgRectangle2}
            alt="Calculator"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
