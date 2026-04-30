import { Link } from 'react-router'
import { Phone, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-warm-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-8 lg:gap-12 items-center">
            {/* Left Column - Text */}
            <div className="fade-in order-2 lg:order-1">
              {/* Badge */}
              <span className="inline-block font-manrope text-[13px] font-medium text-terracotta uppercase tracking-[0.08em] px-4 py-1.5 border border-terracotta rounded-full">
                Ученик 11 «А» класса
              </span>

              {/* Name */}
              <h1 className="font-literata text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy mt-5 leading-tight tracking-tight">
                Кузнецов Матвей Алексеевич
              </h1>

              {/* School */}
              <p className="font-manrope text-base sm:text-lg text-text-secondary mt-4 leading-relaxed">
                МАОУ г. Жуковки «Лицей № 1 имени Героя Советского Союза Дмитрия Сергеевича Езерского»
              </p>

              {/* Interests Pills */}
              <div className="flex flex-wrap gap-3 mt-6">
                <span className="inline-flex items-center gap-2 font-manrope text-sm font-medium bg-warm-sand text-text-primary px-5 py-2 rounded-full">
                  📚 История
                </span>
                <span className="inline-flex items-center gap-2 font-manrope text-sm font-medium bg-warm-sand text-text-primary px-5 py-2 rounded-full">
                  💰 Финансы
                </span>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mt-8">
                <Link to="/achievements">
                  <Button
                    size="lg"
                    className="bg-navy hover:bg-terracotta text-white font-manrope text-[15px] font-medium px-8 py-3 h-auto rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-terracotta/30"
                  >
                    Мои достижения
                  </Button>
                </Link>
                <Link to="/hobbies">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-navy text-navy hover:bg-navy hover:text-white font-manrope text-[15px] font-medium px-8 py-3 h-auto rounded-lg transition-all duration-300"
                  >
                    Мои увлечения
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Column - Photo */}
            <div className="fade-in-delay order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative">
                {/* Gold decorative frame behind */}
                <div className="absolute -top-3 -left-3 w-full h-full border-2 border-gold rounded-2xl" />
                <img
                  src="/images/matvey.jpg"
                  alt="Кузнецов Матвей"
                  className="relative w-64 sm:w-72 lg:w-80 rounded-2xl shadow-photo object-cover aspect-[3/4]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section className="bg-warm-sand py-14 sm:py-16">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-literata text-2xl sm:text-3xl lg:text-4xl font-semibold text-navy text-center">
            Контакты для связи
          </h2>
          <div className="gold-line" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
            {/* Phone */}
            <div className="bg-white rounded-xl p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover flex items-center gap-5">
              <div className="w-12 h-12 rounded-full bg-terracotta/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-terracotta" />
              </div>
              <div>
                <p className="font-manrope text-lg font-medium text-text-primary">
                  8 (930) 726-43-88
                </p>
                <p className="font-manrope text-sm text-text-secondary">
                  Телефон
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white rounded-xl p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover flex items-center gap-5">
              <div className="w-12 h-12 rounded-full bg-terracotta/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-terracotta" />
              </div>
              <div className="min-w-0">
                <p className="font-manrope text-base sm:text-lg font-medium text-text-primary truncate">
                  vasabebum2008@gmail.com
                </p>
                <p className="font-manrope text-sm text-text-secondary">
                  Электронная почта
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
