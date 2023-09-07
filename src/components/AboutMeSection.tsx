import Image from "next/image";
import React from "react";

export function AboutMeSection() {
  return (
      <div>
        <hr/>
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-white m-4">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3">
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src="/mv.svg"
              alt="Next.js Logo"
              width={50}
              height={50}
              priority
            />
          </div>
          <div className="md:w-2/3 mt-4 md:mt-0">
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Hello! Im Manas Verma.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-4">
              In my free time I like to play piano, take photos, and watch great films.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
            Skills
          </h3>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
            <li>Front-end Development</li>
            <li>Back-end Development</li>
            <li>TypeScript, React, Node.js</li>
          </ul>
        </div>
      </div>
  );
}
