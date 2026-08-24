import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Radhey Radhey Charitable Blood & Component Centre",
    short_name: "RR Blood Bank",
    description:
      "Best blood bank in Gorakhpur. 24/7 blood availability, safe blood donation, all blood groups, charitable services.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#DC2626",
    lang: "en-IN",
    orientation: "portrait",
    categories: ["health", "medical"],
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
