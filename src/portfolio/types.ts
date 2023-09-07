export type PortfolioItem = {
  id: string;
  name: string;
  description: string;

  url?: `https://${string}`;
  github?: `https://github.com/${string}/${string}`;

  tags: string[];
  image?: string;
};

export type MusicItem = {
  id: string;
  name: string;
  url: `https://${string}`;
};
