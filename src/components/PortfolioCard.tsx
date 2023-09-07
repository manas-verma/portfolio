import React from "react";
import { PortfolioItem } from "@/portfolio/types";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

type Props = {
  portfolio: PortfolioItem;
};

const link = (url: string | undefined, text: string, icon: React.ReactNode) => {
  if (!url) return null;
  return (
    <a href={url}>
      <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 flex items-center">
        {icon}
        <div className="ml-1">{text}</div>
      </div>
    </a>
  );
};

export function PortfolioCard(props: Props) {
  const { portfolio } = props;
  const { name, description, url, github } = portfolio;

  const links = () => {
    return (
      <div className="flex flex-row space-x-4">
        {link(url, "View", <FiExternalLink />)}
        {link(github, "Github", <FaGithub />)}
      </div>
    );
  };

  return (
    <div className="flex flex-col justify-between space-y-4 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:scale-105">
      <h2 className="mb-3 text-2xl font-semibold">{`${name} `}</h2>
      <p className="m-0 max-w-[30ch] text-sm opacity-50">{description}</p>
      <div>{links()}</div>
    </div>
  );
}
