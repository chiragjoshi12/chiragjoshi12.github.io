// src/components/moments-entry.tsx
import Image from "next/image";
import { Moment } from "@/data/moments";

export function MomentsEntry({ moment }: { moment: Moment }) {
  return (
    <div className="group relative w-full overflow-hidden rounded-lg">
      <div className="aspect-[4/5] relative">
        <Image
          src={moment.src}
          alt={moment.alt || moment.caption || ""}
          fill
          className="object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, 33vw"
        />
      </div>
      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
    </div>
  );
}