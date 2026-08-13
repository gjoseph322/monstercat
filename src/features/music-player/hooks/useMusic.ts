// features/music-player/hooks/useMusicPlayer.ts
import { useState, useEffect, useRef } from 'react';
import type { Track } from '../types/track.types.js'
import { MusicService } from '../services/MusicService.js';


export function useMusic() {
   const [tracks, setTracks] = useState<Track[]>([]);

   useEffect(() => {
      async function loadTracks() {
         const data = await MusicService.getTracks();
         setTracks(data)
      }
      loadTracks();

   }, []);

   
   return { tracks };

}
