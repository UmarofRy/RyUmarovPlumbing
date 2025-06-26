import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Projects.css";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Projects() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");
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
      isDarkMode ? "light" : "dark",
    );
  };

  const projects = [
    {
      id: 1,
      title: "Zara Summer Collection 2024",
      brand: "Zara",
      category: "brand",
      type: "Fashion Partnership",
      description:
        "Zara brendining yozgi kolleksiyasini tanishtirishda hamkorlik qildim. Styling tips va outfit ideas berish orqali auditoriyaga yangi moda trendlarini ko'rsatdim.",
      image:
        "https://via.placeholder.com/600x400/667eea/ffffff?text=Zara+Partnership",
      results: {
        views: "1.2M",
        engagement: "15%",
        duration: "3 hafta",
      },
      technologies: ["Fashion", "Styling", "Content Creation"],
      link: "https://youtube.com/watch?v=example1",
    },
    {
      id: 2,
      title: "Uzbekistan Travel Guide Series",
      brand: "Personal Project",
      category: "personal",
      type: "Travel Documentation",
      description:
        "O'zbekistonning eng go'zal joylarini ko'rsatish maqsadida yaratilgan video seriya. Har bir shaharga alohida video bag'ishladim.",
      image:
        "https://via.placeholder.com/600x400/f093fb/ffffff?text=Travel+Series",
      results: {
        views: "2.5M",
        engagement: "22%",
        duration: "6 oy",
      },
      technologies: ["Travel Vlogging", "Cinematography", "Cultural Research"],
      link: "https://youtube.com/watch?v=example2",
    },
    {
      id: 3,
      title: "L'Oreal Beauty Campaign",
      brand: "L'Oreal",
      category: "brand",
      type: "Beauty Partnership",
      description:
        "L'Oreal brendining yangi mahsulotlarini sinab ko'rish va makeup tutorial yaratish bo'yicha hamkorlik loyihasi.",
      image:
        "https://via.placeholder.com/600x400/4facfe/ffffff?text=L'Oreal+Campaign",
      results: {
        views: "950K",
        engagement: "18%",
        duration: "2 hafta",
      },
      technologies: ["Makeup", "Tutorial Creation", "Product Review"],
      link: "https://youtube.com/watch?v=example3",
    },
    {
      id: 4,
      title: "Sustainable Fashion Movement",
      brand: "Personal Project",
      category: "personal",
      type: "Social Initiative",
      description:
        "Ekologik toza moda haqida ongni oshirish maqsadida boshlagan loyiha. Upcycling va sustainable fashion haqida ma'lumot berish.",
      image:
        "https://via.placeholder.com/600x400/a855f7/ffffff?text=Sustainable+Fashion",
      results: {
        views: "680K",
        engagement: "25%",
        duration: "Davom etmoqda",
      },
      technologies: ["Environmental Awareness", "Upcycling", "Education"],
      link: "https://youtube.com/watch?v=example4",
    },
    {
      id: 5,
      title: "Samsung Galaxy S24 Review",
      brand: "Samsung",
      category: "brand",
      type: "Tech Partnership",
      description:
        "Yangi Samsung Galaxy S24 smartfonining lifestyle blogger nuqtai nazaridan review qilish va kamera imkoniyatlarini ko'rsatish.",
      image:
        "https://via.placeholder.com/600x400/10b981/ffffff?text=Samsung+Partnership",
      results: {
        views: "1.8M",
        engagement: "20%",
        duration: "1 hafta",
      },
      technologies: ["Tech Review", "Photography", "Mobile Content"],
      link: "https://youtube.com/watch?v=example5",
    },
    {
      id: 6,
      title: "YouTube Creator Academy",
      brand: "Personal Project",
      category: "education",
      type: "Educational Series",
      description:
        "Yangi content creator'larga yordam berish maqsadida yaratilgan ta'lim seriyasi. Video yaratish, editing va audience building haqida.",
      image:
        "https://via.placeholder.com/600x400/f59e0b/ffffff?text=Creator+Academy",
      results: {
        views: "450K",
        engagement: "30%",
        duration: "3 oy",
      },
      technologies: ["Education", "Mentoring", "Course Creation"],
      link: "https://youtube.com/watch?v=example6",
    },
    {
      id: 7,
      title: "Nike Air Max Campaign",
      brand: "Nike",
      category: "brand",
      type: "Lifestyle Partnership",
      description:
        "Nike ning yangi Air Max kolleksiyasini active lifestyle kontekstida tanishtirishda hamkorlik.",
      image:
        "https://via.placeholder.com/600x400/ef4444/ffffff?text=Nike+Campaign",
      results: {
        views: "1.4M",
        engagement: "17%",
        duration: "2 hafta",
      },
      technologies: ["Sports Fashion", "Active Lifestyle", "Product Showcase"],
      link: "https://youtube.com/watch?v=example7",
    },
    {
      id: 8,
      title: "Mental Health Awareness",
      brand: "Personal Project",
      category: "personal",
      type: "Social Impact",
      description:
        "Yoshlar orasida mental health haqida ongni oshirish va qo'llab-quvvatlash maqsadida yaratilgan loyiha.",
      image:
        "https://via.placeholder.com/600x400/8b5cf6/ffffff?text=Mental+Health",
      results: {
        views: "320K",
        engagement: "35%",
        duration: "Davom etmoqda",
      },
      technologies: ["Mental Health", "Community Support", "Awareness"],
      link: "https://youtube.com/watch?v=example8",
    },
  ];

  const categories = [
    { id: "all", name: "Barchasi", icon: "📁" },
    { id: "brand", name: "Brand Hamkorliklari", icon: "🤝" },
    { id: "personal", name: "Shaxsiy Loyihalar", icon: "💡" },
    { id: "education", name: "Ta'lim", icon: "📚" },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div
      className="projects-container"
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
                <span className="badge-icon">🚀</span>
                <span>Portfolio & Hamkorliklar</span>
              </div>
              <h1 className="page-hero-title">
                Mening
                <span className="gradient-text"> loyihalarim</span>
              </h1>
              <p className="page-hero-description">
                Yirik brendlar bilan hamkorliklar, shaxsiy kreativ loyihalar va
                ijtimoiy ta'sirli kampaniyalar. Har bir loyiha orqali yangi
                tajriba va professional o'sish.
              </p>
              <div className="hero-stats">
                <div className="stat-item glass-card">
                  <span className="stat-number gradient-text">25+</span>
                  <span className="stat-label">Brand Partnership</span>
                </div>
                <div className="stat-item glass-card">
                  <span className="stat-number youtube-text">15+</span>
                  <span className="stat-label">Shaxsiy Loyiha</span>
                </div>
                <div className="stat-item glass-card">
                  <span className="stat-number gradient-text">10M+</span>
                  <span className="stat-label">Umumiy Ko'rishlar</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="filter-section">
          <div className="section-container">
            <div className="filter-container" data-aos="fade-up">
              <h3 className="filter-title">Loyiha turlariga ko'ra saralash</h3>
              <div className="filter-buttons">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    className={`filter-btn ${selectedCategory === category.id ? "active" : ""}`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    <span className="filter-icon">{category.icon}</span>
                    <span className="filter-name">{category.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="projects-section">
          <div className="section-container">
            <div className="projects-grid">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="project-card glass-card"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                    <div className="project-overlay">
                      <div className="project-type">{project.type}</div>
                      <div className="project-brand">{project.brand}</div>
                    </div>
                  </div>

                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>

                    <div className="project-results">
                      <div className="result-item">
                        <span className="result-label">Ko'rishlar:</span>
                        <span className="result-value">
                          {project.results.views}
                        </span>
                      </div>
                      <div className="result-item">
                        <span className="result-label">Engagement:</span>
                        <span className="result-value">
                          {project.results.engagement}
                        </span>
                      </div>
                      <div className="result-item">
                        <span className="result-label">Davomiyligi:</span>
                        <span className="result-value">
                          {project.results.duration}
                        </span>
                      </div>
                    </div>

                    <div className="project-technologies">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="project-actions">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="modern-btn btn-ghost"
                      >
                        Video ko'rish
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
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="no-projects" data-aos="fade-up">
                <div className="no-projects-icon">📁</div>
                <h3>Bu kategoriyada loyihalar topilmadi</h3>
                <p>Boshqa kategoriyalarni sinab ko'ring</p>
              </div>
            )}
          </div>
        </section>

        {/* Process Section */}
        <section className="process-section">
          <div className="section-container">
            <div className="section-header" data-aos="fade-up">
              <h2 className="section-title">
                Mening ish
                <span className="gradient-text"> jarayonim</span>
              </h2>
              <p className="section-description">
                Har bir loyiha uchun professional va muvaffaqiyatli jarayon
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
                  <h3 className="step-title">Loyiha tahlili</h3>
                  <p className="step-description">
                    Brand va loyiha maqsadlarini chuqur o'rganish, target
                    auditoriya va kontent strategiyasini belgilash.
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
                  <h3 className="step-title">Kreativ rejalashtirish</h3>
                  <p className="step-description">
                    Video kontsepsiyasi, script yozish va visual elementlarni
                    rejalashtirish. Mood board va storyboard yaratish.
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
                  <h3 className="step-title">Kontent ishlab chiqish</h3>
                  <p className="step-description">
                    Professional filming, high-quality content yaratish va brand
                    message'ni samarali yetkazish.
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
                  <h3 className="step-title">Publishing va promotion</h3>
                  <p className="step-description">
                    Strategic publishing, social media promotion va audience
                    engagement'ni maksimal darajada oshirish.
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
                  <h3 className="step-title">Natijalar tahlili</h3>
                  <p className="step-description">
                    Detalli analytics, ROI o'lchash va keyingi loyihalar uchun
                    insights olish.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Collaboration CTA */}
        <section className="collaboration-cta">
          <div className="section-container">
            <div className="cta-content glass-card" data-aos="zoom-in">
              <div className="cta-icon">🤝</div>
              <h2 className="cta-title">
                Keling, birgalikda
                <span className="gradient-text"> yarataylik!</span>
              </h2>
              <p className="cta-description">
                Brendingiz uchun kreativ va ta'sirli kontent yaratishga
                tayyorman. Fashion, beauty, lifestyle yoki tech - har qanday
                sohada professional hamkorlik qilishimiz mumkin.
              </p>

              <div className="collaboration-features">
                <div className="feature-item">
                  <span className="feature-icon">📊</span>
                  <span className="feature-text">Detalli Analytics</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🎯</span>
                  <span className="feature-text">Target Audience</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">💡</span>
                  <span className="feature-text">Kreativ Yondashuv</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">⏰</span>
                  <span className="feature-text">O'z Vaqtida Topshirish</span>
                </div>
              </div>

              <div className="cta-actions">
                <Link to="/contact" className="modern-btn btn-primary">
                  Hamkorlik uchun bog'lanish
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
                <Link to="/contact" className="modern-btn btn-ghost">
                  Media Kit so'rash
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <polyline
                      points="7,10 12,15 17,10"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <line
                      x1="12"
                      y1="15"
                      x2="12"
                      y2="3"
                      stroke="currentColor"
                      strokeWidth="2"
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
                  <Link to="/videos">Videolarim</Link>
                </li>
                <li>
                  <Link to="/contact">Bog'lanish</Link>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h4 className="footer-title">Loyiha turlari</h4>
              <ul className="footer-links">
                <li>
                  <span>Brand Partnerships</span>
                </li>
                <li>
                  <span>Fashion Campaigns</span>
                </li>
                <li>
                  <span>Product Reviews</span>
                </li>
                <li>
                  <span>Social Impact</span>
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
                  <Link to="/contact">Campaign Creation</Link>
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
