import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Home.css";
import AOS from "aos";
import "aos/dist/aos.css";



export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="luxury-container">
      {/* Premium Navigation */}
          <header className="luxury-header" data-aos="fade-down">
      <div className="luxury-header-content">
        <div className="luxury-logo">
          <span className="logo-text">RyUmarov</span>
        </div>

        <nav className={`luxury-nav ${isMobileMenuOpen ? "nav-open" : ""}`}>
          <Link
            className={`nav-item ${location.pathname === "/" ? "active-link" : ""}`}
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Bosh sahifa
          </Link>
          <Link
            className={`nav-item ${location.pathname === "/about" ? "active-link" : ""}`}
            to="/about"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Biz haqimizda
          </Link>
          <Link
            className={`nav-item ${location.pathname === "/services" ? "active-link" : ""}`}
            to="/services"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Xizmatlar
          </Link>
          <Link
            className={`nav-item ${location.pathname === "/project" ? "active-link" : ""}`}
            to="/project"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Loyihalar
          </Link>
          <Link
            className={`nav-item ${location.pathname === "/contact" ? "active-link" : ""}`}
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Bog'lanish
          </Link>

          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
            <button className="cta-button primary">
              Buyurtma berish
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </Link>
        </nav>

        <button className="mobile-toggle" onClick={toggleMobileMenu}>
          <span className={`hamburger-line ${isMobileMenuOpen ? "active" : ""}`}></span>
          <span className={`hamburger-line ${isMobileMenuOpen ? "active" : ""}`}></span>
          <span className={`hamburger-line ${isMobileMenuOpen ? "active" : ""}`}></span>
        </button>
      </div>
    </header>

      <main>
        {/* Hero Section */}
        <section className="luxury-hero">
          <div className="hero-content">
            <div className="hero-text" data-aos="fade-up" data-aos-delay="200">
              <div className="hero-badge">
                <span className="badge-icon">⭐</span>
                Premium santexnika xizmatlari
              </div>
              <h1 className="hero-title">
                Professional santexnika
                <span className="title-highlight"> yechimlari</span>
                <br />
                uyingiz uchun
              </h1>
              <p className="hero-description">
                24/7 xizmat, sertifikatlangan mutaxassislar va kafolatlangan
                natija bilan malakali santexnika xizmatlari. Favqulodda
                ta'mirdan to'liq o'rnatishgacha barcha ishlarni aniqlik va
                ehtiyotkorlik bilan bajaramiz.
              </p>
              <div className="hero-actions">
                <Link to="/contact">
                  <button className="cta-button primary large">
                    Xizmat buyurtma qilish
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </Link>
                <a href="tel:+998881395511" className="contact-link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M22 16.92V19.92C22 20.52 21.52 21 20.92 21C9.4 21 0 11.6 0 0.08C0 -0.52 0.48 -1 1.08 -1H4.09C4.69 -1 5.17 -0.52 5.17 0.08C5.17 2.08 5.54 4.02 6.23 5.83C6.37 6.17 6.26 6.56 5.94 6.78L4.05 8.67C5.84 12.34 8.66 15.16 12.33 16.95L14.22 15.06C14.44 14.74 14.83 14.63 15.17 14.77C16.98 15.46 18.92 15.83 20.92 15.83C21.52 15.83 22 16.31 22 16.92Z"
                      fill="currentColor"
                    />
                  </svg>
                  +998 88-139-55-11
                </a>
              </div>
              <div
                className="hero-stats"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="stat-item">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Mamnun mijozlar</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">24/7</span>
                  <span className="stat-label">Tezkor xizmat</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Kafolat</span>
                </div>
              </div>
            </div>
            <div
              className="hero-visual"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <div className="hero-image-container">
                <img
                  src="/image 10.png"
                  alt="Professional santexnik"
                  className="hero-image main"
                />
                <img
                  src="/image 9.png"
                  alt="Santexnika asboblari"
                  className="hero-image secondary"
                />
                <div
                  className="floating-card"
                  data-aos="zoom-in"
                  data-aos-delay="600"
                >
                  <div className="card-icon">🔧</div>
                  <div className="card-content">
                    <span className="card-title">Malakali xizmat</span>
                    <span className="card-subtitle">
                      Sertifikatlangan mutaxassislar
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="luxury-services">
          <div className="section-container">
            <div className="section-header" data-aos="fade-up">
              <h2 className="section-title">Premium xizmatlarimiz</h2>
              <p className="section-description">
                Sizning ehtiyojlaringizga moslashtirilgan keng qamrovli
                santexnika yechimlari yuqori sifat va har bir tafsilotga
                e'tiborning qaratilganligida taqdim etiladi.
              </p>
            </div>

            <div className="services-grid">
              <div
                className="service-card"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="service-icon home">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M3 12L5 10M5 10L12 3L19 10M5 10V20C5 20.6 5.4 21 6 21H9M19 10L21 12M19 10V20C19 20.6 18.6 21 18 21H15M9 21C9.6 21 10 20.6 10 20V16C10 15.4 10.4 15 11 15H13C13.6 15 14 15.4 14 16V20C14 20.6 14.4 21 15 21M9 21H15"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <h3 className="service-title">Uy-joy xizmatlari</h3>
                <p className="service-description">
                  Uy santexnikasi uchun to'liq yechimlar: ta'mirlash, o'rnatish
                  va barcha uy ehtiyojlaringiz uchun texnik xizmat ko'rsatish.
                </p>
                <Link to="/services" className="service-link">
                  Batafsil
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </Link>
              </div>

              <div
                className="service-card"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div className="service-icon commercial">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M3 21L21 21M4 18L4 10L12 4L20 10L20 18M8 12L8 18M12 12L12 18M16 12L16 18"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <h3 className="service-title">Tijorat yechimlari</h3>
                <p className="service-description">
                  Ofislar, restoranlar va tijorat binolari uchun professional
                  santexnika xizmatlari va ishonchli texnik xizmat shartnomalar.
                </p>
                <Link to="/services" className="service-link">
                  Batafsil
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </Link>
              </div>

              <div
                className="service-card"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <div className="service-icon emergency">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2L13.09 8.26L22 9L13.09 15.74L12 22L10.91 15.74L2 9L10.91 8.26L12 2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <h3 className="service-title">Favqulodda yordam</h3>
                <p className="service-description">
                  Shoshilinch ta'mirlash, sizish va muhim tizim nosozliklari
                  uchun 24/7 tezkor santexnika xizmatlari.
                </p>
                <Link to="/contact" className="service-link">
                  Hozir qo'ng'iroq qiling
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About Preview */}
        <section className="luxury-about">
          <div className="section-container">
            <div className="about-content">
              <div className="about-text" data-aos="fade-right">
                <div className="about-badge">
                  <span className="badge-icon">🏆</span>
                  2020 yildan buyon
                </div>
                <h2 className="about-title">
                  Ishonchli santexnika mutaxassislari
                  <span className="title-highlight">Toshkentda</span>
                </h2>
                <p className="about-description">
                  Ko'p yillik tajriba va mukammallikka sodiqlik bilan Umarov
                  Santexnika uy-joy va tijorat santexnika xizmatlari uchun eng
                  yaxshi tanlov bo'lib qoldi. Bizning sertifikatlangan
                  mutaxassislarimiz har bir loyihada sifatli ish yaratishadi.
                </p>
                <div className="about-features">
                  <div className="feature-item">
                    <div className="feature-icon">✓</div>
                    <span>
                      Litsenziyalangan va sug'urtalangan mutaxassislar
                    </span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">✓</div>
                    <span>Sifatli materiallar va asbob-uskunalar</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">✓</div>
                    <span>Shaffof narxlar va kafolatlar</span>
                  </div>
                </div>
                <Link to="/about">
                  <button className="cta-button secondary">
                    Biz haqimizda batafsil
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  </button>
                </Link>
              </div>
              <div className="about-visual" data-aos="fade-left">
                <div className="about-image-container">
                  <img
                    src="/image.png"
                    alt="Bizning kompaniya"
                    className="about-image"
                  />
                  <div
                    className="experience-badge"
                    data-aos="zoom-in"
                    data-aos-delay="400"
                  >
                    <span className="badge-number">4+</span>
                    <span className="badge-text">Yil tajriba</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="luxury-team">
          <div className="section-container">
            <div className="section-header" data-aos="fade-up">
              <h2 className="section-title">
                Mutaxassis jamoamiz bilan tanishing
              </h2>
              <p className="section-description">
                Aniqlik va g'amxo'rlik bilan ajoyib santexnika xizmatlari
                ko'rsatishga bag'ishlangan sertifikatlangan mutaxassislar.
              </p>
            </div>

            <div className="team-grid">
              <div
                className="team-card"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
              <div className="team-image">
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/006/026/787/non_2x/avatar-profile-default-social-media-photo-icon-in-flat-style-vector.jpg"
                    alt="Umarov Raxmadjon"
                  />
                </div>
                <div className="team-info">
                  <h3 className="team-name">Umarov Raxmadjon</h3>
                  <p className="team-role">Katta santexnik va Yetakchi</p>
                  <div className="team-badges">
                    <span className="team-badge">Sertifikatlangan</span>
                    <span className="team-badge">4+ yil</span>
                  </div>
                </div>
              </div>

              <div
                className="team-card"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div className="team-image">
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/006/026/787/non_2x/avatar-profile-default-social-media-photo-icon-in-flat-style-vector.jpg"
                    alt="Umarov Axmadjon"
                  />
                </div>
                <div className="team-info">
                  <h3 className="team-name">Umarov Abduvohid</h3>
                  <p className="team-role">Yordamchi Shogird</p>
                  <div className="team-badges">
                    <span className="team-badge">Ekspert</span>
                    <span className="team-badge">2+ yil</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="luxury-testimonial">
          <div className="section-container">
            <div className="testimonial-content" data-aos="fade-up">
              <div className="testimonial-header">
                <div className="stars">
                  <span>⭐</span>
                  <span>⭐</span>
                  <span>⭐</span>
                  <span>⭐</span>
                  <span>⭐</span>
                </div>
                <h3 className="testimonial-title">Mijozlarimiz nima deydi</h3>
              </div>
              <blockquote className="testimonial-quote">
                "Ajoyib xizmat! Jamoa o'z vaqtida yetib keldi, muammoni tez
                aniqladi va to'liq yechim taqdim etdi. Professional, toza va har
                qanday santexnika ehtiyojlari uchun tavsiya etaman."
              </blockquote>
              <div className="testimonial-author">
                <div className="author-info">
                  <span className="author-name">Mamnun mijoz</span>
                  <span className="author-location">Toshkent aholisi</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="luxury-cta">
          <div className="section-container">
            <div className="cta-content" data-aos="zoom-in">
              <h2 className="cta-title">Boshlashga tayyormisiz?</h2>
              <p className="cta-description">
                Bugun biz bilan bog'laning, bepul maslahat oling va bizning
                mutaxassislarimiz barcha santexnika ehtiyojlaringizni
                professional mukammallik bilan hal qilishlariga ruxsat bering.
              </p>
              <div className="cta-actions">
                <Link to="/contact">
                  <button className="cta-button primary large">
                    Bepul baholash olish
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  </button>
                </Link>
                <a
                  href="tel:+998881395511"
                  className="cta-button secondary large"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M22 16.92V19.92C22 20.52 21.52 21 20.92 21C9.4 21 0 11.6 0 0.08C0 -0.52 0.48 -1 1.08 -1H4.09C4.69 -1 5.17 -0.52 5.17 0.08C5.17 2.08 5.54 4.02 6.23 5.83C6.37 6.17 6.26 6.56 5.94 6.78L4.05 8.67C5.84 12.34 8.66 15.16 12.33 16.95L14.22 15.06C14.44 14.74 14.83 14.63 15.17 14.77C16.98 15.46 18.92 15.83 20.92 15.83C21.52 15.83 22 16.31 22 16.92Z"
                      fill="currentColor"
                    />
                  </svg>
                  Favqulodda qo'ng'iroq
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Premium Footer */}
      <footer className="luxury-footer">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <div className="footer-logo">
                
                <span className="footer-brand-name">RyUmarov</span>
              </div>
              <p className="footer-description">
                Toshkentda premium santexnika xizmatlari. Professional,
                ishonchli va o'zimiz amalga oshiradigan har bir loyihada
                mukammallikka sodiq.
              </p>
              <div className="footer-social">
                <a href="#" className="social-link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M18 2H6C3.79 2 2 3.79 2 6V18C2 20.21 3.79 22 6 22H18C20.21 22 22 20.21 22 18V6C22 3.79 20.21 2 18 2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M8.5 11C9.33 11 10 10.33 10 9.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11Z"
                      fill="currentColor"
                    />
                    <path d="M7 14V17H10V14H7Z" fill="currentColor" />
                    <path
                      d="M14 14V17H17V15.5C17 14.67 16.33 14 15.5 14H14Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a href="#" className="social-link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M22 4.01C21.55 4.35 21.04 4.62 20.5 4.81C19.88 4.17 18.99 3.81 18 3.81C16.02 3.81 14.41 5.42 14.41 7.4C14.41 7.73 14.45 8.04 14.53 8.34C11.83 8.2 9.42 6.8 7.8 4.65C7.45 5.25 7.25 5.95 7.25 6.71C7.25 8.17 7.99 9.45 9.15 10.18C8.46 10.16 7.81 9.97 7.25 9.65V9.7C7.25 11.43 8.49 12.88 10.13 13.26C9.8 13.35 9.45 13.4 9.09 13.4C8.84 13.4 8.6 13.37 8.37 13.32C8.85 14.75 10.18 15.79 11.75 15.82C10.52 16.79 8.96 17.36 7.27 17.36C6.93 17.36 6.6 17.34 6.27 17.29C7.86 18.32 9.75 18.9 11.78 18.9C18 18.9 21.41 13.46 21.41 8.89C21.41 8.71 21.41 8.52 21.4 8.34C22.01 7.94 22.55 7.43 23 6.84L22 4.01Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a href="https://t.me/Ry_umaroff" className="social-link">
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
              <h4 className="footer-title">Xizmatlar</h4>
              <ul className="footer-links">
                <li>
                  <Link to="/services">Uy-joy santexnikasi</Link>
                </li>
                <li>
                  <Link to="/services">Tijorat yechimlari</Link>
                </li>
                <li>
                  <Link to="/services">Favqulodda ta'mirlash</Link>
                </li>
                <li>
                  <Link to="/services">Quvur o'rnatish</Link>
                </li>
                <li>
                  <Link to="/services">Drenaj tozalash</Link>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h4 className="footer-title">Kompaniya</h4>
              <ul className="footer-links">
                <li>
                  <Link to="/about">Biz haqimizda</Link>
                </li>
                <li>
                  <Link to="/project">Loyihalarimiz</Link>
                </li>
                <li>
                  <Link to="/contact">Bog'lanish</Link>
                </li>
                <li>
                  <a href="tel:+998881395511">Favqulodda liniya</a>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h4 className="footer-title">Bog'lanish ma'lumotlari</h4>
              <div className="contact-info">
                <div className="contact-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M22 16.92V19.92C22 20.52 21.52 21 20.92 21C9.4 21 0 11.6 0 0.08C0 -0.52 0.48 -1 1.08 -1H4.09C4.69 -1 5.17 -0.52 5.17 0.08C5.17 2.08 5.54 4.02 6.23 5.83C6.37 6.17 6.26 6.56 5.94 6.78L4.05 8.67C5.84 12.34 8.66 15.16 12.33 16.95L14.22 15.06C14.44 14.74 14.83 14.63 15.17 14.77C16.98 15.46 18.92 15.83 20.92 15.83C21.52 15.83 22 16.31 22 16.92Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span>+998 88-139-55-11</span>
                </div>
                <div className="contact-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2C7.03 2 3 6.03 3 11C3 16.97 12 22 12 22S21 16.97 21 11C21 6.03 16.97 2 12 2ZM12 14.5C10.07 14.5 8.5 12.93 8.5 11S10.07 7.5 12 7.5 15.5 9.07 15.5 11 13.93 14.5 12 14.5Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span>Toshkent, O'zbekiston</span>
                </div>
                <div className="contact-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span>24/7 xizmat mavjud</span>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>
              &copy; 2024 Umarov Santexnika Xizmatlari. Barcha huquqlar
              himoyalangan.
            </p>
            <div className="footer-bottom-links">
              <a href="#">Maxfiylik siyosati</a>
              <a href="#">Xizmat shartlari</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
