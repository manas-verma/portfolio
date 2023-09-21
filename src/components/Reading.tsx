"use client";
import { ReadingItem } from "@/portfolio/types";

type Props = {
  reading: ReadingItem;
};

export default function Reading(props: Props) {
  const { reading } = props;
  const { url, name } = reading;
  return (
    <div className="flex flex-col justify-between space-y-4 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:scale-105">
      <h2 className="mb-3 text-2xl font-semibold">{`${name} `}</h2>
      <iframe
        sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
        style={{ width: "120px", height: "240px" }}
        src={url}
      ></iframe>
    </div>
  );
}
