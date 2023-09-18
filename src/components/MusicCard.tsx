import React from "react";
import { MusicItem } from "@/portfolio/types";

type Props = {
  music: MusicItem;
};

export function MusicCard(props: Props) {
  const { music } = props;
  const { name, url } = music;

  return (
    <div className="flex flex-col justify-between space-y-4 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:scale-105">
      <h2 className="mb-3 text-2xl font-semibold">{`${name} `}</h2>
      <iframe src={url} />
    </div>
  );
}
