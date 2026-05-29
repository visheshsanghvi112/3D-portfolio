import { useEffect, useRef, useState } from "react";
import { MdArrowOutward, MdArrowBack, MdFilterList, MdSearch, MdGridView, MdViewAgenda } from "react-icons/md";
import { allProjects } from "../data/projects";
import "./styles/Projects.css";

const Projects = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState("All");
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "masonry">("masonry");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Get unique categories
  const categories = ["All", ...new Set(allProjects.map(p => p.category))];
  
  // Filter and search projects
  const filteredProjects = allProjects.filter(p => {
    const matchesCategory = filter === "All" || p.category === filter;
    const matchesSearch = searchQuery === "" || 
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tools.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Handle scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    // The home page GSAP ScrollSmoother sets body overflow:hidden as inline style
    // Force scroll back on this page - AGGRESSIVE FIX
    const forceScroll = () => {
      console.log("🔧 Forcing scroll on projects page...");
      document.body.style.overflow = "auto";
      document.body.style.overflowX = "hidden";
      document.body.style.height = "auto";
      document.body.style.maxHeight = "none";
      document.documentElement.style.overflow = "auto";
      document.documentElement.style.overflowX = "hidden";
      document.documentElement.style.height = "auto";
      console.log("✅ Body overflow:", window.getComputedStyle(document.body).overflow);
      console.log("✅ Body height:", window.getComputedStyle(document.body).height);
      console.log("✅ Document scroll height:", document.documentElement.scrollHeight);
      console.log("✅ Window inner height:", window.innerHeight);
    };

    forceScroll();
    // Run multiple times to ensure it sticks
    setTimeout(forceScroll, 50);
    setTimeout(forceScroll, 100);
    setTimeout(forceScroll, 200);
    setTimeout(forceScroll, 500);
    
    window.scrollTo(0, 0);

    // Add loaded class after a brief delay for entrance animation
    setTimeout(() => setIsLoaded(true), 100);

    const cards = gridRef.current?.querySelectorAll(".pc");
    if (!cards) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const index = Array.from(cards).indexOf(e.target as Element);
            setTimeout(() => {
              (e.target as HTMLElement).classList.add("pc--in");
            }, index * 120);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    cards.forEach((c) => {
      const rect = c.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        // Already in viewport — stagger immediately with better timing
        const index = Array.from(cards).indexOf(c);
        setTimeout(() => (c as HTMLElement).classList.add("pc--in"), index * 120);
      } else {
        io.observe(c);
      }
    });

    return () => {
      io.disconnect();
      // Restore body overflow when navigating back to home
      console.log("🔄 Restoring home page scroll settings...");
      document.body.style.overflow = "hidden";
      document.body.style.height = "";
      document.body.style.maxHeight = "";
      document.documentElement.style.overflow = "";
      document.documentElement.style.overflowX = "";
      document.documentElement.style.height = "";
    };
  }, [filteredProjects]);

  // 3D Tilt effect on cards
  const handleCardMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 15;
    const rotateY = (centerX - x) / 15;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    card.style.zIndex = "10";
  };

  const handleCardMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const card = e.currentTarget;
    card.style.transform = "";
    card.style.zIndex = "";
  };

  return (
    <div className={`pp ${isLoaded ? 'pp--loaded' : ''}`}>
      {/* Scroll Progress Bar */}
      <div className="pp-scroll-progress" style={{ width: `${scrollProgress}%` }}></div>

      {/* Animated background */}
      <div className="pp-bg">
        <div className="pp-bg-grid"></div>
        <div className="pp-bg-glow"></div>
      </div>

      {/* Nav */}
      <nav className="pp-nav">
        <a href="/" className="pp-nav-back" data-cursor="disable">
          <MdArrowBack /> Back
        </a>
        <span className="pp-nav-logo">VS</span>
        <div className="pp-nav-stats">
          <span className="pp-nav-count">{filteredProjects.length} projects</span>
          <div className="pp-nav-filter">
            <MdFilterList />
            <select 
              value={filter} 
              onChange={(e) => setFilter(e.target.value)}
              className="pp-filter-select"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="pp-hero">
        <div className="pp-hero-content">
          <p className="pp-hero-eyebrow">Portfolio Showcase</p>
          <h1 className="pp-hero-title">
            <span className="pp-hero-title-line">Crafted with</span>
            <span className="pp-hero-title-line pp-hero-title-accent">Passion</span>
          </h1>
          <p className="pp-hero-subtitle">
            A curated collection of digital experiences, each telling a unique story through code and creativity.
          </p>
        </div>
        <div className="pp-hero-stats">
          <div className="pp-stat">
            <span className="pp-stat-number">{allProjects.length}+</span>
            <span className="pp-stat-label">Projects</span>
          </div>
          <div className="pp-stat">
            <span className="pp-stat-number">{categories.length - 1}</span>
            <span className="pp-stat-label">Categories</span>
          </div>
          <div className="pp-stat">
            <span className="pp-stat-number">2026</span>
            <span className="pp-stat-label">Latest</span>
          </div>
        </div>
      </header>

      {/* Search & Controls */}
      <div className="pp-controls">
        <div className="pp-search">
          <MdSearch className="pp-search-icon" />
          <input
            type="text"
            placeholder="Search projects, tech stack..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pp-search-input"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery("")}
              className="pp-search-clear"
            >
              ✕
            </button>
          )}
        </div>
        
        <div className="pp-view-toggle">
          <button
            onClick={() => setViewMode("grid")}
            className={`pp-view-btn ${viewMode === "grid" ? "pp-view-btn--active" : ""}`}
            title="Grid View"
          >
            <MdGridView />
          </button>
          <button
            onClick={() => setViewMode("masonry")}
            className={`pp-view-btn ${viewMode === "masonry" ? "pp-view-btn--active" : ""}`}
            title="Masonry View"
          >
            <MdViewAgenda />
          </button>
        </div>
      </div>

      {/* Filter Pills */}
      <div className="pp-filters">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`pp-filter-pill ${filter === cat ? 'pp-filter-pill--active' : ''}`}
          >
            {cat}
            <span className="pp-filter-count">
              {cat === "All" ? allProjects.length : allProjects.filter(p => p.category === cat).length}
            </span>
          </button>
        ))}
      </div>

      {/* Results count */}
      {searchQuery && (
        <div className="pp-results">
          Found <strong>{filteredProjects.length}</strong> {filteredProjects.length === 1 ? 'project' : 'projects'}
          {searchQuery && ` matching "${searchQuery}"`}
        </div>
      )}

      {/* Grid — Enhanced masonry layout */}
      <div className={`pp-grid pp-grid--${viewMode}`} ref={gridRef}>
        {filteredProjects.length > 0 ? (
          filteredProjects.map((p, i) => {
            const num = String(i + 1).padStart(2, "0");
            return (
              <a
                key={`${p.title}-${i}`}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="pc"
                data-cursor="disable"
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
              >
                {/* Floating number badge */}
                <div className="pc-badge">{num}</div>

                {/* Card header */}
                <div className="pc-header">
                  <div className="pc-meta">
                    <span className="pc-cat">{p.category}</span>
                    {p.year && <span className="pc-year">{p.year}</span>}
                  </div>
                  <div className="pc-arrow">
                    <MdArrowOutward />
                  </div>
                </div>

                {/* Screenshot with overlay */}
                <div className="pc-img-wrap">
                  <div className="pc-img-overlay">
                    <div className="pc-img-overlay-content">
                      <span>View Project</span>
                      <MdArrowOutward />
                    </div>
                  </div>
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                {/* Card content */}
                <div className="pc-content">
                  <h2 className="pc-title">{p.title}</h2>
                  <p className="pc-desc">{p.description}</p>
                  
                  {/* Tech stack with enhanced styling */}
                  <div className="pc-tech">
                    <span className="pc-tech-label">Built with</span>
                    <div className="pc-pills">
                      {p.tools.split(", ").slice(0, 4).map((t, idx) => (
                        <span key={t} className="pc-pill" style={{'--delay': `${idx * 0.1}s`} as React.CSSProperties}>
                          {t}
                        </span>
                      ))}
                      {p.tools.split(", ").length > 4 && (
                        <span className="pc-pill pc-pill--more">
                          +{p.tools.split(", ").length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className="pc-glow"></div>
              </a>
            );
          })
        ) : (
          <div className="pp-empty">
            <div className="pp-empty-icon">🔍</div>
            <h3 className="pp-empty-title">No projects found</h3>
            <p className="pp-empty-text">
              Try adjusting your search or filter to find what you're looking for.
            </p>
            <button 
              onClick={() => {
                setSearchQuery("");
                setFilter("All");
              }}
              className="pp-empty-btn"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`pp-back-to-top ${showBackToTop ? 'pp-back-to-top--visible' : ''}`}
        aria-label="Back to top"
      >
        ↑
      </button>

      {/* Enhanced footer */}
      <footer className="pp-footer">
        <div className="pp-footer-content">
          <div className="pp-footer-left">
            <a href="/" className="pp-footer-back" data-cursor="disable">
              <MdArrowBack /> Back to home
            </a>
            <p className="pp-footer-text">
              Crafted with ❤️ by Vishesh Sanghvi
            </p>
          </div>
          <div className="pp-footer-right">
            <p className="pp-footer-copyright">© {new Date().getFullYear()} All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Projects;
