import { useState } from 'react'

const NAV_LINKS = [
  { label: 'Home', href: '#' },
  { label: 'Service', href: '#service' },
  { label: 'Feature', href: '#feature' },
  { label: 'Product', href: '#product' },
  { label: 'Testimonial', href: '#testimonial' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [activeTab, setActiveTab] = useState('Home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="frame-36">
      <div className="section-container navbar-inner">
        <div className="logo18">
          <img className="icon9" src="/asset2/icon11.svg" alt="Nexcent Icon" />
          <img className="nexcent2" src="/asset2/nexcent1.svg" alt="Nexcent" />
        </div>

        <nav className={`heading-name ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => {
                setActiveTab(link.label)
                setMobileMenuOpen(false)
              }}
              className={link.label === activeTab ? 'header-menu-default' : 'menu-item-default'}
            >
              <div className={link.label === activeTab ? 'label3' : 'label4'}>
                {link.label}
              </div>
            </a>
          ))}
        </nav>

        <div className="login">
          <a href="#login" className="button3">
            <div className="login2">Login</div>
          </a>
          <a href="#signup" className="button4">
            <div className="sign-up">Sign up</div>
          </a>
        </div>

        <button
          type="button"
          className="mobile-hamburger"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
