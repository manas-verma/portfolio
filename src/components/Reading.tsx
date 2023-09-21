"use client";
import { ReadingItem } from "@/portfolio/types";
import Image from "next/image";

type Props = {
  reading: ReadingItem;
};

export default function Reading(props: Props) {
  const { reading } = props;
  const { url, name, image } = reading;
  return (
    <a
      href={url}
      className="flex flex-col justify-between space-y-4 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:scale-105"
    >
      <h2 className="mb-3 text-2xl font-semibold">{`${name} `}</h2>
      <Image
        src={image}
        alt={name}
        width={120}
        height={120}
      />
    </a>
  );
}
