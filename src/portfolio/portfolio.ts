import type { PortfolioItem } from "./types";

export const latestProjectUrl = "https://inmeme.app";

export const portfolio: Record<string, PortfolioItem> = {
  inmeme: {
    id: "inmeme",
    name: "inmeme",
    description: "An internal meme page for you company!",
    url: "https://inmeme.app",
    tags: ["react", "firebase", "python"],
  },
  ruspy: {
    id: "ruspy",
    name: "RusPy",
    description:
      "A Python package for fast data manipulation and analysis powered by Rust.",
    url: "https://pypi.org/project/ruspy/",
    github: "https://github.com/manas-verma/ruspy",
    tags: ["rust", "python"],
  },
  vessel: {
    id: "vessel",
    name: "Integrations Framework",
    description: "Contributed to framework for building embedded integrations",
    github:
      "https://github.com/vesselapi/integrations/commits?author=manas-vessel",
    tags: ["typescript"],
  },
  chromium: {
    id: "chromium",
    name: "Chromium",
    description: "Contributed to the Autofill project in Chromium",
    url: "https://chromium-review.googlesource.com/q/owner:manasverma@google.com",
    tags: ["c++", "chrome", "chromium"],
  },
  sounds: {
    id: "sounds",
    name: "Music Box",
    description: "A music box built with React and the Web Audio API",
    url: "https://pizzikato.web.app/",
    github: "https://github.com/manas-verma/sounds",
    tags: ["react", "typescript"],
  },
  fft: {
    id: "fft",
    name: "FFT Visualizer",
    description: "A visualizer for the Fast Fourier Transform algorithm",
    github: "https://github.com/manas-verma/circles",
    tags: ["python", "fft"],
  },
  buzz: {
    id: "buzz",
    name: "Buzz",
    description: "Particle simulation with React and Canvas",
    url: "https://swarm-93f61.web.app/",
    github: "https://github.com/manas-verma/buzz",
    tags: ["react", "typescript", "canvas"],
  },
  blend: {
    id: "blend",
    name: "Blend",
    description: "An online deception game to play with friends",
    url: "https://blend-io.web.app/",
    tags: ["react", "typescript", "firebase", "game"],
  },
  cube: {
    id: "cube",
    name: "Cube Solver",
    description: "A Rubik's cube solver",
    github: "https://github.com/manas-verma/RubiksCubeSolver",
    tags: ["python", "rubik's", "cube"],
  },
  lucidity: {
    id: "lucidity",
    name: "Lucidity",
    description: "A web app for helping with psychedelic pre-coaching",
    url: "https://lucidity.vercel.app/",
    tags: [
      "python",
      "fastapi",
      "react",
      "typescript",
      "psychedelic",
      "firestore",
    ],
  },
  portfolio: {
    id: "portfolio",
    name: "Portfolio",
    description: "This website!",
    github: "https://github.com/manas-verma/portfolio",
    tags: ["react", "typescript", "portfolio"],
  },
};
