import type { Album } from "../types/album.types.js";
import type { Track } from "../types/track.types.js";


export const albums: Album[] = [{
    id: "album-1",
    title: "Nebula",
    cover: "https://picsum.photos/500/500",
    releaseDate: "2026-01-15"
},
{
    id: "album-2",
    title: "Retrofuturism",
    cover: "https://picsum.photos/500/600",
    releaseDate: "2025-02-20"
},
{
    id: "album-3",
    title: "Midnight Lounge",
    cover: "https://picsum.photos/600/500",
    releaseDate: "2025-12-05"
},

]

export const tracks: Track[] = [
    {
        id: "track-1",
        title: "Dreams",
        duration: 372,
        audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp",
        artists: [
            { id: "artist-1", name: "Lost Sky" }
        ],
        album: {
            id: "album-1",
            title: "Nebula",
            cover: "https://picsum.photos/500/500",
            releaseDate: "2026-01-15",
        },
        youtubeId: "SHFTHDncw0g",

    },

    {
        id: "track-2",
        title: "Forever",
        duration: 425,
        audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
        artists: [
            { id: "artist-2", name: "Alan Walker" },
            { id: "artist-3", name: "Au/Ra" }
        ],
        album: {
            id: "album-1",
            title: "Nebula",
            cover: "https://picsum.photos/500/500",
            releaseDate: "2026-01-15",
        },
        youtubeId: "d6f60-lxVQI",
    },
    {
        id: "track-3",
        title: "MOSHI ",
        duration: 344,
        audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
        artists: [
            { id: "artist-4", name: "Pegboard Nerds" },
            { id: "artist-5", name: "Tokyo Machine" }
        ],
        album: {
            id: "album-1",
            title: "Nebula",
            cover: "https://picsum.photos/500/500",
            releaseDate: "2026-01-15",
        },
        youtubeId: "NgPWqeirmrM",
    },
    {
        id: "track-4",
        title: "Golden Hour",
        duration: 302,
        audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
        artists: [{ id: "artist-4", name: "Pegboard Nerds" }],
        album: {
            id: "album-1",
            title: "Nebula",
            cover: "https://picsum.photos/500/500",
            releaseDate: "2026-01-15"
        },
        youtubeId: "lmn456pqr"
    },
    { 
        id: "track-5",
        title: "Deep Horizon",
        duration: 353,
        audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
        artists: [{ id: "artist-5", name: "Tokyo Machine" }],
        album: {
            id: "album-1",
            title: "Nebula",
            cover: "https://picsum.photos/500/500",
            releaseDate: "2026-01-15"
        },
        youtubeId: "def789ghi"
    },
    {
        id: "track-6",
        title: "Acoustic Sunset",
        duration: 279,
        audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
        artists: [{ id: "artist-6", name: "The WoodNotes" }],
        album: {
            id: "album-2",
            title: "Retrofuturism",
            cover: "https://picsum.photos/500/600",
            releaseDate: "2025-02-20"
        },
        youtubeId: "jkl012mno"
    },
    {
        id: "track-7",
        title: "Cyberpunk Rush",
        duration: 420,
        audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
        artists: [{ id: "artist-3", name: "Au/Ra" }], // Mismo artista, diferente álbum
        album: {
            id: "album-2",
            title: "Retrofuturism",
            cover: "https://picsum.photos/500/600",
            releaseDate: "2025-02-20"
        },
        youtubeId: "vwx345yzx"
    },
    {
        id: "track-8",
        title: "Ethereal Echoes",
        duration: 325,
        audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
        artists: [{ id: "artist-7", name: "Solaris" }],
        album: {
            id: "album-2",
            title: "Retrofuturism",
            cover: "https://picsum.photos/500/600",
            releaseDate: "2025-02-20"
        },
        youtubeId: "stu678vwx"
    },
    {
        id: "track-9",
        title: "Neon Horizon",
        duration: 389,
        audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
        artists: [{ id: "artist-2", name: "Alan Walker" }], // Mismo artista, diferente álbum
        album: {
            id: "album-3",
            title: "Midnight Lounge",
            cover: "https://picsum.photos/600/500",
            releaseDate: "2025-12-05"
        },
        youtubeId: "pqr901stu"
    },
    {
        id: "track-10",
        title: "Urban Velvet",
        duration: 527,
        audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
        artists: [{ id: "artist-8", name: "Smooth Operator" }],
        album: {
            id: "album-3",
            title: "Midnight Lounge",
            cover: "https://picsum.photos/600/500",
            releaseDate: "2025-12-05"
        },
        youtubeId: "hij345klm"
    }
];
