import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Home.css";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [subscriberCount, setSubscriberCount] = useState(0);
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });

    // Animate subscriber count
    const targetCount = 12500; // Example subscriber count
    const increment = targetCount / 100;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= targetCount) {
        setSubscriberCount(targetCount);
        clearInterval(timer);
      } else {
        setSubscriberCount(Math.floor(current));
      }
    }, 20);

    return () => clearInterval(timer);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.setAttribute(
      "data-theme",
      isDarkMode ? "light" : "dark",
    );
  };

  return (
    <div
      className="portfolio-container"
      data-theme={isDarkMode ? "dark" : "light"}
    >
      {/* Navigation */}
      <header className="modern-header" data-aos="fade-down">
        <div className="header-content">
          <div className="logo">
            <span className="logo-text gradient-text">@hadiw_me</span>
          </div>

          <nav className={`main-nav ${isMobileMenuOpen ? "nav-open" : ""}`}>
            <Link
              className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              className={`nav-link ${location.pathname === "/about" ? "active" : ""}`}
              to="/about"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              className={`nav-link ${location.pathname === "/videos" ? "active" : ""}`}
              to="/videos"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blogs
            </Link>
            <Link
              className={`nav-link ${location.pathname === "/projects" ? "active" : ""}`}
              to="/projects"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Project
            </Link>
            <Link
              className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`}
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Bog'lanish
            </Link>

            
            <a
              href="https://youtube.com/@hadiw_me."
              target="_blank"
              rel="noopener noreferrer"
              className="modern-btn btn-youtube"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              YouTube sahifam
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </nav>

          <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
            <span
              className={`hamburger-line ${isMobileMenuOpen ? "active" : ""}`}
            ></span>
            <span
              className={`hamburger-line ${isMobileMenuOpen ? "active" : ""}`}
            ></span>
            <span
              className={`hamburger-line ${isMobileMenuOpen ? "active" : ""}`}
            ></span>
          </button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-background">
            <div className="gradient-orb orb-1"></div>
            <div className="gradient-orb orb-2"></div>
            <div className="gradient-orb orb-3"></div>
          </div>

          <div className="section-container">
            <div className="hero-content">
              <div
                className="hero-text"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="hero-badge">
                  <span className="badge-icon">🎬</span>
                  <span>YouTube Content Creator</span>
                </div>

                <h1 className="hero-title">
                  Salom, men
                  <span className="title-highlight gradient-text"> Hadiya</span>
                  <br />
                  <span
                    className="kinetic-text"
                    data-text="YouTube yaratuvchisiman"
                  >
                    YouTube yaratuvchisiman
                  </span>
                </h1>

                <p className="hero-description">
                  O'zbekiston yoshlarining sevimli video bloggeri. Hayot, moda,
                  sayohat va ko'ngilochar kontent yarataman. Mening olamimga
                  xush kelibsiz!
                </p>

                <div
                  className="hero-stats"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div className="stat-item glass-card">
                    <span className="stat-number youtube-text">
                      {subscriberCount.toLocaleString()}+
                    </span>
                    <span className="stat-label">Obunachi</span>
                  </div>
                  <div className="stat-item glass-card">
                    <span className="stat-number gradient-text">2M+</span>
                    <span className="stat-label">Ko'rishlar</span>
                  </div>
                  <div className="stat-item glass-card">
                    <span className="stat-number gradient-text">58</span>
                    <span className="stat-label">Video</span>
                  </div>
                </div>

                <div
                  className="hero-actions"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <a
                    href="https://youtube.com/@hadiw_me."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modern-btn btn-youtube glow"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M23 12C23 5.925 18.075 1 12 1S1 5.925 1 12s4.925 11 11 11 11-4.925 11-11zM10 8.5l6 3.5-6 3.5v-7z"
                        fill="currentColor"
                      />
                    </svg>
                    YouTube sahifamni ko'rish
                  </a>
                  <Link to="/videos" className="modern-btn btn-ghost">
                    Videolarni ko'rish
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </div>

              <div
                className="hero-visual"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <div className="profile-container">
                  <div className="profile-image-wrapper">
                    <div className="profile-glow"></div>
                    <img
                      src="https://i.pinimg.com/736x/58/f4/93/58f493eaf9bd610c601421010a5a4e70.jpg"
                      alt="Hadiya - YouTube Content Creator"
                      className="profile-image"
                    />
                  </div>

                  <div className="floating-elements">
                    <div
                      className="floating-card card-1 glass-card"
                      data-aos="zoom-in"
                      data-aos-delay="800"
                    >
                      <div className="card-icon">💕</div>
                      <div className="card-text">
                        <span className="card-title">Fashion & Lifestyle</span>
                        <span className="card-subtitle">
                          Moda va hayot tarzi
                        </span>
                      </div>
                    </div>

                    <div
                      className="floating-card card-2 glass-card"
                      data-aos="zoom-in"
                      data-aos-delay="1000"
                    >
                      <div className="card-icon">🎭</div>
                      <div className="card-text">
                        <span className="card-title">Entertainment</span>
                        <span className="card-subtitle">
                          Ko'ngilochar kontent
                        </span>
                      </div>
                    </div>

                    <div
                      className="floating-card card-3 glass-card"
                      data-aos="zoom-in"
                      data-aos-delay="1200"
                    >
                      <div className="card-icon">✈️</div>
                      <div className="card-text">
                        <span className="card-title">Travel Vlogs</span>
                        <span className="card-subtitle">Sayohat videolari</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div
            className="scroll-indicator"
            data-aos="fade-up"
            data-aos-delay="1400"
          >
            <div className="scroll-text">Pastga scroll qiling</div>
            <div className="scroll-arrow">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 5v14m7-7l-7 7-7-7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </section>

        {/* Featured Videos Section */}
        <section className="featured-videos">
          <div className="section-container">
            <div className="section-header" data-aos="fade-up">
              <h2 className="section-title">
                Eng mashhur
                <span className="gradient-text"> videolarim</span>
              </h2>
              <p className="section-description">
                Mening YouTube kanalimdan eng mashhur va sevimli videolar
              </p>
            </div>

            <div className="videos-preview">
              <div className="preview-text" data-aos="fade-right">
                <h3>YouTube kanalimda:</h3>
                <div className="preview-stats">
                  <div className="preview-stat">
                    <span className="preview-number">58</span>
                    <span className="preview-label">Jami video</span>
                  </div>
                  <div className="preview-stat">
                    <span className="preview-number">56</span>
                    <span className="preview-label">YouTube Shorts</span>
                  </div>
                  <div className="preview-stat">
                    <span className="preview-number">2-3</span>
                    <span className="preview-label">Uzun videolar</span>
                  </div>
                </div>
                <p className="preview-description">
                  Qisqa va qiziqarli Shorts, shuningdek batafsil uzun videolar.
                  Moda, lifestyle va hayotimdan qiziqarli lavhalar.
                </p>
              </div>

              <div className="preview-visual" data-aos="fade-left">
                <div className="youtube-preview-card glass-card">
                  <div className="youtube-header">
                    <div className="channel-avatar">
                      <img
                        src="https://i.pinimg.com/736x/58/f4/93/58f493eaf9bd610c601421010a5a4e70.jpg"
                        alt="@hadiw_me."
                      />
                    </div>
                    <div className="channel-info">
                      <h4>@hadiw_me.</h4>
                      <p>58 video • YouTube Creator</p>
                    </div>
                  </div>
                  <div className="preview-thumbnails">
                    <div className="thumbnail-grid">
                      <div className="thumbnail-item">
                        <div className="thumbnail-placeholder shorts">
                          Shorts
                        </div>
                      </div>
                      <div className="thumbnail-item">
                        <div className="thumbnail-placeholder video">Video</div>
                      </div>
                      <div className="thumbnail-item">
                        <div className="thumbnail-placeholder shorts">
                          Shorts
                        </div>
                      </div>
                      <div className="thumbnail-item">
                        <div className="thumbnail-placeholder shorts">
                          Shorts
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="section-action"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <Link to="/videos" className="modern-btn btn-primary">
                Barcha videolarni ko'rish
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M7 17L17 7M17 7H7M17 7V17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* About Preview */}
        <section className="about-preview">
          <div className="section-container">
            <div className="about-content">
              <div className="about-text" data-aos="fade-right">
                <div className="about-badge">
                  <span className="badge-icon">✨</span>
                  <span>Mening hikoyam</span>
                </div>

                <h2 className="about-title">
                  YouTube orqali
                  <span className="gradient-text"> o'z olamimni</span>
                  <br />
                  sizlar bilan bo'lishaman
                </h2>

                <p className="about-description">
                  Men yoshligimdan beri kreativlik va o'z fikrlarini boshqalar
                  bilan bo'lishishga qiziqardim. YouTube platformasi menga
                  minglab odamlar bilan bog'lanish va ularning kunlariga
                  yorqinlik qo'shish imkonini berdi.
                </p>

                <div className="about-features">
                  <div className="feature-item">
                    <div className="feature-icon">🎨</div>
                    <div className="feature-text">
                      <h4>Kreativlik</h4>
                      <p>Har bir videoda yangi g'oyalar</p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">❤️</div>
                    <div className="feature-text">
                      <h4>Samimiylik</h4>
                      <p>Haqiqiy his-tuyg'ular</p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">🌟</div>
                    <div className="feature-text">
                      <h4>Ilhom</h4>
                      <p>Boshqalarni ilhomlantirish</p>
                    </div>
                  </div>
                </div>

                <Link to="/about" className="modern-btn btn-ghost">
                  Men haqimda batafsil
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>

              <div className="about-visual" data-aos="fade-left">
                <div className="about-image-container">
                  <img
                    src="https://via.placeholder.com/500x600/a855f7/ffffff?text=Behind+the+Scenes"
                    alt="Behind the scenes"
                    className="about-image"
                  />
                  <div className="image-overlay glass-card">
                    <div className="overlay-content">
                      <h4>Behind the Scenes</h4>
                      <p>Video yaratish jarayoni</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="cta-section">
          <div className="section-container">
            <div className="cta-content glass-card" data-aos="zoom-in">
              <h2 className="cta-title">
                Mening jamoamga
                <span className="youtube-text">qo'shiling!</span>
              </h2>
              <p className="cta-description">
                Yangi videolar, eksklyuziv kontent va ko'ngilochar g'oyalar
                uchun obuna bo'ling va birinchilardan bo'lib yangiliklardan
                xabardor bo'ling!
              </p>
              <div className="cta-actions">
                <a
                  href="https://youtube.com/@hadiw_me."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modern-btn btn-youtube"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M23 12C23 5.925 18.075 1 12 1S1 5.925 1 12s4.925 11 11 11 11-4.925 11-11zM10 8.5l6 3.5-6 3.5v-7z"
                      fill="currentColor"
                    />
                  </svg>
                  Obuna bo'lish
                </a>
                <Link to="/contact" className="modern-btn btn-ghost">
                  Hamkorlik uchun
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="modern-footer">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <div className="footer-logo">
                <span className="footer-brand-name gradient-text">
                  @hadiw_me
                </span>
              </div>
              <p className="footer-description">
                O'zbekiston yoshlarining sevimli YouTube yaratuvchisi. Hayot,
                moda, sayohat va ko'ngilochar kontent.
              </p>
              <div className="footer-social">
                <a
                  href="https://youtube.com/@hadiw_me."
                  className="social-link youtube prominent"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M23 12C23 5.925 18.075 1 12 1S1 5.925 1 12s4.925 11 11 11 11-4.925 11-11zM10 8.5l6 3.5-6 3.5v-7z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a
                  href="https://t.me/khamidvaas"
                  className="social-link telegram bounce"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM17.64 8.87L15.96 17.28C15.83 17.89 15.5 18.02 15.03 17.74L12.58 15.92L11.42 17.04C11.28 17.18 11.16 17.3 10.89 17.3L11.08 14.8L15.63 10.79C15.84 10.6 15.58 10.49 15.3 10.68L9.85 14.11L7.44 13.38C6.85 13.2 6.84 12.82 7.57 12.54L16.85 8.93C17.36 8.75 17.81 9.03 17.64 8.87Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="footer-section">
              <h4 className="footer-title">Tezkor havolalar</h4>
              <ul className="footer-links">
                <li>
                  <Link to="/about">Men haqimda</Link>
                </li>
                <li>
                  <Link to="/videos">Videolarim</Link>
                </li>
                <li>
                  <Link to="/projects">Loyihalar</Link>
                </li>
                <li>
                  <Link to="/contact">Bog'lanish</Link>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h4 className="footer-title">Kontent turlari</h4>
              <ul className="footer-links">
                <li>
                  <span>Fashion & Beauty</span>
                </li>
                <li>
                  <span>Lifestyle Vlogs</span>
                </li>
                <li>
                  <span>Travel Adventures</span>
                </li>
                <li>
                  <span>Entertainment</span>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h4 className="footer-title">Hamkorlik</h4>
              <ul className="footer-links">
                <li>
                  <Link to="/contact">Brand Partnerships</Link>
                </li>
                <li>
                  <Link to="/contact">Sponsored Content</Link>
                </li>
                <li>
                  <Link to="/contact">Collaborations</Link>
                </li>
                <li>
                  <Link to="/contact">Media Kit</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2024 @hadiw_me. Barcha huquqlar himoyalangan.</p>
            <div className="footer-bottom-links">
              <a href="#privacy">Maxfiylik siyosati</a>
              <a href="#terms">Foydalanish shartlari</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
