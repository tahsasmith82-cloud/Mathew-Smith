import { useState, useCallback } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

// Generate list of all 53 certificate images
const certificates = Array.from({ length: 53 }, (_, i) => ({
  id: i + 1,
  src: `/images/gramoty/gramota_page${i + 1}_img1.jpeg`,
  alt: `Грамота ${i + 1}`,
}))

const projects = [
  {
    title: '«Влияние пищевых добавок на функции живых организмов»',
    tag: 'Районная конференция «Первые шаги в науку» · 4 «А» класс · 2019',
    description:
      'Исследовательская работа об экспериментах с пищевыми добавками, проведённых на лабораторных мышах. В работе проведены эксперименты по определению содержания жира и крахмала в чипсах и сухариках, анализ влияния на организм.',
  },
  {
    title: '«Карась серебряный — обитатель домашнего пруда и водоёмов г. Жуковки»',
    tag: 'Областной конкурс «Юные исследователи — будущее науки» · 8 «А» класс · 2023',
    description:
      'Проект по изучению особенностей серебряного карася, проведению экспериментов по выращиванию в домашних условиях, анализу размеров рыб в разных водоёмах Жуковского муниципального округа.',
  },
  {
    title: '«Использование бионических механизмов»',
    tag: 'IV Региональный конкурс «Под алыми парусами» · 10 «А» класс · 2025',
    description:
      'Исследовательская работа в номинации «Чтения им. И.Г. Петровского». Изучение бионики как науки и создание модели рыхлителя-вилки для комнатных растений на основе строения лапы крота.',
  },
  {
    title: '«Применение подобия. Средняя линия треугольника и трапеции»',
    tag: 'Проект по геометрии · 8 «А» класс',
    description:
      'Презентационный проект о теории подобных треугольников, средней линии треугольника и трапеции, пропорциональных отрезках.',
  },
]

export default function Achievements() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openLightbox = useCallback((index: number) => {
    setCurrentIndex(index)
    setLightboxOpen(true)
    document.body.style.overflow = 'hidden'
  }, [])

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false)
    document.body.style.overflow = ''
  }, [])

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? certificates.length - 1 : prev - 1))
  }, [])

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === certificates.length - 1 ? 0 : prev + 1))
  }, [])

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') goToPrev()
      if (e.key === 'ArrowRight') goToNext()
    },
    [closeLightbox, goToPrev, goToNext]
  )

  return (
    <>
      {/* Hero */}
      <section className="bg-warm-white py-16 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-literata text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy">
            Мои достижения
          </h1>
          <p className="font-manrope text-base sm:text-lg text-text-secondary mt-3">
            Грамоты, дипломы и сертификаты, полученные в годы обучения
          </p>
          <div className="gold-line" />
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-warm-white pb-16 sm:pb-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
            {certificates.map((cert, index) => (
              <button
                key={cert.id}
                onClick={() => openLightbox(index)}
                className="group bg-white rounded-lg overflow-hidden shadow-gramota transition-all duration-300 hover:scale-[1.03] hover:shadow-gramota-hover cursor-zoom-in"
              >
                <img
                  src={cert.src}
                  alt={cert.alt}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="bg-warm-sand py-16 sm:py-20">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-literata text-2xl sm:text-3xl lg:text-4xl font-semibold text-navy text-center">
            Научные проекты и исследования
          </h2>
          <div className="gold-line" />

          <div className="flex flex-col gap-6 sm:gap-8 mt-10">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 sm:p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
              >
                <h3 className="font-literata text-lg sm:text-xl font-semibold text-navy leading-snug">
                  {project.title}
                </h3>
                <p className="font-manrope text-[13px] font-medium text-terracotta mt-2">
                  {project.tag}
                </p>
                <p className="font-manrope text-sm sm:text-base text-text-secondary leading-relaxed mt-4">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="dialog"
          aria-modal="true"
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors p-2 z-10"
            aria-label="Закрыть"
          >
            <X size={32} />
          </button>

          {/* Prev button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              goToPrev()
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-2 z-10 hidden sm:block"
            aria-label="Предыдущая"
          >
            <ChevronLeft size={40} />
          </button>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              goToNext()
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-2 z-10 hidden sm:block"
            aria-label="Следующая"
          >
            <ChevronRight size={40} />
          </button>

          {/* Image */}
          <img
            src={certificates[currentIndex].src}
            alt={certificates[currentIndex].alt}
            className="max-w-[90%] max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 font-manrope text-sm">
            {currentIndex + 1} / {certificates.length}
          </div>
        </div>
      )}
    </>
  )
}
