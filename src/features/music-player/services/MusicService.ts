// features/music-player/services/MonstercatService.ts
import { tracks, albums } from '../mocks/tracks.mock.js'
import type { Track } from '../types/track.types.js';
import type { Album } from '../types/album.types.js';

// Cambiamos al proxy oficial de AllOrigins, que es mucho más estable
export const MusicService = {
     async getTracks(): Promise<Track[]> {
        return tracks;
    },
    getAllAlbums() : Album[] {
        return albums;
    },

    getTracksByAlbumId (albumId:string) : Track[] {
        if (!albumId) return [];
        return tracks.filter(tracks => tracks.album.id ===albumId);
    }

}


