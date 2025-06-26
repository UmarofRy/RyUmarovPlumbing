import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Videos.css";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Videos() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.setAttribute(
      "data-theme",
      isDarkMode ? "light" : "dark"
    );
  };

  // Real channel data for @hadiw_me.
  const channelData = {
    channelId: "UCA7RTN8L5Tp3lylmHPIrwHg",
    totalVideos: 58,
    shorts: 56,
    longVideos: "2-3",
    username: "@hadiw_me.",
  };

  return (
    <div
      className="videos-container"
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
        {/* Page Hero */}
        <section className="page-hero">
          <div className="hero-background">
            <div className="gradient-orb orb-1"></div>
            <div className="gradient-orb orb-2"></div>
          </div>

          <div className="section-container">
            <div className="page-hero-content" data-aos="fade-up">
              <div className="hero-badge">
                <span className="badge-icon">🎥</span>
                <span>Video Galeriya</span>
              </div>
              <h1 className="page-hero-title">
                Mening
                <span className="gradient-text"> videolarim</span>
              </h1>
              <p className="page-hero-description">
                aesthetic, Maslahat, travel va ko'ngilochar kontent. Har bir
                videoda yangi hikoya va ajoyib tajribalar sizni kutmoqda!
              </p>
              <div className="hero-stats">
                <div className="stat-item glass-card">
                  <span className="stat-number youtube-text">58</span>
                  <span className="stat-label">Video</span>
                </div>
                <div className="stat-item glass-card">
                  <span className="stat-number gradient-text">56</span>
                  <span className="stat-label">Shorts</span>
                </div>
                <div className="stat-item glass-card">
                  <span className="stat-number gradient-text">2-3</span>
                  <span className="stat-label">Uzun videolar</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Channel Stats */}
        <section className="channel-stats-section">
          <div className="section-container">
            <div className="channel-stats-grid" data-aos="fade-up">
              <div className="stat-card glass-card">
                <div className="stat-icon">🎬</div>
                <div className="stat-content">
                  <span className="stat-number youtube-text">
                    {channelData.totalVideos}
                  </span>
                  <span className="stat-label">Jami video</span>
                </div>
              </div>
              <div className="stat-card glass-card">
                <div className="stat-icon">📱</div>
                <div className="stat-content">
                  <span className="stat-number gradient-text">
                    {channelData.shorts}
                  </span>
                  <span className="stat-label">YouTube Shorts</span>
                </div>
              </div>
              <div className="stat-card glass-card">
                <div className="stat-icon">⏱️</div>
                <div className="stat-content">
                  <span className="stat-number gradient-text">
                    {channelData.longVideos}
                  </span>
                  <span className="stat-label">Uzun videolar</span>
                </div>
              </div>
              <div className="stat-card glass-card">
                <div className="stat-icon">✨</div>
                <div className="stat-content">
                  <span className="stat-number gradient-text">Yangi</span>
                  <span className="stat-label">Kontent muntazam</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Real YouTube Content */}
        <section className="videos-section">
          <div className="section-container">
            <div className="section-header" data-aos="fade-up">
              <h2 className="section-title">
                Barcha
                <span className="gradient-text"> videolarim</span>
              </h2>
              <p className="section-description">
                Mening YouTube kanalimdan barcha videolar - 56 ta Shorts va uzun
                videolar
              </p>
            </div>

            {/* YouTube Channel Embed */}
            <div
              className="youtube-channel-container"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="channel-embed-wrapper glass-card">
                <div className="channel-header">
                  <div className="channel-info">
                    <h3>@hadiw_me. kanalim</h3>
                    <p>58 ta video • Shorts va uzun kontent</p>
                  </div>
                  <a
                    href="https://youtube.com/@hadiw_me."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modern-btn btn-youtube"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M23 12C23 5.925 18.075 1 12 1S1 5.925 1 12s4.925 11 11 11 11-4.925 11-11zM10 8.5l6 3.5-6 3.5v-7z"
                        fill="currentColor"
                      />
                    </svg>
                    Kanalga o'tish
                  </a>
                </div>

                {/* YouTube Channel Videos Embed */}
                <div className="channel-videos-embed">
                  <iframe
                    width="100%"
                    height="600"
                    src="https://www.youtube.com/embed/uaPnc2wsAbU"
                    title="@hadiw_me. YouTube kanal videolari"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="youtube-embed"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Video Categories Info */}
            <div
              className="video-categories-info"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <h3 className="categories-title">Kontent turlari</h3>
              <div className="categories-grid">
                <div className="category-info-card glass-card">
                  <div className="category-icon">📱</div>
                  <h4>YouTube Shorts</h4>
                  <p className="category-count">56 ta video</p>
                  <p className="category-description">
                    Qisqa va qiziqarli kontent, trendlar va kundalik hayot
                  </p>
                </div>
                <div className="category-info-card glass-card">
                  <div className="category-icon">🎬</div>
                  <h4>Uzun videolar</h4>
                  <p className="category-count">2-3 ta video</p>
                  <p className="category-description">
                    Batafsil kontent, vlog va maxsus loyihalar
                  </p>
                </div>
                <div className="category-info-card glass-card">
                  <div className="category-icon">✨</div>
                  <h4>Jami kontent</h4>
                  <p className="category-count">58 ta video</p>
                  <p className="category-description">
                    Turli xil va qiziqarli YouTube kontent
                  </p>
                </div>
              </div>
            </div>

            {/* Alternative: Latest Videos Showcase */}
            <div
              className="latest-videos-showcase"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <h3 className="showcase-title">So'nggi videolar</h3>
              <div className="latest-videos-grid">
                <div className="latest-video-card glass-card">
                  <iframe width="391" height="694" src="https://www.youtube.com/embed/gDk6G5pOJ7g" title="Коллабратион🥹🫶🏻🍓 #krc_like_bos #obuna_boʻlishni_unutmang" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div className="latest-video-card glass-card">
                  <iframe width="391" height="694" src="https://www.youtube.com/embed/Tmg5k9BFB08" title="5 бахо шаблонга😂👏🏻 #krc_like_bos #obuna_boʻlishni_unutmang" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div className="latest-video-card glass-card">
                  <iframe width="391" height="694" src="https://www.youtube.com/embed/K8mpQctc8EM" title="Сзда шунаками?🌝💕 #krc_like_bos #obuna_boʻlishni_unutmang" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Subscribe CTA */}
        <section className="subscribe-cta">
          <div className="section-container">
            <div className="cta-content glass-card" data-aos="zoom-in">
              <div className="cta-icon">📺</div>
              <h2 className="cta-title">
                Yangi videolardan
                <span className="youtube-text"> xabardor bo'ling!</span>
              </h2>
              <p className="cta-description">
                Har hafta yangi va qiziqarli videolar. Eng birinchi ko'rish
                uchun kanalimga obuna bo'ling!
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
                  YouTube kanalimga obuna
                </a>
                <Link to="/contact" className="modern-btn btn-ghost">
                  Video g'oya taklif qiling
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
                  <Link to="/">Bosh sahifa</Link>
                </li>
                <li>
                  <Link to="/about">Men haqimda</Link>
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
              <h4 className="footer-title">Video kategoriyalar</h4>
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
                  <Link to="/contact">Video Collaborations</Link>
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
