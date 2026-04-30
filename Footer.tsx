export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="h-[3px] bg-gradient-to-r from-gold to-terracotta" />
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
        <p className="font-manrope text-sm text-white/80">
          Разработчик сайта: Кузнецов Матвей, 11 «А» класс
        </p>
        <p className="font-manrope text-[13px] text-white/50 mt-2">
          © 2025
        </p>
      </div>
    </footer>
  )
}
