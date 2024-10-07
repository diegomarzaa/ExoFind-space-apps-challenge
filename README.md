# Exoplanet Exploration - EXOFIND

## Description

This is an interactive web application designed to simulate the exploration of exoplanets. The user can navigate through a series of mini-games and challenges to discover planets, gather resources, and unlock new missions. The app features several modules, including puzzle games, orbital simulations, and planetary mission selectors. Each module provides a unique experience, integrating animation and dynamic interactions using React, Framer Motion, and Tailwind CSS.

## Features

- **Exoplanet Exploration (Main Menu)**: Interactive menu where users can start their exploration journey.
- **Mission Selector**: Choose from various missions based on the type of exoplanet. Unlock new missions by completing objectives (implemented in `niveles.js`).
- **Orbital Simulation**: Observe and control the motion of planetary bodies in an orbital path (implemented in `orbita_planetaria.js`).
- **Puzzle Game**: Solve image-based puzzles that represent direct imaging techniques used in exoplanet research (implemented in `puzzle.js`).

## Getting Started

### Prerequisites

To run this project locally, you need to have:

- [Node.js](https://nodejs.org/en/) installed.
- A package manager like npm or yarn.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/exoplanet-exploration.git
   ```
2. Navigate into the project directory:
   ```bash
   cd exoplanet-exploration
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
   or, if you're using Yarn:
   ```bash
   yarn install
   ```

### Running the App

To start the app in development mode, run:
```bash
npm run dev
```
or with Yarn:
```bash
yarn dev
```

The app will be accessible at `http://localhost:3000`.

### Building the App

To create a production build, run:
```bash
npm run build
```
or with Yarn:
```bash
yarn build
```

This will generate an optimized version of the app in the `build` folder.

### Playing the Game

- **Main Menu**: After launching, you will see the main menu (`ExoplanetExploration` component in `01-App-menu.js`). Here, you can start the game by clicking the "JUGAR" button.
- **Mission Selector**: Choose a mission from the available planetary types (`niveles.js`). Some missions will be locked until previous missions are completed.
- **Orbital Simulation**: Watch the planetary transit in the orbital view (`orbita_planetaria.js`).
- **Puzzle Game**: Test your puzzle-solving skills by completing a tile-based image puzzle (`puzzle.js`).

## Technologies Used

- **React**: Core framework for building the UI components.
- **Framer Motion**: Used for animations and dynamic transitions across the app.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Lucide-react**: Icons used in the app's menu and mission selector.

## Credits

- **Background Image**: [Unsplash](https://images.unsplash.com/photo-1462331940025-496dfbfc7564).
- **Icons**: Provided by Lucide-react.

## License

This project is licensed under the MIT License.
