import Image from "next/image";
import { PortfolioCard } from "@/components/PortfolioCard";
import { portfolio } from "@/portfolio/portfolio";
import { music } from "@/portfolio/music";
import { MusicCard } from "@/components/MusicCard";
import { AboutMeSection } from "@/components/AboutMeSection";
import { AiFillCalendar } from "react-icons/ai";

export default function Home() {
  const portfolioCards = () => {
    return Object.values(portfolio).map((portfolioItem) => {
      return <PortfolioCard portfolio={portfolioItem} key={portfolioItem.id} />;
    });
  };

  const musicCards = () => {
    return Object.values(music).map((musicItem) => {
      return <MusicCard music={musicItem} key={musicItem.id} />;
    });
  };

  return (
    <main className="flex min-h-screen flex-col space-y-10 items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src="/mv.svg"
              alt="MV"
              width={50}
              height={50}
              priority
            />
            <div className="ml-0">resume</div>
          </a>
        </div>
        <div>
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://calendly.com/manas-verma"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillCalendar /> Schedule
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/logo.svg"
          alt="MV"
          width={500}
          height={120}
          priority
        />
      </div>

      <div className="flex flex-row w-[1000px]">
        <div className="text-3xl font-bold mb-4 ml-4 w-[100px]">Projects</div>
      </div>
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        {portfolioCards()}
      </div>
      <div className="flex flex-row w-[1000px]">
        <div className="text-3xl font-bold mb-4 ml-4 w-[100px]">Music</div>
      </div>
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        {musicCards()}
      </div>
      <AboutMeSection />
    </main>
  );
}
