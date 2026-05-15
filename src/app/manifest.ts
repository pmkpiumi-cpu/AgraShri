import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "AgraShri Educational Institute",
    short_name: "AgraShri",
    description: "A modern learning and counseling platform in Sri Lanka dedicated to academic excellence, personal growth, and student wellbeing.",
    start_url: "/",
    display: "standalone",
    background_color: "#F9FAF7",
    theme_color: "#14532D",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
