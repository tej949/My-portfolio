A personal portfolio built with React and Vite, showcasing 3D scenes and interactive UI components.

Features
Built with React + Vite for fast development and bundling
3D scenes and models (uses a src/components/models structure)
Reusable UI components: animated counters, glow cards, navbar, etc.
Responsive layout and optimized production build
Tech stack
React
Vite
Three.js / @react-three/fiber (used for 3D scenes)
Common front-end tooling (ESLint, PostCSS/CSS)
Project structure
Key folders and files:

src/ — application source
main.jsx, App.jsx — app entry and root
index.css — global styles
components/ — UI components and 3D model components
sections/ — page sections (Hero, Showcase, Contact, etc.)
public/ — static assets (images, models)

Getting started
Install dependencies

npm install
# or
pnpm install
# or
yarn
Run the development server

npm run dev
Build for production

Scripts (package.json)
dev — start Vite dev server
build — create production build
preview — locally preview production build


If 3D models don't load, confirm asset paths under public/ match imports or loader URLs.
For build issues, ensure you have Node.js >= 16 and a recent package manager.

License & author
Created by Tej. 