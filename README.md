# DevAxis Solutions

A modern, professional website for DevAxis Solutions built with Next.js 15, React 19, and Tailwind CSS.

## Features

- **Modern Stack**: Built with Next.js 15 and React 19
- **Responsive Design**: Fully responsive across all devices
- **Animation**: Smooth animations powered by Framer Motion
- **Theme Support**: Custom theme context for flexible styling
- **UI Components**: Radix UI and custom components
- **Performance**: Optimized with Turbopack and Vercel Analytics
- **TypeScript**: Fully typed for better developer experience

## Tech Stack

- [Next.js 15](https://nextjs.org/) - React framework
- [React 19](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Radix UI](https://www.radix-ui.com/) - Accessible components
- [Lucide React](https://lucide.dev/) - Icons

## Project Structure

```
src/
├── app/              # Next.js app router pages
│   ├── about/        # About page
│   ├── contact/      # Contact page
│   ├── pricing/      # Pricing page
│   ├── projects/     # Projects showcase
│   └── services/     # Services page
├── components/       # Reusable components
│   ├── magicui/      # Magic UI components
│   └── ui/           # Base UI components
├── config/           # Configuration files
├── context/          # React context providers
├── hooks/            # Custom React hooks
├── types/            # TypeScript type definitions
└── utils/            # Utility functions
```

## Getting Started

### Prerequisites

- Node.js 20+ 
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd P11287

# Install dependencies
npm install
```

### Development

Run the development server with Turbopack:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Build

Create a production build:

```bash
npm run build
```

### Production

Run the production server:

```bash
npm start
```

### Linting

Run ESLint:

```bash
npm run lint
```

## Pages

- **Home** - Hero section, stats, trusted brands, and FAQ
- **About** - Company culture, team, and founders
- **Services** - Service offerings, process, industries, and impact
- **Projects** - Portfolio showcase
- **Pricing** - Pricing plans
- **Contact** - Contact form and information

## Deployment

The application is optimized for deployment on [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

For other platforms, refer to the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## License

Private - All rights reserved
