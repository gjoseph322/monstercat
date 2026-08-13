import type { Track } from "../types/track.types.js";
export const EMPTY_TRACK: Track = {
  id: "empty",
  title: "No track selected",
  duration: 0,
  audioUrl: "",
  artists: [{ id: "none", name: "Unknown" }],
  album: {
    id: "none",
    title: "None",
    cover: "none", // Una portada gris por defecto
    releaseDate: ""
  },
  youtubeId: ""
};