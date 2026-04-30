import { BookOpen, TrendingUp, ExternalLink } from 'lucide-react'

const financeLinks = [
  {
    label: 'МоиФинансы.рф — образовательные материалы',
    url: 'https://моифинансы.рф/materials/',
  },
  {
    label: 'Дни финансовой грамотности',
    url: 'https://dni-fg.ru/',
  },
]

export default function Hobbies() {
  return (
    <>
      {/* Hero */}
      <section className="bg-warm-white py-16 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-literata text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy">
            Мои увлечения
          </h1>
          <p className="font-manrope text-base sm:text-lg text-text-secondary mt-3">
            Области знаний и интересов, которым я посвящаю своё свободное время
          </p>
          <div className="gold-line" />
        </div>
      </section>

      {/* Hobbies Cards */}
      <section className="bg-warm-white pb-16 sm:pb-20">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8 sm:gap-10">
          {/* History Card */}
          <div className="bg-white rounded-2xl p-6 sm:p-10 sm:p-12 shadow-[0_4px_24px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)]">
            <div className="w-20 h-20 rounded-full bg-navy/5 flex items-center justify-center">
              <BookOpen className="w-10 h-10 text-navy" />
            </div>

            <h2 className="font-literata text-2xl sm:text-[28px] font-semibold text-navy mt-6">
              История
            </h2>

            <p className="font-manrope text-base text-text-secondary leading-relaxed mt-4">
              Изучение истории — одно из главных увлечений. Интерес к прошлому помогает понять настоящее и строить будущее. Участие в исторических конкурсах и олимпиадах.
            </p>

            <ul className="mt-5 space-y-2">
              <li className="font-manrope text-[15px] text-text-primary flex items-start gap-3">
                <span className="mt-0.5">📜</span>
                Исторические исследования и проекты
              </li>
              <li className="font-manrope text-[15px] text-text-primary flex items-start gap-3">
                <span className="mt-0.5">🏛</span>
                Участие в интеллектуальных конкурсах
              </li>
            </ul>
          </div>

          {/* Finance Card */}
          <div className="bg-white rounded-2xl p-6 sm:p-10 sm:p-12 shadow-[0_4px_24px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)]">
            <div className="w-20 h-20 rounded-full bg-terracotta/10 flex items-center justify-center">
              <TrendingUp className="w-10 h-10 text-terracotta" />
            </div>

            <h2 className="font-literata text-2xl sm:text-[28px] font-semibold text-navy mt-6">
              Финансы
            </h2>

            <p className="font-manrope text-base text-text-secondary leading-relaxed mt-4">
              Финансовая грамотность и экономика — важная часть современного образования. Изучение основ финансов, инвестиций и экономических процессов.
            </p>

            <div className="mt-6 space-y-3">
              {financeLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 font-manrope text-[15px] font-medium text-navy bg-warm-sand rounded-lg px-4 py-3 transition-all duration-300 hover:bg-navy hover:text-white"
                >
                  <ExternalLink className="w-4 h-4 flex-shrink-0" />
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
