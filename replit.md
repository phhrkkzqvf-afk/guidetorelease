# Sedona Method Guided Release App

## Overview

This is a guided emotional release application based on the Sedona Method. It provides a calming, wizard-style interface that walks users through the process of identifying, acknowledging, and releasing emotional resistance. The app is designed as a purely client-side experience with a zen/calming aesthetic.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite with custom configuration for Replit environment
- **Routing**: Wouter (lightweight React router)
- **State Management**: React Query for server state, React useState for local UI state
- **Styling**: Tailwind CSS with custom zen/calming color palette using CSS variables
- **UI Components**: shadcn/ui component library (New York style) with Radix UI primitives
- **Animations**: Framer Motion for smooth wizard step transitions
- **Icons**: Lucide React

### Backend Architecture
- **Runtime**: Node.js with Express 5
- **Language**: TypeScript compiled with tsx
- **API Pattern**: Currently minimal - primarily serves the static frontend
- **Database ORM**: Drizzle ORM configured for PostgreSQL (schema defined but app is currently client-side only)

### Design Patterns
- **Component Structure**: Functional components with hooks
- **Path Aliases**: `@/` for client source, `@shared/` for shared code
- **Schema Validation**: Zod for runtime type validation
- **Responsive Design**: Mobile-first approach with `use-mobile` hook

### Key Pages
- **Home** (`/`): Landing page with hero section and call-to-action
- **Wizard** (`/wizard`): Multi-step guided release flow with animated transitions

## External Dependencies

### Database
- **PostgreSQL**: Configured via `DATABASE_URL` environment variable
- **Drizzle ORM**: Schema management and migrations in `./migrations` directory
- **connect-pg-simple**: Session storage (available but not currently used)

### UI Framework
- **Radix UI**: Full suite of accessible component primitives
- **shadcn/ui**: Pre-built component library using Radix primitives
- **Embla Carousel**: Carousel functionality

### Build & Development
- **Vite**: Development server with HMR and production bundling
- **esbuild**: Server-side bundling with dependency allowlisting for cold start optimization
- **Replit Plugins**: Runtime error overlay, cartographer, and dev banner for Replit environment

### Fonts
- **DM Sans**: Primary sans-serif font (via Google Fonts)
- **Playfair Display**: Display/heading font (via Google Fonts)