import { trim } from "radash";

const yearsOfExperience = new Date().getFullYear() - 2018;
const yearsOfExperienceStr = {
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
  20: "twenty",
  21: "twenty-one",
  22: "twenty-two",
  23: "twenty-three",
  24: "twenty-four",
  25: "twenty-five",
  26: "twenty-six",
  27: "twenty-seven",
  28: "twenty-eight",
  29: "twenty-nine",
  30: "thirty",
};

export const aboutMe: string[] = [
  `Hello! I'm Manas, a software engineer based in Duluth, Minnesota. I'm currently a co-founder at WattShift.`,
  `I graduated from UC Berkeley in 2018 with a double in Physics and Computer Science.
  I have ${yearsOfExperienceStr} years of experience in software engineering -- both in big tech and in startups.`,
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
