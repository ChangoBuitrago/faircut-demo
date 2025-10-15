# Faircut Landing Page

A scrolling storytelling experience showcasing how Faircut enables brands to earn royalties on secondary market sales through a simple Shopify plugin.

## 🎯 What is This?

A **scroll-based narrative** in 14 sections that takes viewers through the complete Jonas and Emma story - from Jonas installing Faircut on Shopify, to Emma buying and reselling a jacket, to Jonas earning $60 a year later.

**The Story:**
1. Meet Jonas (NOMAD founder on Shopify)
2. Jonas installs Faircut plugin
3. Configures 10% royalty on his jacket collection
4. Collection sells out
5. Emma in Tokyo buys jacket #234/500
6. One year passes
7. Emma lists for resale ($1,200)
8. Designer in LA purchases
9. Automatic royalty splits: $60 to Jonas, $60 to Faircut
10. Jonas discovers $60 in his account
11. "Money from the ether"
12. Powered by Shopify
13. Call to action

**Duration:** 3-5 minutes of scrolling

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

- **Split-Screen Storytelling** - 14 full-viewport sections with dual narrative
  - **Left side:** Marketing narrative (emotional, story-driven)
  - **Right side:** Technical details ("Under the Hood")
- **Two-Part Experience:**
  - Part 1: Summary landing (FAIRCUT + Jonas/Emma story + scroll indicator)
  - Part 2: Full narrative (scroll through 13 sections)
- **Minimal & Elegant** - Clean, professional aesthetic
- **Inter Font** - Modern typography throughout
- **Smooth Scrolling** - Native CSS smooth scroll
- **Alternating Backgrounds** - White/Gray alternating sections
- **Vertical Divider** - Border separating marketing from technical
- **Shopify Integration** - Emphasized throughout both narratives
- **Dark Mode** - Full dark mode support
- **Key Moments:**
  - Tokyo → LA visual (emojis + arrow)
  - $60 reveal (large, bold, green)
  - Money flow diagram (royalty split)
  - Configuration panel (product settings)
- **Technical Details Include:**
  - Shopify OAuth & webhooks
  - ERC-721 on Polygon
  - Stripe Connect payouts
  - Magic.link wallet abstraction
  - Smart contract logic
  - IPFS metadata storage

## 📁 Project Structure

```
faircut-demo/
├── src/
│   ├── pages/
│   │   └── Landing.jsx              # Main landing page
│   ├── App.jsx                      # App entry
│   └── index.css                    # Styles with Inter font
├── index.html
└── README.md
```

## 🎨 Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS
- **Typography**: Inter font (Google Fonts)
- **Icons**: Lucide React

## 🎨 Design Elements

- **Background**: Subtle grid pattern with radial gradient glow
- **Typography**: Inter font with tight tracking on heading
- **Color Palette**: Grays with blue and green accents
- **Layout**: Centered, maximum 5xl width container
- **Cards**: Three perspective cards (Jonas, Marketplace, Emma)

## 🚀 Deployment

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Build for Production

```bash
npm run build
# Output in /dist folder
```

---

**Built for Faircut** - Turning resales into revenue for creators 💎
