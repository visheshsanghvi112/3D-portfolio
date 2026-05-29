# 🚀 Vishesh Sanghvi - Portfolio

A stunning 3D interactive portfolio showcasing 42+ projects with cutting-edge web technologies.

![Portfolio Preview](./preview.png)

## ✨ Features

- **3D Interactive Character** - Custom Three.js character with realistic animations
- **Advanced Projects Page** - Search, filter, 3D tilt effects, and multiple view modes
- **Smooth Animations** - GSAP-powered scroll animations and transitions
- **Fully Responsive** - Optimized for all devices and screen sizes
- **SEO Optimized** - Meta tags, structured data, and sitemap
- **Performance Optimized** - Code splitting, lazy loading, and optimized assets
- **Type Safe** - Built with TypeScript for reliability

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **3D Graphics**: Three.js, React Three Fiber, React Three Drei
- **Animations**: GSAP, Framer Motion
- **Routing**: React Router v7
- **Styling**: CSS3, Custom Properties
- **Icons**: React Icons
- **Analytics**: Vercel Analytics
- **Deployment**: Vercel

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/visheshsanghvi/3D-portfolio.git

# Navigate to project directory
cd 3D-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🚀 Build & Deploy

```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 📁 Project Structure

```
3D-portfolio/
├── public/
│   ├── images/          # Project screenshots (WebP optimized)
│   ├── models/          # 3D character models
│   ├── robots.txt       # SEO crawler instructions
│   └── sitemap.xml      # Site structure for search engines
├── src/
│   ├── components/      # React components
│   │   ├── Character/   # 3D character component
│   │   ├── Projects.tsx # Projects showcase page
│   │   └── styles/      # Component-specific styles
│   ├── context/         # React context providers
│   ├── data/            # Project data and configurations
│   ├── types/           # TypeScript type definitions
│   ├── App.tsx          # Main app component
│   └── main.tsx         # Application entry point
├── vite.config.ts       # Vite configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Dependencies and scripts
```

## 🎨 Key Features Breakdown

### Projects Page
- **Real-time Search** - Search by project name, description, or tech stack
- **Category Filtering** - Filter projects by type (Web App, SaaS, AI Tool, etc.)
- **View Modes** - Toggle between Grid and Masonry layouts
- **3D Tilt Effect** - Cards tilt based on mouse position
- **Scroll Progress** - Visual indicator of scroll position
- **Empty States** - Beautiful "no results" messaging
- **Responsive Design** - 3-column → 2-column → 1-column layouts

### Performance Optimizations
- **Code Splitting** - Lazy loading for routes and heavy components
- **Image Optimization** - WebP format with lazy loading
- **Chunk Optimization** - Manual vendor chunk splitting
- **Tree Shaking** - Unused code elimination
- **Minification** - Terser for production builds
- **Caching Strategy** - Aggressive caching for static assets

### SEO Features
- **Meta Tags** - Complete Open Graph and Twitter Card support
- **Structured Data** - JSON-LD schema for search engines
- **Sitemap** - XML sitemap for better indexing
- **Robots.txt** - Crawler instructions
- **Semantic HTML** - Proper heading hierarchy and landmarks

## 🔧 Configuration

### Environment Variables
Create a `.env` file based on `.env.example`:

```env
VITE_VERCEL_ANALYTICS_ID=your_analytics_id
VITE_ENV=production
```

### Vite Configuration
The `vite.config.ts` includes:
- Manual chunk splitting for optimal loading
- Terser minification with console removal
- Optimized dependency pre-bundling
- Performance-focused build settings

## 📊 Performance Metrics

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s
- **Total Bundle Size**: Optimized with code splitting

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Vishesh Sanghvi**
- Portfolio: [visheshsanghvi.com](https://visheshsanghvi.com)
- GitHub: [@visheshsanghvi](https://github.com/visheshsanghvi)
- LinkedIn: [visheshsanghvi](https://linkedin.com/in/visheshsanghvi)

## 🙏 Acknowledgments

- Three.js community for amazing 3D capabilities
- GSAP for smooth animations
- React Three Fiber for React integration with Three.js
- Vercel for seamless deployment

---

⭐ Star this repo if you found it helpful!
