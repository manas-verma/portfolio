import { trim } from "radash";

export const aboutMe: string[] = [
  `Hello! I'm Manas, a software engineer based in Duluth, Minnesota. I'm currently a co-founder at WattShift.`,
  `I graduated from UC Berkeley in 2018 with a double in Physics and Computer Science.
  I have five years of experience in software engineering -- both in big tech and in startups.`,
  `I'm originally from India, but I've moved around throughout my life, living in a total of 4
  different countries and 9 different cities (not including places I've just visited).
  In fact, I've never been in one place longer than four years.`,
  `In my free time I like to play the piano, read books, do photography, make music, speed-cube, and
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
