# Faircut Landing Page

A modern, interactive landing page showcasing how Faircut enables brands to earn royalties on secondary market sales through digital certificates and blockchain technology.

## 🎯 What is This?

A **scroll-based interactive experience** with 6 main sections that demonstrates Faircut's value proposition through storytelling, interactive calculators, and clear benefits.

**The Experience:**
1. **Hero Section** - Problem statement and value proposition
2. **Solution Section** - How Faircut works with digital certificates
3. **Calculator Section** - Interactive revenue calculator
4. **Partnership Terms** - Risk-free terms and 50/50 split
5. **Benefits Section** - Perpetual royalties, authenticity, community
6. **Call to Action** - Request exclusive access

**Duration:** 2-3 minutes of scrolling

Perfect for:
- 🎤 Brand pitches and investor presentations
- 💻 Full-screen demos (share screen and scroll)
- 📰 Marketing website
- 🎬 Video recordings (screen capture while scrolling)

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run the landing page
npm run dev

# Open in browser
# http://localhost:5173
```

## 🎨 Design Features

- **Interactive Scroll Experience** - 6 full-viewport sections with smooth navigation
  - **Mouse wheel navigation** - Scroll through sections with mouse wheel
  - **Keyboard navigation** - Arrow keys, Page Up/Down, Home/End support
  - **Section indicators** - Visual dots showing current position
- **Modern Landing Page Design:**
  - Hero section with gradient text effects
  - Interactive revenue calculator with sliders
  - Clean card-based layout for benefits
  - Professional typography and spacing
- **Interactive Elements:**
  - **Revenue Calculator** - Real-time calculation with sliders
  - **Smooth Animations** - Framer Motion for enhanced UX
  - **Responsive Design** - Mobile-first approach
- **Dark Mode Support** - Full dark/light theme toggle
- **Key Features:**
  - Problem/solution narrative flow
  - Interactive revenue calculator
  - Partnership terms visualization
  - Benefits showcase with icons
  - Clear call-to-action
- **Technical Implementation:**
  - React 19 with modern hooks
  - Tailwind CSS for styling
  - Intersection Observer for scroll detection
  - Custom slider components
  - Responsive grid layouts

## 📁 Project Structure

```
faircut-demo/
├── src/
│   ├── pages/
│   │   ├── FaircutLandingPage.jsx   # Main landing page component
│   │   └── Landing.jsx              # Alternative landing page
│   ├── components/
│   │   ├── BusinessSlides.jsx       # Business-focused slides
│   │   ├── DarkModeToggle.jsx      # Dark mode toggle component
│   │   ├── FairCutSlide.jsx        # FairCut-specific slide
│   │   └── StorySlides.jsx         # Story-focused slides
│   ├── contexts/
│   │   └── DarkModeContext.jsx     # Dark mode context provider
│   ├── App.jsx                      # App entry point
│   ├── App.css                      # App-specific styles
│   ├── main.jsx                     # React entry point
│   └── index.css                    # Global styles with Inter font
├── public/
│   └── vite.svg                     # Vite logo
├── index.html                       # HTML entry point
├── package.json                     # Dependencies and scripts
├── tailwind.config.js               # Tailwind configuration
├── vite.config.js                   # Vite configuration
├── postcss.config.js                # PostCSS configuration
├── eslint.config.js                 # ESLint configuration
└── README.md
```

## 🎨 Tech Stack

- **Frontend**: React 19 + Vite
- **Styling**: Tailwind CSS
- **Typography**: Inter font (Google Fonts)
- **Icons**: Lucide React
- **Animation**: Framer Motion
- **Charts**: Chart.js
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **Linting**: ESLint

## 🎨 Interactive Features

- **Scroll Navigation**: Mouse wheel, keyboard arrows, and section indicators
- **Revenue Calculator**: Interactive sliders for price, markup, and volume
- **Real-time Updates**: Live calculation of potential annual revenue
- **Responsive Design**: Mobile-first approach with breakpoint optimization
- **Dark Mode**: Toggle between light and dark themes
- **Smooth Animations**: Framer Motion for enhanced user experience
- **Accessibility**: Keyboard navigation and screen reader support

## 🚀 Development & Deployment

### Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

### Deploy to Vercel

```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy to Vercel
vercel

# For production deployment
vercel --prod
```

### Deploy to Netlify

```bash
# Build the project
npm run build

# Deploy to Netlify (drag and drop /dist folder)
# Or use Netlify CLI:
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### Build for Production

```bash
npm run build
# Output in /dist folder - ready for deployment
```

### Environment Variables

No environment variables required for basic functionality. The landing page is fully client-side.

---

**Built for Faircut** - Turning resales into revenue for creators 💎
