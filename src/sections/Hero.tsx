import { useState } from 'react'
import heroImage from '../assets/hero.png'

export default function Hero() {
  const [activeDot, setActiveDot] = useState(0)

  return (
    <section className="hero-section" id="home">
      <div className="section-container hero-section__inner">
        <div className="frame-1">
          <div className="text">
            <h1 className="lessons-and-insights-from-8-years">
              <span>
                <span className="lessons-and-insights-from-8-years-span">
                  Lessons and insights{' '}
                </span>
                <span className="lessons-and-insights-from-8-years-span2">
                  from 8 years
                </span>
              </span>
            </h1>
            <p className="where-to-grow-your-business-as-a-photographer-site-or-social-media">
              Where to grow your business as a photographer: site or social media?
            </p>
          </div>
          <a href="#register" className="button">
            <div className="label">Register</div>
          </a>
        </div>

        <div className="illustration-wrapper">
          <img
            src={heroImage}
            alt="Developer illustration"
            className="hero-main-img"
          />
        </div>
      </div>

      {/* 3 dots sliding pagination */}
      <div className="hero-dots" aria-label="Hero slider pagination">
        {[0, 1, 2].map((idx) => (
          <span
            key={idx}
            className={`dot ${activeDot === idx ? 'active' : ''}`}
            onClick={() => setActiveDot(idx)}
            role="button"
            tabIndex={0}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
