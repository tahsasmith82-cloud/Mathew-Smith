import { useState } from 'react'
import { NavLink } from 'react-router'
import { Menu, X } from 'lucide-react'

const navItems = [
  { path: '/', label: 'Главная' },
  { path: '/achievements', label: 'Мои достижения' },
  { path: '/hobbies', label: 'Мои увлечения' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-warm-white/90 backdrop-blur-md border-b border-warm-sand">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-white font-literata text-sm font-semibold">
            М.К.
          </div>
          <span className="font-manrope text-base font-medium text-text-primary hidden sm:inline">
            Матвей Кузнецов
          </span>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `px-4 py-2 font-manrope text-[15px] font-medium tracking-wide rounded-lg transition-all duration-300 ${
                  isActive
                    ? 'text-navy font-semibold bg-navy/5'
                    : 'text-text-primary hover:text-terracotta hover:bg-terracotta/5'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-lg text-text-primary hover:bg-warm-sand transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Меню"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden bg-warm-white border-t border-warm-sand animate-fade-in-up">
          <nav className="flex flex-col p-4 gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 font-manrope text-[15px] font-medium rounded-lg transition-all duration-300 ${
                    isActive
                      ? 'text-navy font-semibold bg-navy/5'
                      : 'text-text-primary hover:text-terracotta hover:bg-terracotta/5'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
