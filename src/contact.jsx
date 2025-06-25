import React, { useState, useEffect } from "react";
import "./Home.css";
import "./contact.css";
import { Link, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    username: "",
    manzil: "",
    message: "",
  });
  const [successMsg, setSuccessMsg] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const telegram_bot_id = "8137627687:AAFfbIwTtXVQyAb6lrPMDE8hHOTtWzui7H4";
  const chat_id = -4661040667;

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

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "username") {
      // Remove @ symbol if user types it
      setFormData((prev) => ({
        ...prev,
        [name]: value.replace("@", ""),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const loc = `https://maps.google.com/?q=${position.coords.latitude},${position.coords.longitude}`;
          sendMessage(loc);
        },
        (error) => {
          console.error("Geolokatsiya xatosi:", error);
          sendMessage("Joylashuv olinmadi");
        }
      );
    } else {
      sendMessage("Brauzer geolokatsiyani qo'llamaydi");
    }
  };

  const sendMessage = (loc) => {
    const text = `🧰 Santexnik saytidan mijoz!\n\n👤 Ism: ${formData.name}\n📞 Telefon: ${formData.phone}\n🔗 TG.Username: @${formData.username}\n🌎 Turar joy: ${formData.manzil}\n📝 Izoh: ${formData.message}\n📍 Joylashuv: ${loc}`;

    fetch(`https://api.telegram.org/bot${telegram_bot_id}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chat_id,
        text: text,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Yuborildi:", data);

        setFormData({
          name: "",
          phone: "",
          username: "",
          manzil: "",
          message: "",
        });

        setSuccessMsg(true);
        setIsSubmitting(false);

        setTimeout(() => {
          setSuccessMsg(false);
        }, 5000);
      })
      .catch((error) => {
        console.error("Xatolik:", error);
        setIsSubmitting(false);
      });
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
              className={`nav-item ${
                location.pathname === "/" ? "active-link" : ""
              }`}
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Bosh sahifa
            </Link>
            <Link
              className={`nav-item ${
                location.pathname === "/about" ? "active-link" : ""
              }`}
              to="/about"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Biz haqimizda
            </Link>
            <Link
              className={`nav-item ${
                location.pathname === "/services" ? "active-link" : ""
              }`}
              to="/services"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Xizmatlar
            </Link>
            <Link
              className={`nav-item ${
                location.pathname === "/project" ? "active-link" : ""
              }`}
              to="/project"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Loyihalar
            </Link>
            <Link
              className={`nav-item ${
                location.pathname === "/contact" ? "active-link" : ""
              }`}
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
        <section className="page-hero contact-hero">
          <div className="section-container">
            <div className="page-hero-content" data-aos="fade-up">
              <div className="hero-badge">
                <span className="badge-icon">📞</span>
                24/7 aloqa xizmati
              </div>
              <h1 className="page-hero-title">
                Biz bilan
                <span className="title-highlight"> bog'lanish</span>
              </h1>
              <p className="page-hero-description">
                Biz bilan bog'lanish uchun quyidagi shaklni to'ldiring yoki
                ko'rsatilgan raqam va email orqali murojaat qiling. Sizning fikr
                va savollaringiz biz uchun juda muhim!
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="contact-methods">
          <div className="section-container">
            <div className="section-header" data-aos="fade-up">
              <h2 className="section-title">Bog'lanish usullari</h2>
              <p className="section-description">
                Sizga qulay bo'lgan istalgan usul orqali biz bilan bog'laning.
                Har doim javob berishga tayyormiz.
              </p>
            </div>

            <div className="contact-methods-grid">
              <div
                className="contact-method-card"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="method-icon phone">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M22 16.92V19.92C22 20.52 21.52 21 20.92 21C9.4 21 0 11.6 0 0.08C0 -0.52 0.48 -1 1.08 -1H4.09C4.69 -1 5.17 -0.52 5.17 0.08C5.17 2.08 5.54 4.02 6.23 5.83C6.37 6.17 6.26 6.56 5.94 6.78L4.05 8.67C5.84 12.34 8.66 15.16 12.33 16.95L14.22 15.06C14.44 14.74 14.83 14.63 15.17 14.77C16.98 15.46 18.92 15.83 20.92 15.83C21.52 15.83 22 16.31 22 16.92Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <h3 className="method-title">Telefon qo'ng'irog'i</h3>
                <p className="method-description">
                  To'g'ridan-to'g'ri qo'ng'iroq qiling va darhol maslahat oling
                </p>
                <a href="tel:+998881395511" className="method-action">
                  <button
                    style={{ color: "blue" }}
                    className="cta-button primary"
                  >
                    +998 88-139-55-11
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  </button>
                </a>
              </div>

              <div
                className="contact-method-card"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div className="method-icon telegram">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM17.64 8.87L15.96 17.28C15.83 17.89 15.5 18.02 15.03 17.74L12.58 15.92L11.42 17.04C11.28 17.18 11.16 17.3 10.89 17.3L11.08 14.8L15.63 10.79C15.84 10.6 15.58 10.49 15.3 10.68L9.85 14.11L7.44 13.38C6.85 13.2 6.84 12.82 7.57 12.54L16.85 8.93C17.36 8.75 17.81 9.03 17.64 8.87Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <h3 className="method-title">Telegram orqali</h3>
                <p className="method-description">
                  Telegram orqali tez va qulay muloqot qiling
                </p>
                <a href="https://t.me/Ry_umaroff" className="method-action">
                  <button
                    style={{ color: "blue" }}
                    className="cta-button secondary"
                  >
                    Telegram
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  </button>
                </a>
              </div>

              <div
                className="contact-method-card"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <div className="method-icon location">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2C7.03 2 3 6.03 3 11C3 16.97 12 22 12 22S21 16.97 21 11C21 6.03 16.97 2 12 2ZM12 14.5C10.07 14.5 8.5 12.93 8.5 11S10.07 7.5 12 7.5 15.5 9.07 15.5 11 13.93 14.5 12 14.5Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <h3 className="method-title">Pastdagi form orqali</h3>
                <p className="method-description">
                  Pasdagi formni toliq toldiring va Yuborish tugmasini Bosing
                </p>
                <div className="method-action">
                  <button
                    style={{ color: "blue" }}
                    className="cta-button secondary"
                  >
                    Form Pasda
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="contact-form-section" id="form-section">
          <div className="section-container">
            <div className="contact-form-container">
              <div className="form-wrapper" data-aos="fade-up">
                <div className="form-header">
                  <h2>Santexnik chaqirish</h2>
                  <p>
                    Quyidagi shaklni to'ldiring va biz tez orada siz bilan
                    bog'lanamiz
                  </p>
                </div>

                {successMsg && (
                  <div className="success-message">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                    Buyurtmangiz muvaffaqiyatli yuborildi! Tez orada siz bilan
                    bog'lanamiz.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Ismingiz *</label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        placeholder="To'liq ismingizni kiriting"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="form-input"
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone">Telefon raqamingiz *</label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        placeholder="+998 90 123 45 67"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-input"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="username">Telegram username</label>
                      <input
                        id="username"
                        type="text"
                        name="username"
                        placeholder="sizning_username"
                        value={formData.username}
                        onChange={handleChange}
                        className="form-input"
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="manzil">Manzilingiz *</label>
                      <input
                        id="manzil"
                        type="text"
                        name="manzil"
                        placeholder="Turar joy manzilingiz"
                        required
                        value={formData.manzil}
                        onChange={handleChange}
                        className="form-input"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Muammo yoki izoh *</label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Santexnika muammosini batafsil tasvirlab bering..."
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="form-textarea"
                      rows="4"
                      disabled={isSubmitting}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className={`cta-button primary large form-submit ${
                      isSubmitting ? "submitting" : ""
                    }`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Yuborilmoqda..." : "Buyurtma yuborish"}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info & Map */}
        <section className="contact-info-section">
          <div className="section-container">
            <div className="contact-info-container">
              <div className="contact-info-text" data-aos="fade-right">
                <h2>Bog'lanish uchun ma'lumotlar</h2>
                <p>
                  Bizning ofis joylashuvi va ish vaqtlarimiz haqida batafsil
                  ma'lumot. Har qanday savol yoki buyurtma uchun biz bilan
                  bog'laning.
                </p>

                <div className="contact-details">
                  <div className="contact-detail">
                    <div className="detail-icon">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div className="detail-content">
                      <h3>Ish vaqti</h3>
                      <p>24/7 | 08:00 dan 20:00 gacha</p>
                      <span>Favqulodda vaziyatlarda 24 soat</span>
                    </div>
                  </div>

                  <div className="contact-detail">
                    <div className="detail-icon">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M22 16.92V19.92C22 20.52 21.52 21 20.92 21C9.4 21 0 11.6 0 0.08C0 -0.52 0.48 -1 1.08 -1H4.09C4.69 -1 5.17 -0.52 5.17 0.08C5.17 2.08 5.54 4.02 6.23 5.83C6.37 6.17 6.26 6.56 5.94 6.78L4.05 8.67C5.84 12.34 8.66 15.16 12.33 16.95L14.22 15.06C14.44 14.74 14.83 14.63 15.17 14.77C16.98 15.46 18.92 15.83 20.92 15.83C21.52 15.83 22 16.31 22 16.92Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div className="detail-content">
                      <h3>Telefon raqami</h3>
                      <p>+998 88 139 55 11</p>
                      <span>Asosiy aloqa liniyasi</span>
                    </div>
                  </div>

                  <div className="contact-detail">
                    <div className="detail-icon">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM17.64 8.87L15.96 17.28C15.83 17.89 15.5 18.02 15.03 17.74L12.58 15.92L11.42 17.04C11.28 17.18 11.16 17.3 10.89 17.3L11.08 14.8L15.63 10.79C15.84 10.6 15.58 10.49 15.3 10.68L9.85 14.11L7.44 13.38C6.85 13.2 6.84 12.82 7.57 12.54L16.85 8.93C17.36 8.75 17.81 9.03 17.64 8.87Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div className="detail-content">
                      <h3>Telegram</h3>
                      <p>@Ry_umaroff</p>
                      <span>Tez aloqa uchun</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact-map" data-aos="fade-left">
                <iframe
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: "15px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Umarov Santexnika joylashuvi"
                  src="https://yandex.com/map-widget/v1/?um=constructor%3A05c63934b60b1226676e1f9087510808eff116611b58c74c26ef64f061a88e11&amp;source=constructor"
                  frameborder="0"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section">
          <div className="section-container">
            <div className="section-header" data-aos="fade-up">
              <h2 className="section-title">Tez-tez so'raladigan savollar</h2>
              <p className="section-description">
                Mijozlarimiz tomonidan eng ko'p so'raladigan savollarga javoblar
              </p>
            </div>

            <div className="faq-grid">
              <div className="faq-item" data-aos="zoom-in" data-aos-delay="100">
                <h3 className="faq-question">Qancha vaqt ichida kelasizlar?</h3>
                <p className="faq-answer">
                  Odatiy holatda 1-2 soat ichida yetib boramiz. Favqulodda
                  vaziyatlarda 30 daqiqa ichida.
                </p>
              </div>

              <div className="faq-item" data-aos="zoom-in" data-aos-delay="200">
                <h3 className="faq-question">Xizmat narxi qancha?</h3>
                <p className="faq-answer">
                  Ko'rib chiqish bepul, narx ish murakkabligiga qarab
                  belgilanadi. Shaffof va adolatli narxlash.
                </p>
              </div>

              <div className="faq-item" data-aos="zoom-in" data-aos-delay="400">
                <h3 className="faq-question">24/7 xizmat ko'rsatasizlarmi?</h3>
                <p className="faq-answer">
                  Ha, favqulodda vaziyatlarda 24 soat, kundalik xizmatlar uchun
                  08:00 dan 20:00 gacha.
                </p>
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
