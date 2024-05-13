import { aboutMe, skills } from "@/portfolio/about-me";
import Image from "next/image";
import Link from "next/link";

const kumospaceUrl = "https://kumospace.com/manas-verma";

export function AboutMeSection() {
  const description = () => {
    return aboutMe.map((paragraph, index) => {
      return (
        <p className="text-lg text-gray-600 dark:text-gray-400" key={index}>
          {paragraph}
        </p>
      );
    });
  };

  const workWithMe = () => {
    return (
      <p className="text-lg text-gray-600 dark:text-gray-400 w-full">
        If you would like, you can{" "}
        <a
          className="rounded-lg shadow-md bg-accent-dark text-primary-light font-semibold px-4 py-4 transform transition-all hover:bg-accent-lighter hover:scale-105 focus:outline-none focus:ring focus:ring-accent focus:ring-opacity-50 w-full sm:py-6"
          href="https://calendly.com/manas-verma"
          target="_blank"
          rel="noopener noreferrer"
        >
          Book Time
        </a>
      </p>
    );
  };

  const skillsList = () => {
    return skills.map((skill, index) => {
      return <li key={index}>{skill}</li>;
    });
  };

  return (
    <div>
      <hr />
      <h2 className="text-4xl font-semibold text-gray-800 dark:text-white m-4">
        About Me
      </h2>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/mv.svg"
            alt="MV"
            width={150}
            height={150}
            priority
          />
        </div>
        <div className="md:w-3/4 mt-4 md:mt-0 space-y-4">
          {description()}
          <br />
          {workWithMe()}
          <br />
          <p className="text-lg text-gray-600 dark:text-gray-400 w-full">
            <Link href="/transcript.pdf">Check out my transcript here</Link>
          </p>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
          Skills
        </h3>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
          {skillsList()}
        </ul>
      </div>
    </div>
  );
}
