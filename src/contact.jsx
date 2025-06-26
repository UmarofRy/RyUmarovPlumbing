import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./contact.css";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
    collaborationType: "brand-partnership",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);
  const location = useLocation();

  const telegram_bot_id = "8137627687:AAFfbIwTtXVQyAb6lrPMDE8hHOTtWzui7H4";
  const chat_id = -4661040667;

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
      isDarkMode ? "light" : "dark",
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const collaborationTypes = {
      "brand-partnership": "Brand Hamkorligi",
      "sponsored-content": "Sponsored Kontent",
      "product-review": "Mahsulot Review",
      "event-collaboration": "Event Hamkorligi",
      other: "Boshqa",
    };

    const text = `🎬 @hadiw_me Portfolio - Yangi murojaat!\n\n👤 Ism: ${formData.name}\n📧 Email: ${formData.email}\n🏢 Kompaniya: ${formData.company || "Ko'rsatilmagan"}\n📝 Mavzu: ${formData.subject}\n🤝 Hamkorlik turi: ${collaborationTypes[formData.collaborationType]}\n💬 Xabar: ${formData.message}\n\n📅 Vaqt: ${new Date().toLocaleString("uz-UZ")}`;

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
          email: "",
          company: "",
          subject: "",
          message: "",
          collaborationType: "brand-partnership",
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

  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      description: "Professional hamkorlik uchun",
      value: "hadiw.me@gmail.com",
      link: "mailto:hadiw.me@gmail.com",
      color: "email",
    },
    {
      icon: "🎬",
      title: "YouTube",
      description: "Kanalimga obuna bo'ling",
      value: "@hadiw_me.",
      link: "https://youtube.com/@hadiw_me.",
      color: "youtube",
    },
    {
      icon: "💬",
      title: "Telegram",
      description: "Shaxsiy aloqa uchun",
      value: "@khamidvaas",
      link: "https://t.me/khamidvaas",
      color: "telegram",
    },
  ];

  return (
    <div
      className="contact-container"
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
                <span className="badge-icon">💌</span>
                <span>Keling gaplashaylik!</span>
              </div>
              <h1 className="page-hero-title">
                Men bilan
                <span className="gradient-text"> bog'laning</span>
              </h1>
              <p className="page-hero-description">
                Hamkorlik, brand partnership, yoki shunchaki salom demоқchi
                bo'lsangiz - men sizdan eshitishdan xursandman! Har qanday
                savolingiz bo'lsa, bemalol yozing.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="contact-methods-section">
          <div className="section-container">
            <div className="section-header" data-aos="fade-up">
              <h2 className="section-title">
                Bog'lanish
                <span className="gradient-text"> usullari</span>
              </h2>
              <p className="section-description">
                Sizga qulay bo'lgan istalgan usul orqali aloqaga chiqing
              </p>
            </div>

            <div className="contact-methods-grid">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`contact-method-card glass-card ${method.color}`}
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  <div className="method-icon">{method.icon}</div>
                  <h3 className="method-title">{method.title}</h3>
                  <p className="method-description">{method.description}</p>
                  <div className="method-value">{method.value}</div>
                  <div className="method-arrow">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="contact-form-section">
          <div className="section-container">
            <div className="form-container">
              <div className="form-header" data-aos="fade-up">
                <h2 className="form-title">
                  Hamkorlik uchun
                  <span className="gradient-text"> murojaat</span>
                </h2>
                <p className="form-description">
                  Quyidagi formani to'ldiring va men tez orada siz bilan
                  bog'lanaman. Barcha maydonlarni to'ldirish majburiy.
                </p>
              </div>

              {successMsg && (
                <div className="success-message glass-card" data-aos="zoom-in">
                  <div className="success-icon">✅</div>
                  <div className="success-content">
                    <h4>Muvaffaqiyatli yuborildi!</h4>
                    <p>
                      Sizning murojaatingiz qabul qilindi. Tez orada javob
                      beraman!
                    </p>
                  </div>
                </div>
              )}

              <form
                onSubmit={handleSubmit}
                className="contact-form glass-card"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Ismingiz <span className="required">*</span>
                    </label>
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
                    <label htmlFor="email" className="form-label">
                      Email <span className="required">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="email@example.com"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="company" className="form-label">
                      Kompaniya/Brand
                    </label>
                    <input
                      id="company"
                      type="text"
                      name="company"
                      placeholder="Kompaniya nomi (ixtiyoriy)"
                      value={formData.company}
                      onChange={handleChange}
                      className="form-input"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="collaborationType" className="form-label">
                      Hamkorlik turi <span className="required">*</span>
                    </label>
                    <select
                      id="collaborationType"
                      name="collaborationType"
                      required
                      value={formData.collaborationType}
                      onChange={handleChange}
                      className="form-select"
                      disabled={isSubmitting}
                    >
                      <option value="brand-partnership">
                        Brand Partnership
                      </option>
                      <option value="sponsored-content">
                        Sponsored Content
                      </option>
                      <option value="product-review">Product Review</option>
                      <option value="event-collaboration">
                        Event Collaboration
                      </option>
                      <option value="other">Boshqa</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">
                    Mavzu <span className="required">*</span>
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    placeholder="Qisqacha mavzu kiriting"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-input"
                    disabled={isSubmitting}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Xabar <span className="required">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Hamkorlik haqida batafsil ma'lumot, maqsadlar, taklif va boshqa muhim tafsilotlarni kiriting..."
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea"
                    rows="6"
                    disabled={isSubmitting}
                  ></textarea>
                </div>

                <div className="form-actions">
                  <button
                    type="submit"
                    className={`modern-btn btn-primary large ${isSubmitting ? "submitting" : ""}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="loading-spinner"></div>
                        Yuborilmoqda...
                      </>
                    ) : (
                      <>
                        Murojaat yuborish
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13"
                            stroke="currentColor"
                            strokeWidth="2"
                          />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section">
          <div className="section-container">
            <div className="section-header" data-aos="fade-up">
              <h2 className="section-title">
                Tez-tez so'raladigan
                <span className="gradient-text"> savollar</span>
              </h2>
              <p className="section-description">
                Hamkorlik haqida eng ko'p so'raladigan savollar va javoblar
              </p>
            </div>

            <div className="faq-grid">
              <div
                className="faq-item glass-card"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h3 className="faq-question">
                  <span className="faq-icon">💰</span>
                  Hamkorlik narxlari qanday?
                </h3>
                <p className="faq-answer">
                  Narxlar loyiha turiga, kontent miqdoriga va brand talablariga
                  qarab belgilanadi. Detalli ma'lumot uchun media kit so'rang.
                </p>
              </div>

              <div
                className="faq-item glass-card"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h3 className="faq-question">
                  <span className="faq-icon">⏱️</span>
                  Loyiha qancha vaqt oladi?
                </h3>
                <p className="faq-answer">
                  Oddiy sponsored post 1-2 hafta, katta kampaniyalar 1 oy yoki
                  undan ko'p vaqt olishi mumkin. Aniq muddat loyiha
                  murakkabligiga bog'liq.
                </p>
              </div>

              <div
                className="faq-item glass-card"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <h3 className="faq-question">
                  <span className="faq-icon">📊</span>
                  Qanday statistika bera olasiz?
                </h3>
                <p className="faq-answer">
                  Har qanday loyihadan keyin detalli analytics: reach,
                  engagement, clicks, va boshqa muhim ko'rsatkichlarni taqdim
                  etaman.
                </p>
              </div>

              <div
                className="faq-item glass-card"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <h3 className="faq-question">
                  <span className="faq-icon">🎯</span>
                  Qanday brendlar bilan ishlaysiz?
                </h3>
                <p className="faq-answer">
                  Fashion, beauty, lifestyle, tech va travel sohalaridagi
                  brendlar bilan ishlashni afzal ko'raman. Lekin boshqa
                  sohalarni ham ko'rib chiqaman.
                </p>
              </div>

              <div
                className="faq-item glass-card"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <h3 className="faq-question">
                  <span className="faq-icon">📱</span>
                  Qaysi platformalarda kontent yaratiladi?
                </h3>
                <p className="faq-answer">
                  Asosan YouTube va Telegram platformalarida ishlayaman.
                  Loyihaga qarab boshqa platformalarni ham qo'shish mumkin.
                </p>
              </div>

              <div
                className="faq-item glass-card"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <h3 className="faq-question">
                  <span className="faq-icon">✨</span>
                  Mahsulot bepul berilsa ishlaysizmi?
                </h3>
                <p className="faq-answer">
                  Ha, qimmatli mahsulotlar uchun barter hamkorlik qilishim
                  mumkin. Lekin professional kontent yaratish uchun pullik
                  hamkorlikni afzal ko'raman.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Response Time */}
        <section className="response-time-section">
          <div className="section-container">
            <div className="response-card glass-card" data-aos="zoom-in">
              <div className="response-icon">⚡</div>
              <h3 className="response-title">
                Tez javob
                <span className="gradient-text"> beraman!</span>
              </h3>
              <p className="response-description">
                Odatda 24-48 soat ichida barcha murojaatlarga javob beraman.
                Urgent loyihalar uchun telefon yoki Telegram orqali bog'laning.
              </p>
              <div className="response-stats">
                <div className="response-stat">
                  <span className="stat-number gradient-text">24h</span>
                  <span className="stat-label">O'rtacha javob vaqti</span>
                </div>
                <div className="response-stat">
                  <span className="stat-number youtube-text">100%</span>
                  <span className="stat-label">Professional yondashuv</span>
                </div>
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
                  <Link to="/videos">Videolarim</Link>
                </li>
                <li>
                  <Link to="/projects">Loyihalar</Link>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h4 className="footer-title">Hamkorlik turlari</h4>
              <ul className="footer-links">
                <li>
                  <span>Brand Partnerships</span>
                </li>
                <li>
                  <span>Sponsored Content</span>
                </li>
                <li>
                  <span>Product Reviews</span>
                </li>
                <li>
                  <span>Event Collaborations</span>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h4 className="footer-title">Bog'lanish</h4>
              <ul className="footer-links">
                <li>
                  <a href="mailto:hadiw.me@gmail.com">hadiw.me@gmail.com</a>
                </li>
                <li>
                  <a
                    href="https://t.me/khamidvaas"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Telegram
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/hadiw_me"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram DM
                  </a>
                </li>
                <li>
                  <span>Media Kit</span>
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
