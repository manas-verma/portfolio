import { trim } from "radash";

export const aboutMe: string[] = [
  `Hello! I'm Manas, a software engineer based in Duluth, Minnesota.`,
  `I'm a Software Engineer with five years of experience. I'm passionate about
  physics and mathematics as well.`,
  `In my free time I like to play the piano, read books, do photography, and
  watch movies.`,
].map((paragraph) => trim(paragraph));

export const skills: string[] = [
  "frontend developer",
  "backend developer",
  "python, rust, typescript, c++, swift, java",
  "react, node, express",
  "firebase, postgres, docker, vercel, aws",
  "fly.io, temporal",
].map((skill) => trim(skill));
