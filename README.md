# Vedra AI - Next.js Application

This is a Next.js conversion of the original Express.js + React (Vite) application.

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
cd theNewTailwind
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5001`

### Building for Production

```bash
npm run build
npm start
```

### Project Structure

```
theNewTailwind/
├── app/                    # Next.js App Router pages and layouts
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Home page (landing page)
│   ├── providers.tsx      # React Query, Tooltip, Toast providers
│   └── globals.css        # Global styles and Tailwind directives
├── components/
│   ├── ui/               # shadcn/ui components
│   └── sections/         # Page sections (CallToAction, FAQ, etc.)
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/              # Static assets
│   └── figmaAssets/     # Images and design assets
├── next.config.ts       # Next.js configuration
├── tailwind.config.ts   # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration
```

## Key Features

- ✅ Next.js 15 with App Router
- ✅ Tailwind CSS for styling
- ✅ TypeScript support
- ✅ shadcn/ui component library
- ✅ React Query for data fetching
- ✅ Fully responsive landing page
- ✅ Dark mode support
- ✅ Optimized for production

## Migration Notes

This project was migrated from an Express.js + React (Vite) setup to Next.js. Key changes include:

- **Server-side rendering**: Next.js provides automatic SSR capabilities
- **File-based routing**: Pages are now defined in the `app/` directory
- **API Routes**: Can be added in `app/api/` directory for backend functionality
- **Image optimization**: Use Next.js `<Image>` component for optimized images
- **Client components**: Components using hooks need `"use client"` directive

## Development Scripts

- `npm run dev` - Start development server on port 5001
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI primitives)
- **State Management**: React Query (TanStack Query)
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Notes

- The application uses port 5001 by default to avoid conflicts with the original application on port 5000
- All original functionality from the Express + React app has been preserved
- Static assets are served from the `public/` directory and accessible via `/` path
