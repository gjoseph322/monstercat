import { createContext, useContext } from "react";
import { useMusic } from "../hooks/useMusic.js";
import { useAudioPlayer } from "../hooks/useAudioPlayer.js";
import type { Track } from "../types/track.types.js";
import type { PlayerState } from "../types/playerState.type.js";

interface AudioContextType {
    queue: Track[];
    currentTrack: Track | null | undefined;
    audioRef: React.RefObject<HTMLAudioElement | null> ;
    PlayerState: PlayerState;
    currentTime: number; 
    effectiveDuration: number;
    playTrack: (trackId: string) => void;
    isCurrentTrack : (trackId: string) => boolean;
    onAudioPlay : () => void;
    onAudioPause : () => void;
    onAudioCanPlay:() => Promise<void>;
    onAudioEnded:() => void;
    onAudioTimeUpdate:() => void;
    onAudioLoadedMetadata: () => void;
    onAudioError : () => void;
} 

const AudioContext = createContext<AudioContextType | undefined> (undefined);

export const AudioProvider = ({children}: {children: React.ReactNode}) => { 

        const {tracks} = useMusic();
        const audioTools = useAudioPlayer(tracks)

        return (
            <AudioContext.Provider value={{queue :tracks, ...audioTools}}>
                {children}
            </AudioContext.Provider>
        )
}

export const useAudioGlobal = () => {
    const context = useContext(AudioContext)
    if (!context) throw new Error ("useAudioGlobal debe usarse dentro de un AudioProvider");
    return context;
}