import React, { useState, useEffect } from "react";

import "./Home.css";
import "./Services.css";
import AOS from "aos";
import { Link, useLocation } from 'react-router-dom'

import "aos/dist/aos.css";

export default function Services() {




  const location = useLocation()








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

  const services = [
    {
      icon: "/icon.svg",
      title: "Kran o'rnatish va ta'mirlash",
      description:
        "Sifatli kran o'rnatish va ta'mirlash xizmatlari. Uyingizda suv tizimi doimo soz ishlashini ta'minlaymiz.",
    },
    {
      icon: "/Group.svg",
      title: "Quvur ta'mirlashi",
      description:
        "Har qanday quvur muammosini tezkor hal qilamiz. Professional asboblar va tajribali ustalar.",
    },
    {
      icon: "/Vector.svg",
      title: "Suv isitgich xizmati",
      description:
        "Suv isitgichlarni o'rnatish, ta'mirlash va texnik xizmat ko'rsatish. Kafolat bilan.",
    },
    {
      icon: "/Group 274.svg",
      title: "Kanalizatsiya tozalash",
      description:
        "Kanalizatsiya tizimini professional tozalash va nosozliklarni bartaraf etish.",
    },
    {
      icon: "/Group.svg",
      title: "Hammom santexnikasi",
      description:
        "Hammom xonasida barcha santexnika ishlarini bajarish. Zamonaviy yechimlar.",
    },
    {
      icon: "/Vector.svg",
      title: "Oshxona santexnikasi",
      description:
        "Oshxonada santexnika o'rnatish va ta'mirlash. Sifatli materiallar.",
    },
    {
      icon: "/Group 274.svg",
      title: "24/7 tezkor yordam",
      description:
        "Favqulodda vaziyatlarda tezkor yordam. Har doim sizning xizmatingizdamiz.",
    },
    {
      icon: "/Group.svg",
      title: "Suv filtr tizimi",
      description:
        "Suv tozalash tizimlarini o'rnatish va texnik xizmat ko'rsatish.",
    },
    {
      icon: "/icon.svg",
      title: "Nasos o'rnatish",
      description:
        "Har xil turdagi nasoslarni o'rnatish va ta'mirlash xizmatlari.",
    },
    {
      icon: "/Vector.svg",
      title: "Pol isitish tizimi",
      description: "Zamonaviy pol isitish tizimlarini o'rnatish va sozlash.",
    },
    {
      icon: "/Group 274.svg",
      title: "Unitaz o'rnatish",
      description:
        "Har xil turdagi unitazlarni professional o'rnatish va ulash.",
    },
    {
      icon: "/Group.svg",
      title: "Dush kabina xizmati",
      description: "Dush kabinalarini o'rnatish, ta'mirlash va texnik xizmat.",
    },
  ];

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
                  <button  className="cta-button primary">
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
        <section className="page-hero services-hero">
          <div className="section-container">
            <div className="page-hero-content" data-aos="fade-up">
              <div className="hero-badge">
                <span className="badge-icon">🔧</span>
                Keng qamrovli xizmatlar
              </div>
              <h1 className="page-hero-title">
                Professional
                <span className="title-highlight"> santexnika xizmatlari</span>
              </h1>
              <p className="page-hero-description">
                Quvur ta'miridan to'liq o'rnatishgacha — ishonchli, tez va arzon
                santexnika yechimlari. Barcha xizmatlarimiz sifat kafolati
                bilan.
              </p>
            </div>
          </div>
        </section>

        {/* Services Introduction */}
        <section className="services-intro">
          <div className="section-container">
            <div className="services-intro-content" data-aos="fade-up">
              <h2 className="section-title">Bizning xizmatlarimiz</h2>
              <p className="section-description">
                Bizning santexnika xizmatlarimiz ishonchli, sifatli va
                professional yechimlar taklif qiladi. Har qanday quvur ta'miri,
                kran o'rnatish, suv tizimi muammolari yoki nasos ishlari
                bo'yicha tezkor va arzon xizmatlarni kafolatlaymiz. Tajribali
                mutaxassislarimiz zamonaviy asboblar bilan kelib, muammoni qisqa
                vaqt ichida hal qiladi.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="services-grid-section">
          <div className="section-container">
            <div className="services-grid" data-aos="fade-up">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="service-card"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  <div className="service-icon">
                    <img src={service.icon} alt={service.title} />
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  <Link to="/contact" className="service-action">
                    <button style={{color:"blue"}} className="cta-button secondary">
                      Buyurtma berish
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M7 17L17 7M17 7H7M17 7V17"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="why-choose-us">
          <div className="section-container">
            <div className="section-header" data-aos="fade-up">
              <h2 className="section-title">Nima uchun bizni tanlash kerak?</h2>
              <p className="section-description">
                Bizning professional jamoamiz va sifatli xizmatlarimiz bilan
                tanishib, nima uchun mijozlarimiz bizni tanlayotganini bilib
                oling.
              </p>
            </div>

            <div className="advantages-grid">
              

              <div
                className="advantage-card"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div className="advantage-icon speed">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <h3 className="advantage-title">Tezkor xizmat</h3>
                <p className="advantage-description">
                  24/7 tezkor javob berish va favqulodda vaziyatlarda bir soat
                  ichida yetib borish.
                </p>
              </div>

              <div
                className="advantage-card"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <div className="advantage-icon experience">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2L3 7L12 12L21 7L12 2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M3 17L12 22L21 17"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M3 12L12 17L21 12"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <h3 className="advantage-title">Tajriba</h3>
                <p className="advantage-description">
                  4+ yillik tajriba va 500+ muvaffaqiyatli loyiha bizning
                  malakamizning dalili.
                </p>
              </div>

              <div
                className="advantage-card"
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                <div className="advantage-icon warranty">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <h3 className="advantage-title">Kafolat</h3>
                <p className="advantage-description">
                  Barcha ishlarimizga to'liq kafolat beramiz va mijoz memnunligi
                  bizning ustuvorligimiz.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="process-section">
          <div className="section-container">
            <div className="section-header" data-aos="fade-up">
              <h2 className="section-title">Ish jarayoni</h2>
              <p className="section-description">
                Bizning sodda va samarali 4 bosqichli ish jarayonimiz orqali
                sizning santexnika muammolaringizni hal qilamiz.
              </p>
            </div>

            <div className="process-steps">
              <div
                className="process-step"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="step-number">01</div>
                <div className="step-content">
                  <h3 className="step-title">Qo'ng'iroq va maslahat</h3>
                  <p className="step-description">
                    Muammoingizni aytib bering, biz bepul maslahat beramiz va
                    eng yaxshi yechimni taklif qilamiz.
                  </p>
                </div>
              </div>

              <div
                className="process-step"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="step-number">02</div>
                <div className="step-content">
                  <h3 className="step-title">Ko'rib chiqish va baholash</h3>
                  <p className="step-description">
                    Mutaxassisimiz joyga kelib, muammoni batafsil ko'rib chiqadi
                    va ishning aniq narxini belgilaydi.
                  </p>
                </div>
              </div>

              <div
                className="process-step"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="step-number">03</div>
                <div className="step-content">
                  <h3 className="step-title">Professional ish</h3>
                  <p className="step-description">
                    Sifatli materiallar va zamonaviy asboblar yordamida ishni
                    tez va sifatli bajaramiz.
                  </p>
                </div>
              </div>

              <div
                className="process-step"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="step-number">04</div>
                <div className="step-content">
                  <h3 className="step-title">Kafolat va qo'llab-quvvatlash</h3>
                  <p className="step-description">
                    Ishni tugallab, kafolat beramiz va kerakda texnik yordam
                    ko'rsatamiz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Section */}
        <section className="emergency-section">
          <div className="section-container">
            <div className="emergency-content" data-aos="zoom-in">
              <div className="emergency-text">
                <h2 className="emergency-title">Favqulodda vaziyat?</h2>
                <p className="emergency-description">
                  Suv sizishi, quvur yorilishi yoki boshqa shoshilinch
                  santexnika muammolari uchun 24/7 tezkor xizmat. Bir qo'ng'iroq
                  qiling!
                </p>
                <div className="emergency-actions">
                  <a
                    href="tel:+998881395511"
                    className="cta-button primary large emergency-btn"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M22 16.92V19.92C22 20.52 21.52 21 20.92 21C9.4 21 0 11.6 0 0.08C0 -0.52 0.48 -1 1.08 -1H4.09C4.69 -1 5.17 -0.52 5.17 0.08C5.17 2.08 5.54 4.02 6.23 5.83C6.37 6.17 6.26 6.56 5.94 6.78L4.05 8.67C5.84 12.34 8.66 15.16 12.33 16.95L14.22 15.06C14.44 14.74 14.83 14.63 15.17 14.77C16.98 15.46 18.92 15.83 20.92 15.83C21.52 15.83 22 16.31 22 16.92Z"
                        fill="currentColor"
                      />
                    </svg>
                    +998 88-139-55-11
                  </a>
                  <div className="emergency-features">
                    <span>🚨 24/7 xizmat</span>
                    <span>⚡ 1 soatda yetib borish</span>
                    <span>🔧 Professional yordam</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="luxury-cta">
          <div className="section-container">
            <div className="cta-content" data-aos="zoom-in">
              <h2 className="cta-title">
                Bizning xizmatlardan foydalanishga tayyormisiz?
              </h2>
              <p className="cta-description">
                Bugun biz bilan bog'laning va professional santexnika
                mutaxassislarimiz sizning barcha ehtiyojlaringizni yuqori sifat
                bilan qondirsin.
              </p>
              <div className="cta-actions">
                <Link to="/contact">
                  <button className="cta-button primary large">
                    Bepul maslahat olish
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  </button>
                </Link>
                <Link to="/project">
                  <button className="cta-button secondary large">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M3 12L5 10M5 10L12 3L19 10M5 10V20C5 20.6 5.4 21 6 21H9M19 10L21 12M19 10V20C19 20.6 18.6 21 18 21H15M9 21C9.6 21 10 20.6 10 20V16C10 15.4 10.4 15 11 15H13C13.6 15 14 15.4 14 16V20C14 20.6 14.4 21 15 21M9 21H15"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                    Loyihalarni ko'rish
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
