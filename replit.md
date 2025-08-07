# Overview

This is a personalized birthday celebration web application built for "Annu" that creates an immersive, romantic digital experience. The application features a modern full-stack architecture with a React frontend and Express backend, designed to showcase love messages, photo galleries, interactive elements, and birthday wishes. The app includes animated particle backgrounds, confetti effects, memory jars, gift boxes, quizzes, and a wishes system where visitors can leave birthday messages.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing
- **UI Framework**: shadcn/ui components built on Radix UI primitives with Tailwind CSS for styling
- **State Management**: TanStack Query (React Query) for server state management
- **Animations**: Custom CSS animations with GSAP integration for scroll-triggered animations
- **Interactive Effects**: Canvas-based particle backgrounds, confetti effects using canvas-confetti library
- **Design System**: Custom romantic color palette with CSS variables, Google Fonts integration (Dancing Script, Great Vibes, Inter)

## Backend Architecture
- **Framework**: Express.js with TypeScript
- **API Design**: RESTful API with structured error handling and request logging middleware
- **Development Server**: Vite integration for development with HMR support
- **Data Storage**: In-memory storage implementation with interface for future database migration
- **Schema Validation**: Zod for runtime type validation of API requests

## Data Storage Solutions
- **Current Implementation**: In-memory storage using Maps for users and wishes data
- **Database Preparation**: Drizzle ORM configured for PostgreSQL with schema definitions
- **Schema Design**: 
  - Users table with id, username, password
  - Wishes table with id, name, message, createdAt timestamp
- **Migration System**: Drizzle Kit configured for database migrations

## Component Architecture
- **Modular Design**: Feature-based component organization under birthday-specific modules
- **Reusable UI**: Comprehensive component library with consistent styling patterns
- **Interactive Components**: Specialized components for birthday features (photo gallery, memory jar, gift box, quiz system)
- **Responsive Design**: Mobile-first approach with adaptive layouts

## Build and Development
- **Build System**: Vite for frontend bundling, esbuild for backend bundling
- **Development Workflow**: Hot module replacement in development, separate build processes for client and server
- **TypeScript Configuration**: Strict type checking with path mapping for clean imports
- **Asset Handling**: Support for attached assets and static file serving

# External Dependencies

## Frontend Libraries
- **@tanstack/react-query**: Server state management and data fetching
- **wouter**: Lightweight routing library
- **canvas-confetti**: Confetti animation effects
- **date-fns**: Date formatting and manipulation
- **@radix-ui/***: Comprehensive set of accessible UI primitives
- **class-variance-authority**: Utility for creating component variants
- **clsx & tailwind-merge**: Conditional CSS class management

## Backend Dependencies
- **express**: Web application framework
- **drizzle-orm**: Type-safe ORM for database operations
- **@neondatabase/serverless**: Neon database driver for PostgreSQL
- **zod**: Runtime type validation and schema validation
- **drizzle-zod**: Integration between Drizzle and Zod for schema validation

## Development Tools
- **vite**: Frontend build tool and development server
- **typescript**: Type checking and compilation
- **tailwindcss**: Utility-first CSS framework
- **postcss & autoprefixer**: CSS processing and vendor prefixing
- **@replit/vite-plugin-runtime-error-modal**: Development error handling
- **tsx**: TypeScript execution for Node.js

## Database Integration
- **Drizzle Kit**: Database migration and schema management tool
- **PostgreSQL**: Configured as the target database (currently using in-memory fallback)
- **Connection**: Environment-based database URL configuration for deployment flexibility