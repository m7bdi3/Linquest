# Linquest Project README

## Overview

Linquest is a quest-based language learning application that leverages interactive challenges to enhance the learning experience. The application is built with a modern tech stack and adheres to best practices in software development.

## Key Features

- **Interactive Language Learning**: Engage with dynamic quests and challenges that make learning a new language fun and effective.
- **AI Voices**: Utilize high-quality AI-generated voices for pronunciation and dialogue interactions.
- **Gamification Elements**: Includes a points system, hearts system for lesson attempts, and a leaderboard to encourage competition and motivation.
- **Comprehensive Admin Dashboard**: Manage users, courses, and content through a detailed admin interface.
- **Mobile Responsiveness**: Fully responsive design ensures a seamless experience on all devices.
- **Multi-Language Support**: Offers learning modules in multiple languages with appropriate localization.
- **Secure Authentication**: Integrates Clerk for secure and reliable user authentication.
- **Subscription Model**: Includes Stripe for handling subscriptions, allowing users to opt for a Pro tier with unlimited hearts.
- **Server-Side Enhancements**: Leverages the latest Next.js features for server-side actions and optimizations.

## Technology Stack

### Frontend

- **React**: A JavaScript library for building user interfaces.
- **Next.js**: A React framework that enables functionalities such as server-side rendering and static site generation.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.
- **TypeScript**: A superset of JavaScript that adds static types.
- **Shadcn UI**: A UI component library for building high-quality, accessible design systems and web apps.

### Backend

- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Drizzle ORM**: An ORM for TypeScript and JavaScript.
- **Neon Database**: A serverless PostgreSQL database service.

### Tools and Libraries

- **ESLint**: A static code analysis tool for identifying problematic patterns found in JavaScript code.
- **PostCSS**: A tool for transforming CSS with JavaScript.
- **Vercel**: A platform for frontend frameworks and static sites, built to integrate with your headless content, commerce, or database.

### Development Tools

- **VSCode**: Recommended editor with extensions like Tailwind CSS IntelliSense.
- **Git**: Version control system.

## Project Structure

- `app/`: Contains the frontend application code including pages and components.
- `scripts/`: Includes scripts for database seeding and other backend operations.
- `public/`: Stores static files like images and SVGs.
- `lib/`: Contains utility functions and shared libraries.

## Setup and Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/m7bdi3/linquest.git
   ```

2. Install dependencies:

   ```bash
   cd linquest
   npm install
   ```

3. Set up environment variables:
   - Copy the `.env.example` file to `.env` and fill in the necessary details.

4. Run the development server:

   ```bash
   npm run dev
   ```

## Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run start`: Starts the production server.
- `npm run lint`: Runs the linter.
- `npm run db:push`: Pushes database schema changes.
- `npm run db:seed`: Seeds the database with initial data.

## Contributing

Contributions are welcome! Please read the contributing guide to learn how you can contribute to Linquest.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
