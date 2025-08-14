# Reid VanVliet - Portfolio Website

A modern, interactive portfolio website showcasing my work as a full-stack developer, builder, entrepreneur, and manager. Built with React 19, Framer Motion, and Tailwind CSS.

## 🌟 Features

- **Immersive Scroll Experience**: Custom scroll-based animations using Framer Motion
- **Responsive Design**: Optimized for all devices with mobile-first approach
- **Interactive Navigation**: Glassmorphism navigation with smooth scrolling to sections
- **Project Showcases**: Detailed presentations of web development projects
- **Experience Cards**: Interactive cards displaying professional background
- **Contact Integration**: Direct links to professional profiles and contact information
- **Performance Optimized**: Fast loading with modern build tools

## 🛠️ Tech Stack

- **Frontend**: React 19.1.1
- **Styling**: Tailwind CSS 4.1.11
- **Animations**: Framer Motion 12.23.12
- **Build Tool**: Vite 7.1.0
- **Font**: Custom Reglisse font with optimized loading
- **Icons**: Custom SVG logo and graphics

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Portfolio-handmade
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── LandingSection.jsx    # Hero/landing section
│   ├── RtsSolutions.jsx      # RTS Solutions project showcase
│   ├── GoldenChopsticks.jsx  # Golden Chopsticks project
│   ├── Jamming.jsx          # Jamming project showcase
│   ├── ExperienceSection.jsx # Professional experience cards
│   ├── ContactSection.jsx    # Contact information
│   ├── Navigation.jsx        # Main navigation component
│   └── LoadingScreen.jsx     # Loading animation
├── contexts/           # React context providers
│   └── ScrollContext.jsx    # Custom scroll progress management
├── App.jsx            # Main application component
├── main.jsx           # Application entry point
└── index.css          # Global styles and font definitions

public/
├── Logo.svg           # Custom logo
├── *.jpg/*.png        # Project images and backgrounds
├── Reglisse.otf       # Custom font file
└── *.css              # Additional stylesheets
```

## 🎨 Design Features

### Custom Scroll System
- Implemented using Framer Motion's `useScroll` hook
- Smooth transitions between sections
- Progress-based animations

### Glassmorphism UI
- Semi-transparent elements with backdrop blur
- Modern, clean aesthetic
- Consistent design language throughout

### Responsive Typography
- Custom Reglisse font with fallbacks
- Optimized sizing for different screen sizes
- Enhanced readability across devices

## 📱 Sections

1. **Landing/Home**: Introduction with animated name reveal
2. **Projects**: Showcases of web development work including:
   - RTS Solutions Ltd website
   - Golden Chopsticks restaurant app
   - Jamming Spotify playlist app
3. **Experience**: Interactive cards displaying professional background
4. **Contact**: Links to professional profiles and contact methods

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📈 Performance Optimizations

- Lazy loading of images
- Optimized font loading with `font-display: swap`
- Efficient scroll event handling
- Minimized bundle size with Vite

## 🌐 Deployment

Built for deployment on modern hosting platforms. The production build is optimized and ready for:
- Netlify
- Vercel
- Traditional web hosting

## 📞 Contact

**Reid VanVliet**
- Portfolio: [Live Site URL]
- LinkedIn: [LinkedIn Profile]
- GitHub: [GitHub Profile]
- Email: [Contact Email]

## 📄 License

This project is personal portfolio work. All rights reserved.

---

*Built with ❤️ using modern web technologies*