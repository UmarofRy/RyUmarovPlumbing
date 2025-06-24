import React, { useState, useEffect } from "react";

import "./Home.css";
import "./project.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, useLocation } from 'react-router-dom'


export default function Project() {
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

  const projects = [
    {
      title: "Uy-Joy Santexnikasi",
      subtitle: "Hammom Santexnika Loyihasi",
      description:
        "Zamonaviy hammom: qulaylik, funksionallik va ishonchli santexnika bir joyda 🛁✨",
      image:
        "https://do5nkkzntcenb.cloudfront.net/Project/Sites/Lixil/shared/PROMO-Card/AS/category/Bathroom/bathroom-faucets/aspirations/AspirationsEnvironmentFullT061901002AM00854400213TU0615070027061821002706121000270611900027061024002.jpg?h=500&la=en-CA&w=500",
      category: "Uy-Joy",
      duration: "2 hafta",
    },
    {
      title: "Uy-Joy Santexnikasi",
      subtitle: "Oshxona Santexnika Loyihasi",
      description:
        "Foydalanuvchi qulayligi va estetikani birlashtirgan zamonaviy oshxona santexnika tizimi 🍴💦",
      image:
        "https://maestrobath.com/cdn/shop/products/KIT-DES-BNI-1_1024x.jpg?v=1646445530",
      category: "Uy-Joy",
      duration: "1 hafta",
    },
    {
      title: "Uy-Joy Santexnikasi",
      subtitle: "Dush va Vanna O'rnatish",
      description:
        "Zamonaviy va ishonchli uy santexnika yechimlari – qulaylik bizdan boshlanadi 🛠️💦",
      image:
        "https://www.superserviceplumbing.com/wp-content/uploads/2025/01/shower-plumbing-superserviceplumbing-santarosa-scaled.jpg",
      category: "Uy-Joy",
      duration: "3 kun",
    },
    {
      title: "Uy-Joy Santexnikasi",
      subtitle: "Quvurlarni O'rnatish va Ta'mirlash",
      description:
        "Professional quvur o'rnatish va ta'mirlash – ustaxonada ishonchli, toza va tez yechimlar!",
      image:
        "https://barlowplumbing.net/images/male-plumber-hands-fixing-metal-sink-pipe.jpg",
      category: "Ta'mirlash",
      duration: "2 kun",
    },
    {
      title: "Uy-Joy Santexnikasi",
      subtitle: "Nasos, Filtr va Suv Isitgichlar",
      description:
        "Nasos, filtr va suv isitgich o'rnatish — tez, ishonchli va toza uy santexnika yechimi!",
      image:
        "https://navien-production-3.s3-us-west-2.amazonaws.com/2021/10/26/21/07/37/1e8d030f-f2b4-466e-9666-7f58c7e1f304/PeakFlow-S-NPE2-installation.png",
      category: "O'rnatish",
      duration: "1 hafta",
    },
    {
      title: "Uy-Joy Santexnikasi",
      subtitle: "Pol Isitish Tizimi",
      description:
        "Pol isitish tizimi o'rnatish – teng taqsimlangan issiqlik, energiya tejash va zamonaviy qulaylik!",
      image:
        "https://static.plumbingsuperstore.co.uk/help-and-advice/wp-content/uploads/2023/03/Wet-underfloor-heating-layers-1024x768.jpeg",
      category: "O'rnatish",
      duration: "1 hafta",
    },
    {
      title: "Uy-Joy Santexnikasi",
      subtitle: "Kran va Quvur Oqishini Tuzatish",
      description:
        "Professional kran va quvur oqishini tuzatish – tez, ishonchli va sifatli xizmat!",
      image:
        "https://nicholson-hvac.com/wp-content/uploads/2022/10/Water-Leak-Pipe-Sink-Detection-Repair-Professional.jpg",
      category: "Ta'mirlash",
      duration: "1 kun",
    },
    {
      title: "Uy-Joy Santexnikasi",
      subtitle: "Unitaz O'rnatish",
      description: "Unitaz o'rnatish — tez, toza va sifatli xizmat!",
      image:
        "https://static.wixstatic.com/media/196950_0a65ee3831de46ff866b4078e682bab8~mv2.png/v1/fill/w_672%2Ch_448%2Cal_c%2Cq_85%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/toilet-installation-and-upgrades.png",
      category: "O'rnatish",
      duration: "4 soat",
    },
    {
      title: "Uy-Joy Santexnikasi",
      subtitle: "Kompleks Santexnika Yechimlari",
      description:
        "Kran oqyaptimi? Quvur singdimi? Qaysi muammo bo'lishidan qat'i nazar — biz hal qilamiz",
      image:
        "https://static.vecteezy.com/system/resources/previews/011/248/016/non_2x/plumbing-logo-design-business-template-illustration-of-faucet-plumbing-home-logo-design-template-free-vector.jpg",
      category: "Kompleks",
      duration: "O'zgaruvchan",
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
        <section className="page-hero projects-hero">
          <div className="section-container">
            <div className="page-hero-content" data-aos="fade-up">
              <div className="hero-badge">
                <span className="badge-icon">🏗️</span>
                500+ Muvaffaqiyatli Loyiha
              </div>
              <h1 className="page-hero-title">
                Bizning
                <span className="title-highlight"> Loyihalarimiz</span>
              </h1>
              <p className="page-hero-description">
                Bu bo'limda biz amalga oshirgan turli santexnika ishlaridan
                namunalar jamlangan. Uy-joydan tortib ofis va do'konlargacha
                bo'lgan obyektlarda professional xizmatlarimizni ko'rishingiz
                mumkin.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Stats */}
        <section className="projects-stats">
          <div className="section-container">
            <div className="stats-grid" data-aos="fade-up">
              <div className="stat-card">
                <div className="stat-number">500+</div>
                <div className="stat-label">Bajarilgan Loyihalar</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">100%</div>
                <div className="stat-label">Mijozlar Memnunligi</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">4+</div>
                <div className="stat-label">Yillik Tajriba</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Xizmat Vaqti</div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="projects-grid-section">
          <div className="section-container">
            <div className="section-header" data-aos="fade-up">
              <h2 className="section-title">Loyihalar Galeriyasi</h2>
              <p className="section-description">
                Har bir loyiha sifat, aniqlik va mijoz memnunligi bilan
                yakunlangan. Bizning professional ishlarimizga qarang.
              </p>
            </div>

            <div className="projects-grid" data-aos="fade-up">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="project-card"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  <div className="project-card-inner">
                    <div
                      className="project-card-front"
                      style={{ backgroundImage: `url(${project.image})` }}
                    >
                      <div className="project-card-overlay">
                        <div className="project-badges">
                          <span className="project-category">
                            {project.category}
                          </span>
                          <span className="project-duration">
                            {project.duration}
                          </span>
                        </div>
                        <div className="project-card-content">
                          <h3 className="project-title">{project.subtitle}</h3>
                          <p className="project-summary">
                            Ko'proq ma'lumot uchun kartani aylantiring
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="project-card-back">
                      <div className="project-card-back-content">
                        <h3 className="project-back-title">
                          {project.subtitle}
                        </h3>
                        <p className="project-description">
                          {project.description}
                        </p>
                        <div className="project-details">
                          <div className="project-detail">
                            <span className="detail-label">Kategoriya:</span>
                            <span className="detail-value">
                              {project.category}
                            </span>
                          </div>
                          <div className="project-detail">
                            <span className="detail-label">Davomiyligi:</span>
                            <span className="detail-value">
                              {project.duration}
                            </span>
                          </div>
                        </div>
                        <Link to="/contact" className="project-cta">
                          <button className="cta-button secondary small">
                            Buyurtma berish
                            <svg
                              width="14"
                              height="14"
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
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="project-process">
          <div className="section-container">
            <div className="section-header" data-aos="fade-up">
              <h2 className="section-title">Loyiha Jarayoni</h2>
              <p className="section-description">
                Bizning professional 5 bosqichli jarayonimiz orqali har bir
                loyihani mukammal natija bilan yakunlaymiz.
              </p>
            </div>

            <div className="process-timeline">
              <div
                className="process-step"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="step-number">01</div>
                <div className="step-content">
                  <h3 className="step-title">Dastlabki Maslahat</h3>
                  <p className="step-description">
                    Loyihangizni muhokama qilamiz, talablaringizni eshitamiz va
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
                  <h3 className="step-title">Joyni Ko'rib Chiqish</h3>
                  <p className="step-description">
                    Mutaxassisimiz joyga kelib, batafsil tekshiruv o'tkazadi va
                    aniq narx-smeta tayyorlaydi.
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
                  <h3 className="step-title">Rejalashtirish</h3>
                  <p className="step-description">
                    Loyiha rejasini tuzamiz, materiallarni tanlaymiz va ish
                    jadvalini belgilaymiz.
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
                  <h3 className="step-title">Amalga Oshirish</h3>
                  <p className="step-description">
                    Sifatli materiallar va zamonaviy asboblar bilan ishni
                    professional tarzda bajaramiz.
                  </p>
                </div>
              </div>

              <div
                className="process-step"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div className="step-number">05</div>
                <div className="step-content">
                  <h3 className="step-title">Topshirish va Kafolat</h3>
                  <p className="step-description">
                    Loyihani topshiramiz, sinab ko'ramiz va to'liq kafolat bilan
                    topshiramiz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Commercial Service */}
        <section className="commercial-showcase">
          <div className="section-container">
            <div className="commercial-content" data-aos="zoom-out-right">
              <div className="commercial-image">
                <img src="../public/bg.png" alt="Tijorat Xizmati" />
              </div>
              <div className="commercial-text">
                <h2>Tijorat Xizmatlari</h2>
                <p>
                  Bu xizmat turli biznes obyektlari — do'kon, ofis, restoran va
                  boshqa tijorat joylarida santexnika tizimlarini o'rnatish va
                  ta'mirlashni o'z ichiga oladi. Ishlar professional darajada,
                  xavfsizlik va standartlarga muvofiq bajariladi.
                </p>
                <div className="commercial-features">
                  <div className="feature">✓ Katta hajmdagi loyihalar</div>
                  <div className="feature">✓ Professional jamoa</div>
                  <div className="feature">✓ Muddatida topshirish</div>
                  <div className="feature">✓ Kafolat va qo'llab-quvvatlash</div>
                </div>
                <Link to="/contact">
                  <button className="cta-button primary">
                    Tijorat Buyurtmasi
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
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="projects-testimonials">
          <div className="section-container">
            <div className="section-header" data-aos="fade-up">
              <h2 className="section-title">Mijozlar Fikrlari</h2>
              <p className="section-description">
                Loyihalarimiz bo'yicha mijozlarimizning haqiqiy fikrlari va
                baholari
              </p>
            </div>

            <div className="testimonials-grid">
              <div
                className="testimonial-card"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
                <blockquote className="testimonial-quote">
                  "Hammom loyihasi ajoyib bajarildi! Mutaxassislar professional,
                  ishni vaqtida tugatdilar. Natijadan juda mamnunmiz."
                </blockquote>
                <div className="testimonial-author">
                  <span className="author-name">Dilshod M.</span>
                  <span className="author-project">Hammom Ta'mirlash</span>
                </div>
              </div>

              <div
                className="testimonial-card"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
                <blockquote className="testimonial-quote">
                  "Oshxona santexnikasi mukammal o'rnatildi. Toza ish, sifatli
                  materiallar. Hamma narsadan mamnun qoldik."
                </blockquote>
                <div className="testimonial-author">
                  <span className="author-name">Malika K.</span>
                  <span className="author-project">Oshxona O'rnatish</span>
                </div>
              </div>

              <div
                className="testimonial-card"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
                <blockquote className="testimonial-quote">
                  "Favqulodda vaziyatda tezda keldilar, muammoni hal qildilar.
                  Professional yondashuv va sifatli xizmat."
                </blockquote>
                <div className="testimonial-author">
                  <span className="author-name">Otabek R.</span>
                  <span className="author-project">Favqulodda Ta'mirlash</span>
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
                O'z Loyihangizni Boshlashga Tayyormisiz?
              </h2>
              <p className="cta-description">
                Bizning professional jamoamiz sizning santexnika loyihangizni
                eng yuqori sifat va e'tibor bilan amalga oshirishga tayyor.
              </p>
              <div className="cta-actions">
                <Link to="/contact">
                  <button className="cta-button primary large">
                    Loyiha Uchun Ariza
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
                  Darhol Qo'ng'iroq
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
