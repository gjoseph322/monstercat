// 3. Estructura Principal de la Canción (Track)
import type { Artist } from "./artist.types.js";
import type { Album } from "./album.types.js";

export interface Track {
    id: string;
    title: string;
    duration: number;
    audioUrl: string;
    artists: Artist[];
    album: Album;
    youtubeId?: string | null;
}