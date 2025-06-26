import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./about.css";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });

    // Auto-slide carousel
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % behindScenesImages.length);
    }, 4000);

    return () => clearInterval(interval);
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

  const timelineEvents = [
    {
      year: "2020",
      title: "YouTube sayohati boshlanishi",
      description:
        "Birinchi videomni yukladim va kichik auditoriya bilan tanishdim. Moda va lifestyle haqida qisqa videolar yaratdim.",
      icon: "🎬",
      achievement: "Birinchi video",
    },
    {
      year: "2021",
      title: "Kontent diversifikatsiyasi",
      description:
        "Travel vloglar, beauty tips va daily routine videolari qo'shdim. Auditoriya kengaya boshladi.",
      icon: "✈️",
      achievement: "1K obunachi",
    },
    {
      year: "2022",
      title: "Brand hamkorliklari",
      description:
        "Yirik brendlar bilan birinchi hamkorlik. Fashion week'larda ishtirok etdim va exclusive kontent yaratdim.",
      icon: "🤝",
      achievement: "5K obunachi",
    },
    {
      year: "2023",
      title: "Professional darajaga chiqish",
      description:
        "Studio yaratdim, professional equipment sotib oldim va har hafta muntazam kontent chiqara boshladim.",
      icon: "📹",
      achievement: "10K obunachi",
    },
    {
      year: "2024",
      title: "Yangi maqsadlar",
      description:
        "Podcast boshlash, kitob yozish va xalqaro brendlar bilan hamkorlik qilish rejalarim bor.",
      icon: "🚀",
      achievement: "12K+ obunachi",
    },
        {
      year: "2024",
      title: "Aslida",
      description:
        "2024 yilda youtubega kirganman. Hozirda 13 yoshdaman va YouTube orqali o'z tajribamni bo'lishaman.",
      icon: "🚀",
      achievement: "3.78K+ obunachi",
    },
  ];

  const behindScenesImages = [
    {
      url: "https://via.placeholder.com/600x400/667eea/ffffff?text=Studio+Setup",
      caption: "Mening uy studiyam",
      description: "Videolarni shu yerda yarataman",
    },
    {
      url: "https://via.placeholder.com/600x400/f093fb/ffffff?text=Filming+Process",
      caption: "Video yaratish jarayoni",
      description: "Har bir video ortida 5-6 soatlik ish bor",
    },
    {
      url: "https://via.placeholder.com/600x400/4facfe/ffffff?text=Editing+Time",
      caption: "Video editing",
      description: "Eng ko'p vaqt editing jarayoniga ketadi",
    },
    {
      url: "https://via.placeholder.com/600x400/a855f7/ffffff?text=Content+Planning",
      caption: "Kontent rejalashtirish",
      description: "Har bir video oldindan puxta rejalashtiriladi",
    },
  ];

  const hobbies = [
    {
      icon: "📚",
      title: "O'qish",
      description:
        "Har oy kamida 2 ta kitob o'qiyman. Sevimli janrim - self-development",
    },
    {
      icon: "🎨",
      title: "Rasm chizish",
      description: "Bo'sh vaqtlarimda digital art bilan shug'ullanaman",
    },
    {
      icon: "🏃‍♀️",
      title: "Sport",
      description:
        "Har kuni ertalab yoga qilaman va haftada 3 marta gym ga boraman",
    },
    {
      icon: "🧳",
      title: "Sayohat",
      description:
        "Yangi joylarni kashf qilish va turli madaniyatlar bilan tanishish",
    },
    {
      icon: "🍳",
      title: "Ovqat pishirish",
      description:
        "Yangi retseptlarni sinab ko'rish va do'stlar uchun taom tayyorlash",
    },
    {
      icon: "📸",
      title: "Fotografiya",
      description:
        "Go'zal lahzalarni saqlab qolish va estetik suratlar yaratish",
    },
  ];

  return (
    <div className="about-container" data-theme={isDarkMode ? "dark" : "light"}>
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
                <span className="badge-icon">✨</span>
                <span>Mening hikoyam</span>
              </div>
              <h1 className="page-hero-title">
                Men
                <span className="gradient-text"> Hadiya</span>
              </h1>
              <p className="page-hero-description">
                13 yoshli content creator, fashion enthusiast va moda dunyosiga
                ishtiyoqli qiz. YouTube orqali o'z tajribam va hayotimni minglab
                odamlar bilan bo'lishaman.
              </p>
            </div>
          </div>
        </section>

        {/* About Introduction */}
        <section className="about-intro">
          <div className="section-container">
            <div className="intro-content">
              <div className="intro-text" data-aos="fade-right">
                <h2 className="intro-title">
                  Mening
                  <span className="gradient-text"> sayohatim</span>
                </h2>
                <p className="intro-description">
                  Salom, men Hadiya! 2020 yildan beri YouTube platformasida faol
                  kontent yaratuvchiman. Mening maqsadim - har bir videoda sizga
                  ilhom, moda maslahatlari va hayotga ijobiy qarash berish.
                </p>
                <p className="intro-description">
                  Fashion, beauty, lifestyle va travel - bu mening eng sevimli
                  mavzularim. Har bir kuni yangilik va qiziqarli kontent
                  yaratish uchun mehnat qilaman.
                </p>

                <div className="personality-traits">
                  <div className="trait-item">
                    <span className="trait-emoji">💃</span>
                    <span className="trait-text">Energetik va hayotsevar</span>
                  </div>
                  <div className="trait-item">
                    <span className="trait-emoji">🎨</span>
                    <span className="trait-text">Kreativ va innovatsion</span>
                  </div>
                  <div className="trait-item">
                    <span className="trait-emoji">❤️</span>
                    <span className="trait-text">Samimi va ochiq</span>
                  </div>
                  <div className="trait-item">
                    <span className="trait-emoji">🌟</span>
                    <span className="trait-text">Optimist va motivator</span>
                  </div>
                </div>
              </div>

              <div className="intro-visual" data-aos="fade-left">
                <div className="profile-showcase">
                  <img
                    src="https://i.pinimg.com/736x/58/f4/93/58f493eaf9bd610c601421010a5a4e70.jpg"
                    alt="Hadiya - Content Creator"
                    className="profile-main-image"
                  />
                  <div className="profile-stats glass-card">
                    <div className="stat-row">
                      <span className="stat-label">Kontent yaratish:</span>
                      <span className="stat-value">2+ yil</span>
                    </div>
                    <div className="stat-row">
                      <span className="stat-label">Video soni:</span>
                      <span className="stat-value">150+</span>
                    </div>
                    <div className="stat-row">
                      <span className="stat-label">Umumiy ko'rishlar:</span>
                      <span className="stat-value">5M+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="timeline-section">
          <div className="section-container">
            <div className="section-header" data-aos="fade-up">
              <h2 className="section-title">
                Mening
                <span className="gradient-text"> timeline</span>
              </h2>
              <p className="section-description">
                YouTube sayohatimning eng muhim bosqichlari va yutuqlarim
              </p>
            </div>

            <div className="timeline">
              {timelineEvents.map((event, index) => (
                <div
                  key={event.year}
                  className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="timeline-content glass-card">
                    <div className="timeline-icon">{event.icon}</div>
                    <div className="timeline-year">{event.year}</div>
                    <h3 className="timeline-title">{event.title}</h3>
                    <p className="timeline-description">{event.description}</p>
                    <div className="timeline-achievement">
                      <span className="achievement-badge">
                        {event.achievement}
                      </span>
                    </div>
                  </div>
                  <div className="timeline-connector"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Behind the Scenes Carousel */}
        <section className="behind-scenes">
          <div className="section-container">
            <div className="section-header" data-aos="fade-up">
              <h2 className="section-title">
                Behind the
                <span className="gradient-text"> scenes</span>
              </h2>
              <p className="section-description">
                Video yaratish jarayoni va mening ish makonim
              </p>
            </div>

            <div
              className="carousel-container"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="carousel-main">
                <div className="carousel-image">
                  <img
                    src={behindScenesImages[currentImageIndex].url}
                    alt={behindScenesImages[currentImageIndex].caption}
                  />
                  <div className="image-info glass-card">
                    <h4>{behindScenesImages[currentImageIndex].caption}</h4>
                    <p>{behindScenesImages[currentImageIndex].description}</p>
                  </div>
                </div>
              </div>

              <div className="carousel-indicators">
                {behindScenesImages.map((_, index) => (
                  <button
                    key={index}
                    className={`indicator ${index === currentImageIndex ? "active" : ""}`}
                    onClick={() => setCurrentImageIndex(index)}
                  ></button>
                ))}
              </div>

              <div className="carousel-thumbnails">
                {behindScenesImages.map((image, index) => (
                  <div
                    key={index}
                    className={`thumbnail ${index === currentImageIndex ? "active" : ""}`}
                    onClick={() => setCurrentImageIndex(index)}
                  >
                    <img src={image.url} alt={image.caption} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Hobbies and Interests */}
        <section className="hobbies-section">
          <div className="section-container">
            <div className="section-header" data-aos="fade-up">
              <h2 className="section-title">
                Mening
                <span className="gradient-text"> qiziqishlarim</span>
              </h2>
              <p className="section-description">
                YouTube-dan tashqari vaqtimni qanday o'tkazaman
              </p>
            </div>

            <div className="hobbies-grid">
              {hobbies.map((hobby, index) => (
                <div
                  key={index}
                  className="hobby-card glass-card"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  <div className="hobby-icon">{hobby.icon}</div>
                  <h3 className="hobby-title">{hobby.title}</h3>
                  <p className="hobby-description">{hobby.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="values-section">
          <div className="section-container">
            <div className="section-header" data-aos="fade-up">
              <h2 className="section-title">
                Mening
                <span className="gradient-text"> qadriyatlarim</span>
              </h2>
              <p className="section-description">
                Hayotimda va ishimda ushlanadigan asosiy tamoyillar
              </p>
            </div>

            <div className="values-content">
              <div className="values-grid">
                <div
                  className="value-card glass-card"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="value-icon authenticity">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M20 6L9 17l-5-5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3 className="value-title">Haqiqiylik</h3>
                  <p className="value-description">
                    Har doim o'zim bo'lishga harakat qilaman. Soxta yoki yolg'on
                    kontent yaratmayman - faqat haqiqiy tajribam va fikrlarim.
                  </p>
                </div>

                <div
                  className="value-card glass-card"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="value-icon creativity">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 2l3.09 6.26L22 9l-5 4.74L18.18 21 12 17.27 5.82 21 7 13.74 2 9l6.91-1.74L12 2z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <h3 className="value-title">Kreativlik</h3>
                  <p className="value-description">
                    Har bir videoda yangi g'oya va noan'anaviy yondashuvlar
                    bilan kelishga harakat qilaman. Kreativlik - mening kuchim.
                  </p>
                </div>

                <div
                  className="value-card glass-card"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="value-icon community">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <circle
                        cx="9"
                        cy="7"
                        r="4"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M23 21v-2a4 4 0 0 0-3-3.87"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M16 3.13a4 4 0 0 1 0 7.75"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <h3 className="value-title">Jamoa</h3>
                  <p className="value-description">
                    Mening obunachim - bu katta oila. Ularning fikr-mulohazalari
                    va qo'llab-quvvatlashi menga juda muhim.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Connect CTA */}
        <section className="connect-cta">
          <div className="section-container">
            <div className="cta-content glass-card" data-aos="zoom-in">
              <h2 className="cta-title">
                Men bilan
                <span className="gradient-text"> bog'laning!</span>
              </h2>
              <p className="cta-description">
                Savollaringiz bormi? Hamkorlik haqida gaplashmoqchimisiz? Yoki
                shunchaki salom demoqchimisiz? Menga yozing!
              </p>
              <div className="cta-actions">
                <Link to="/contact" className="modern-btn btn-primary">
                  Bog'lanish
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
                <a
                  href="https://youtube.com/@hadiw_me."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modern-btn btn-youtube"
                >
                  YouTube obuna
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M23 12C23 5.925 18.075 1 12 1S1 5.925 1 12s4.925 11 11 11 11-4.925 11-11zM10 8.5l6 3.5-6 3.5v-7z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
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
