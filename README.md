# 🔬 urFIT Research Group Website

A comprehensive website for the urFIT research group, built with modern web technologies to provide a single source of truth for all research group content.

## 🎯 Project Overview

This website serves as the central hub for our research group, providing:

- 👥 Team and collaborator profiles
- 💰 Funding of the research group
- 🧮 Interactive calculators and tools
- 📚 Research publications and materials
- 📊 Infographics and visual content
- 🎥 Videos and podcasts
- 📰 Press releases and news
- 📜 Academic theses

## 📑 Pages

### Main Pages

- Home (`/`) - Overview and latest updates
- Non-Academic (`/non-academic`) - Content for non-academic audiences
- Waist-Height Calculator (`/waist-height-calculator`) - Interactive health assessment tool

### Materials

- Publications (`/materials/publications`) - Research papers and articles
- Videos & Podcasts (`/materials/videos-and-podcasts`) - Multimedia content
- Press Releases (`/materials/press-releases`) - News and announcements
- Infographics (`/materials/infografics`) - Visual data representations
- Theses (`/materials/thesis`) - Academic theses and dissertations

### People

- Principal Investigator (`/people/principal-investigator`) - Research group leader
- Team (`/people/team`) - Research group members
- Collaborators (`/people/collaborators`) - External collaborators
- Funders (`/people/funders`) - Funding organizations

### Legal

- Privacy Policy (`/privacy`)
- Terms of Service (`/terms`)

## 🛠 Tech Stack

- [Astro](https://astro.build/) - Static Site Generator
- [React](https://reactjs.org/) - UI Components
- [TypeScript](https://www.typescriptlang.org/) - Type Safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Bun](https://bun.sh/) - JavaScript Runtime & Package Manager

## 🚀 Getting Started

### Prerequisites

- Bun (latest version)
- Node.js (v18 or higher)
- Cloudflare account (for email subscriptions)
- Cloudflare Workers CLI (wrangler) (for email subscriptions)

### Installation

```bash
# Clone the repository
git clone [repository-url]

# Install dependencies
bun install

# Start development server
bun run dev
```

### Building for Production

```bash
# Create production build
bun run build

# Preview production build
bun run preview
```

## 📁 Project Structure

```
src/
├── assets/         # Static assets (images, styles)
├── components/     # Shared Astro components
├── content/        # Blog related content
├── data/          # Data for different pages
├── layouts/       # Shared layout components
├── pages/         # Route pages
├── utils/         # Helper functions
├── config/        # Shared configuration
├── navigation/    # Navigation of the website
└── types.d.ts     # TypeScript definitions

workers/
└── subscribe/     # Cloudflare Worker for email subscriptions
```

## 🧪 Development

### Code Style

- Functional and declarative programming patterns
- TypeScript for type safety
- Tailwind CSS for styling
- Component-based architecture

### Backend Services

#### Email Subscription Worker

The project includes a Cloudflare Worker that handles email subscriptions:

- Located in `workers/subscribe/`
- Processes newsletter sign-ups
- Sends confirmation emails with custom templates
- Manages subscription status

### Commands

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run preview` - Preview production build
- `bun run lint` - Lint code
- `bun run format` - Format code

## 📝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 🤝 Acknowledgments

- Research group members and collaborators
- Funding organizations
- Open source community
