import React, { useState, useEffect } from "react";
import "./Home.css";
import "./about.css";
import AOS from "aos";
import { Link, useLocation } from 'react-router-dom'

import "aos/dist/aos.css";

export default function About() {
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
        {/* Page Hero */}
        <section className="page-hero about-hero">
          <div className="section-container">
            <div className="page-hero-content" data-aos="fade-up">
              <div className="hero-badge">
                <span className="badge-icon">🏆</span>
                2020 yildan buyon faoliyat
              </div>
              <h1 className="page-hero-title">
                Umarov Santexnika
                <span className="title-highlight"> Haqida Ma'lumot</span>
              </h1>
              <p className="page-hero-description">
                Santexnika xizmatlarida mukammallikka bag'ishlangan holda, biz
                ko'p yillik tajribani zamonaviy texnologiyalar bilan
                birlashtirib, har bir mijoz uchun ajoyib natijalar yaratamiz.
              </p>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="company-story">
          <div className="section-container">
            <div className="story-content">
              <div className="story-text" data-aos="fade-right">
                <h2 className="story-title">
                  Bizning
                  <span className="title-highlight"> Mukammallik Tarixi</span>
                </h2>
                <p className="story-description">
                  2020 yilda Toshkentda santexnika xizmatlarini inqilob qilish
                  maqsadida tashkil etilgan Umarov Santexnika kichik mahalliy
                  biznesdan professional santexnika yechimlari bo'yicha eng
                  ishonchli nomga aylanib ulguirdi.
                </p>
                <p className="story-description">
                  Sifat, innovatsiya va mijozlar memnunligiga bo'lgan
                  sodiqligimiz bizga uy-joy va tijorat sohalarida yuzlab mamnun
                  mijozlarning ishonchini qozonib berdi.
                </p>

                <div className="story-highlights">
                  <div className="highlight-item">
                    <div className="highlight-number">500+</div>
                    <div className="highlight-label">Bajarilgan Loyihalar</div>
                  </div>
                  <div className="highlight-item">
                    <div className="highlight-number">100%</div>
                    <div className="highlight-label">Mijozlar Memnunligi</div>
                  </div>
                  <div className="highlight-item">
                    <div className="highlight-number">24/7</div>
                    <div className="highlight-label">Tezkor Xizmat</div>
                  </div>
                  <div className="highlight-item">
                    <div className="highlight-number">4+</div>
                    <div className="highlight-label">Yillik Tajriba</div>
                  </div>
                </div>
              </div>

              <div className="story-visual" data-aos="fade-left">
                <div className="story-image-container">
                  <img
                    src="../public/bg.png"
                    alt="Bizning Ustaxonamiz"
                    className="story-image"
                  />
                  <div
                    className="quality-badge"
                    data-aos="zoom-in"
                    data-aos-delay="400"
                  >
                    <div className="badge-icon">⭐</div>
                    <div className="badge-content">
                      <span className="badge-title">Premium</span>
                      <span className="badge-subtitle">Sifatli Xizmat</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="company-values">
          <div className="section-container">
            <div className="section-header" data-aos="fade-up">
              <h2 className="section-title">Bizning Asosiy Qadriyatlarimiz</h2>
              <p className="section-description">
                Biz amalga oshiradigan barcha ishlar va taqdim etadigan har bir
                xizmatni boshqaradigan tamoyillar.
              </p>
            </div>

            <div className="values-grid">
              <div
                className="value-card"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="value-icon excellence">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2L15.09 8.26L22 9L16 14.74L17.18 21.02L12 18.26L6.82 21.02L8 14.74L2 9L8.91 8.26L12 2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <h3 className="value-title">Mukammallik</h3>
                <p className="value-description">
                  Biz har bir loyihada kamolotga intiladi, eng yuqori sifatli
                  materiallar va eng so'nggi texnologiyalardan foydalanib, uzoq
                  muddatli natijalarni ta'minlaymiz.
                </p>
              </div>

              <div
                className="value-card"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div className="value-icon reliability">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M9 12L11 14L15 10"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="value-title">Ishonchlilik</h3>
                <p className="value-description">
                  Bizga vaqtida, har doim yetkazishimiz uchun ishonishingiz
                  mumkin. Aniqlik va ishonchlilikka bo'lgan sodiqligimiz butun
                  Toshkent bo'ylab e'tiborni qozondi.
                </p>
              </div>

              <div
                className="value-card"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <div className="value-icon innovation">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2V6M12 18V22M4.93 4.93L7.76 7.76M16.24 16.24L19.07 19.07M2 12H6M18 12H22M4.93 19.07L7.76 16.24M16.24 7.76L19.07 4.93"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="5"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <h3 className="value-title">Innovatsiya</h3>
                <p className="value-description">
                  Biz zamonaviy texnologiya va innovatsion yechimlarni qabul
                  qilib, murakkab santexnika muammolarini samarali va ta'sirli
                  hal qilamiz.
                </p>
              </div>

              
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="about-team">
          <div className="section-container">
            <div className="section-header" data-aos="fade-up">
              <h2 className="section-title">
                Mutaxassis Jamoamiz bilan Tanishing
              </h2>
              <p className="section-description">
                Ko'p yillik tajriba va ajoyib santexnika xizmatlarini
                ko'rsatishga ishtiyoq bilan sertifikatlangan mutaxassislar.
              </p>
            </div>

            <div className="team-detailed-grid">
              <div
                className="team-detailed-card"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="team-detailed-image">
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/006/026/787/non_2x/avatar-profile-default-social-media-photo-icon-in-flat-style-vector.jpg"
                    alt="Umarov Raxmadjon"
                  />
                </div>
                <div className="team-detailed-info">
                  <h3 className="team-detailed-name">Umarov Raxmadjon</h3>
                  <p className="team-detailed-role">
                    Katta Santexnik va Yetakchi
                  </p>
                  <p className="team-detailed-bio">
                    Uy-joy va tijorat santexnikasida 4+ yillik tajriba bilan
                    Raxmadjon Toshkentda tengsiz sifat va xizmat ko'rsatish
                    maqsadida Umarov Santexnikani tashkil etdi.
                  </p>
                  <div className="team-detailed-specialties">
                    <span className="specialty-tag">Favqulodda Ta'mirlash</span>
                    <span className="specialty-tag">Tizim O'rnatish</span>
                    <span className="specialty-tag">Tijorat Loyihalari</span>
                  </div>
                </div>
              </div>

              <div
                className="team-detailed-card"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div className="team-detailed-image">
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/006/026/787/non_2x/avatar-profile-default-social-media-photo-icon-in-flat-style-vector.jpg"
                    alt="Umarov Axmadjon"
                  />
                </div>
                <div className="team-detailed-info">
                  <h3 className="team-detailed-name">Umarov Abduvohid</h3>
                  <p className="team-detailed-role">Yordamchi Shogird</p>
                  <p className="team-detailed-bio">
                    Murakkab o'rnatishlar va favqulodda xizmatlar bo'yicha
                    mutaxassislik qilgan Abduvohid har bir loyihaga texnik
                    tajriba va muammolarni hal qilish mahoratini olib keladi.
                  </p>
                  <div className="team-detailed-specialties">
                    <span className="specialty-tag">Quvur O'rnatish</span>
                    <span className="specialty-tag">Suv Isitgichlari</span>
                    <span className="specialty-tag">Drenaj Tozalash</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications & Awards */}
        <section className="certifications">
          <div className="section-container">
            <div className="section-header" data-aos="fade-up">
              <h2 className="section-title">Sertifikatlar va E'tiroflar</h2>
              <p className="section-description">
                Professional mukammallikka bo'lgan sodiqligimiz sertifikatlar va
                sanoat mukofotlari orqali e'tirof etilgan.
              </p>
            </div>

            <div className="certifications-grid">
              <div
                className="certification-card"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="cert-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2L13.09 8.26L22 9L13.09 15.74L12 22L10.91 15.74L2 9L10.91 8.26L12 2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <h3 className="cert-title">Litsenziyalangan Mutaxassislar</h3>
                <p className="cert-description">
                  To'liq litsenziyalangan va sug'urtalangan santexnika
                  pudratchilar
                </p>
              </div>

              <div
                className="certification-card"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div className="cert-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M9 12L11 14L15 10"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <h3 className="cert-title">Sifat Kafolati</h3>
                <p className="cert-description">
                  Barcha xizmatlar uchun 100% memnunlik kafolati
                </p>
              </div>

              <div
                className="certification-card"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <div className="cert-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1L9 7V9C9 10.1 9.9 11 11 11V13C11 14.1 11.9 15 13 15H11V17C11 18.1 11.9 19 13 19H15C16.1 19 17 18.1 17 17V15H15C13.9 15 13 14.1 13 13V11C14.1 11 15 10.1 15 9Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <h3 className="cert-title">Mukofot Sohibi</h3>
                <p className="cert-description">
                  2023 yil mijozlarga xizmat ko'rsatishda mukammallik
                </p>
              </div>

              <div
                className="certification-card"
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                <div className="cert-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2L3 7L12 12L21 7L12 2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 17L12 22L21 17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 12L12 17L21 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="cert-title">Ekologik Toza</h3>
                <p className="cert-description">
                  Atrof-muhitga ehtiyotkor amaliyotlar va materiallar
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="luxury-cta">
          <div className="section-container">
            <div className="cta-content" data-aos="zoom-in">
              <h2 className="cta-title">Biz Bilan Ishlashga Tayyormisiz?</h2>
              <p className="cta-description">
                Professional tajriba va chinakam g'amxo'rlik har bir santexnika
                loyihasida qanday farq qilishini his eting.
              </p>
              <div className="cta-actions">
                <Link to="/contact">
                  <button className="cta-button primary large">
                    Bepul Maslahat Olish
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  </button>
                </Link>
                <Link to="/services">
                  <button className="cta-button secondary large">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M3 12L5 10M5 10L12 3L19 10M5 10V20C5 20.6 5.4 21 6 21H9M19 10L21 12M19 10V20C19 20.6 18.6 21 18 21H15M9 21C9.6 21 10 20.6 10 20V16C10 15.4 10.4 15 11 15H13C13.6 15 14 15.4 14 16V20C14 20.6 14.4 21 15 21M9 21H15"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                    Xizmatlarimizni Ko'rish
                  </button>
                </Link>
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
                  <Link to="/services">Uy-Joy Santexnikasi</Link>
                </li>
                <li>
                  <Link to="/services">Tijorat Yechimlari</Link>
                </li>
                <li>
                  <Link to="/services">Favqulodda Ta'mirlash</Link>
                </li>
                <li>
                  <Link to="/services">Quvur O'rnatish</Link>
                </li>
                <li>
                  <Link to="/services">Drenaj Tozalash</Link>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h4 className="footer-title">Kompaniya</h4>
              <ul className="footer-links">
                <li>
                  <Link to="/about">Biz Haqimizda</Link>
                </li>
                <li>
                  <Link to="/project">Loyihalarimiz</Link>
                </li>
                <li>
                  <Link to="/contact">Bog'lanish</Link>
                </li>
                <li>
                  <a href="tel:+998881395511">Favqulodda Liniya</a>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h4 className="footer-title">Bog'lanish Ma'lumotlari</h4>
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
                  <span>24/7 Xizmat Mavjud</span>
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
              <a href="#">Maxfiylik Siyosati</a>
              <a href="#">Xizmat Shartlari</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
