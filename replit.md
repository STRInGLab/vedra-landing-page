# Vedra AI - Next.js Landing Page Application

## Overview

Vedra AI is a marketing website for an AI-powered chatbot builder platform. This is a Next.js 15 application that presents a landing page showcasing the product's features, pricing, testimonials, and use cases. The application was converted from an Express.js + React (Vite) stack to Next.js using the App Router architecture.

The primary purpose is to provide a static marketing site with modern UI components and animations to attract potential customers for the Vedra AI chatbot platform.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Framework
- **Technology**: Next.js 15 with App Router
- **Rationale**: Provides server-side rendering capabilities, improved performance, and better SEO for the marketing site. The App Router pattern offers a more intuitive file-system-based routing structure.
- **Rendering Strategy**: Static generation for all pages (currently single landing page)
- **Port Configuration**: Custom port 5000 (instead of default 3000) for both development and production

### UI Component System
- **Library**: shadcn/ui built on Radix UI primitives
- **Rationale**: Provides accessible, customizable components without being a heavy dependency. Components are copied into the project for full control.
- **Styling**: Tailwind CSS with custom design tokens
- **Custom Fonts**: Manrope and Instrument Sans fonts for branding consistency
- **Theme Support**: CSS variables-based theming system with dark mode capability (though not currently implemented in UI)

### State Management
- **Query Management**: TanStack Query (React Query) v5
- **Rationale**: Prepared for future API integrations and data fetching. Currently minimal usage as the site is primarily static.
- **Client-Side State**: React hooks and context providers
- **Toast Notifications**: Radix UI Toast with custom hook pattern

### Component Architecture
- **Pattern**: Component composition with section-based organization
- **Structure**:
  - `/components/ui/` - Reusable UI primitives from shadcn/ui
  - `/components/sections/` - Page-specific sections (CallToAction, FAQ, Features, etc.)
- **Responsiveness**: Mobile-first approach with breakpoint utilities
- **Custom Hook**: `use-mobile` for responsive behavior detection

### Animation & Interactions
- **Library**: Framer Motion v11
- **Usage**: Prepared for animations but minimal implementation currently
- **Carousel**: Embla Carousel for testimonial sections
- **Transitions**: CSS-based with Tailwind utilities

### Form Handling
- **Library**: React Hook Form with Hookform Resolvers
- **Validation**: Prepared for form validation (likely Zod integration based on resolvers)
- **Current Usage**: Minimal - likely prepared for future contact/signup forms

### TypeScript Configuration
- **Target**: ES2017
- **Module System**: ESNext with bundler resolution
- **Strict Mode**: Enabled
- **Path Aliases**: Configured for cleaner imports (@/components, @/lib, @/hooks)

### Development Tooling
- **Linting**: Next.js ESLint configuration
- **Type Checking**: TypeScript strict mode
- **Package Manager**: npm
- **Build Tool**: Next.js built-in (Webpack/Turbopack)

### Design System
- **Color System**: HSL-based CSS variables for theming
- **Typography**: Custom font variables with Manrope family
- **Spacing**: Tailwind's default spacing scale
- **Component Variants**: class-variance-authority for component variants

### Layout Structure
- **Root Layout**: Provides global providers (React Query, Tooltip, Toast)
- **Providers Pattern**: Separate providers component for client-side context
- **Font Loading**: Next.js font optimization with Manrope
- **Metadata**: Static metadata configuration for SEO

## External Dependencies

### UI Component Libraries
- **@radix-ui/react-***: Comprehensive suite of unstyled, accessible UI primitives (accordion, dialog, dropdown, select, tabs, toast, tooltip, etc.)
- **shadcn/ui**: Component collection built on Radix UI with Tailwind styling
- **lucide-react**: Icon library for consistent iconography
- **class-variance-authority**: Type-safe variant management for components
- **tailwind-merge & clsx**: Utility for merging Tailwind classes without conflicts

### Animation & Interaction
- **framer-motion**: Declarative animations library
- **embla-carousel-react**: Lightweight carousel component
- **react-day-picker**: Date picker component (via calendar UI)
- **vaul**: Drawer/bottom sheet component library

### Form Management
- **react-hook-form**: Performant form handling with minimal re-renders
- **@hookform/resolvers**: Validation schema resolvers for React Hook Form
- **input-otp**: OTP/PIN input component

### State Management
- **@tanstack/react-query**: Server state management and data fetching

### Utilities
- **date-fns**: Date manipulation and formatting
- **cmdk**: Command menu component (likely for search/command palette)
- **next-themes**: Theme management for Next.js (dark/light mode support)

### Development Dependencies
- **TypeScript**: Type safety and developer experience
- **Tailwind CSS**: Utility-first CSS framework
- **Next.js**: React framework with bundling and optimization

### Static Assets
- **Public Directory**: Contains Figma-exported images and brand assets
- **Image Optimization**: Next.js Image component capabilities available but not currently implemented