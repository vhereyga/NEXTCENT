export default function Footer() {
  return (
    <footer className="footer-big-4">
      <div className="section-container footer-inner">
        {/* Left info column */}
        <div className="company-info">
          <div className="logo17">
            <img className="icon8" src="/asset2/icon10.svg" alt="Nexcent Icon" />
            <span className="footer-brand-name">Nexcent</span>
          </div>

          <div className="copyright">
            <p className="copyright-line">Copyright © 2020 Nexcent ltd.</p>
            <p className="copyright-line">All rights reserved</p>
          </div>

          <div className="social-links">
            <a href="#instagram" aria-label="Instagram">
              <img className="social-icon-img" src="/asset2/social-icons0.svg" alt="Instagram" />
            </a>
            <a href="#dribbble" aria-label="Dribbble">
              <img className="social-icon-img" src="/asset2/social-icons1.svg" alt="Dribbble" />
            </a>
            <a href="#twitter" aria-label="Twitter">
              <img className="social-icon-img" src="/asset2/social-icons2.svg" alt="Twitter" />
            </a>
            <a href="#youtube" aria-label="YouTube">
              <img className="social-icon-img" src="/asset2/social-icons3.svg" alt="YouTube" />
            </a>
          </div>
        </div>

        {/* Right links column grid */}
        <div className="links">
          <div className="col-1">
            <h3 className="company">Company</h3>
            <div className="list-items">
              <a href="#about">About us</a>
              <a href="#blog">Blog</a>
              <a href="#contact">Contact us</a>
              <a href="#pricing">Pricing</a>
              <a href="#testimonials">Testimonials</a>
            </div>
          </div>

          <div className="col-2">
            <h3 className="support">Support</h3>
            <div className="list-items">
              <a href="#help">Help center</a>
              <a href="#terms">Terms of service</a>
              <a href="#legal">Legal</a>
              <a href="#privacy">Privacy policy</a>
              <a href="#status">Status</a>
            </div>
          </div>

          <div className="col-3">
            <h3 className="stay-up-to-date">Stay up to date</h3>
            <form className="email-input-field" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="your-email-address-input"
              />
              <button type="submit" aria-label="Subscribe" className="send-btn">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  )
}
