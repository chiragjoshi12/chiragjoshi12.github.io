// src/data/moments.ts
export interface Moment {
  src: string;
  width: number;
  height: number;
  caption?: string;
  alt?: string;
}

export const momentsData: Moment[] = [
  {
    src: "https://pbs.twimg.com/media/GwtlzW9bgAMZ5hL?format=jpg&name=4096x4096",
    width: 2070,
    height: 1380,
    caption: "A cool moment captured during China Visit (Xi Lake).",
    alt: "A person standing near the Xi Lake (China)",
  },
  {
    src: "https://pbs.twimg.com/media/GqGACVyXUAAqmF_?format=jpg&name=4096x4096",
    width: 2070,
    height: 1380,
    caption: "Organised 3 Days Residential AI Camp",
    alt: "Organised 3 Days Residential AI Camp",
  },
  {
    src: "https://pbs.twimg.com/media/GPIBqPIboAAusFc?format=jpg&name=4096x4096",
    width: 2070,
    height: 1380,
    caption: "With Humanoids at Computex (Taiwan)",
    alt: "Computex Taiwan",
  },
  {
    src: "https://pbs.twimg.com/media/GSgzbNIXkAAgCdg?format=jpg&name=4096x4096",
    width: 2070,
    height: 1380,
    caption: "The Residency Hackathon at Bengaluru (with hardeep gambhir)",
    alt: "The Residency Hackathon at Bengaluru (with hardeep gambhir)",
  },
  {
    src: "https://pbs.twimg.com/media/GPIB1ZDaYAAYgyY?format=jpg&name=4096x4096",
    width: 2070,
    height: 1380,
    caption: "Jensen Huang's Keynote at Taiwan",
    alt: "Jensen Huang's Keynote at Taiwan",
  },
  {
    src: "https://pbs.twimg.com/media/Gwo1aw0bgAMnsiz?format=jpg&name=4096x4096",
    width: 2070,
    height: 1380,
    caption: "AIRRE Club at China's Largest Hackathon - AdventureX",
    alt: "A beautiful landscape with a river and mountains.",
  },
];