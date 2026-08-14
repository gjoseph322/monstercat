import { useEffect, useState, useRef } from "react";
import { delay } from "../utils/delay.js";
import type { Track } from "../types/track.types.js";
import type { PlayerState } from "../types/playerState.type.js";


export const useAudioPlayer = (queue: Track[]) => {

  const [currentTrackId, setCurrentTrackId] = useState<string | null>(null);
  const [playerState, setPlayerState] = useState<PlayerState>("idle");
  const [currentTime, setCurrentTime] = useState(0);
  const [audioDuration, setAudioDuration] = useState<number | null>(null); //duración real de la canción dada por el navegador

  const audioRef = useRef<HTMLAudioElement>(null); 
  const playbackRequestCounter = useRef(0); // contador reciende de canción reproducida (para los setTimeout y carga del loading)
  const pendingPlaybackRequest = useRef<number | null>(null);

  useEffect(() => {
    if (currentTrackId !== null) return;

    const firstTrack = queue[0];

    if (!firstTrack) return;

    setCurrentTrackId(firstTrack.id);
  }, [queue, currentTrackId]);

  const currentTrackIndex =
    queue.findIndex(track => track.id === currentTrackId);

  const hasCurrentTrack = currentTrackIndex >= 0;

  const currentTrack =
    hasCurrentTrack ? queue[currentTrackIndex] : null;

  const effectiveDuration = audioDuration ?? currentTrack?.duration ?? 0;

  //helpers
  const isSamePlaybackRequest = (requestId: number) => {
    return playbackRequestCounter.current === requestId;
  }

  const isCurrentTrack = (trackId: string) => {
    return currentTrack?.id === trackId;
  }

  const createPlaybackRequest = () => {
    playbackRequestCounter.current++;
    return playbackRequestCounter.current;
  }

  //playback actions
  const play = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    try {
      await audio.play();
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  const pause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.pause();
  }

  const playTrack = (trackId: string) => {
    const trackExists = queue.some(track => track.id === trackId);

    if (!trackExists) return;

    if (!isCurrentTrack(trackId)) {
      switchTrack(trackId)
      return;
    }

    switch (playerState) {
      case "playing":
        pausePlayback();
        break;

      case "paused":
        resumePlayback();
        break;

      case "idle":
        startPlayback();
        break;
    }
  }


  const switchTrack = (trackId: string) => {
    const requestId = createPlaybackRequest();
    pendingPlaybackRequest.current = requestId
    setAudioDuration(null);
    setCurrentTime(0);
    setPlayerState("loading");
    setCurrentTrackId(trackId);
  }

  const resumePlayback = async () => {
    await play();
  }

  const pausePlayback = () => {
    pause();
  } 

  const startPlayback = async () => {
    const requestId = createPlaybackRequest();
    if (requestId === null) return;  
    setPlayerState("loading");
    console.log("startPlayback → loading");
    await delay(4000);
    if (!isSamePlaybackRequest(requestId)) return;
    const started = await play();
    if (!started) {
      setPlayerState("paused");
    }
    
  }

  //Audio events
  const onAudioPlay = () => {
    setPlayerState("playing");
  }

  const onAudioPause = () => {
    setPlayerState("paused");
    console.log(playerState);
  }

  const onAudioCanPlay = (async () => {

    if (playerState !== "loading") return;
    const requestId = pendingPlaybackRequest.current;
    if (requestId === null) return;  
    await delay(4000);
    if (!isSamePlaybackRequest(requestId)) return;
    pendingPlaybackRequest.current = null;
    const started = await play();
    if (!started) {
      setPlayerState("paused");
    }
  });

  const onAudioEnded = () => {
    const nexTrack = queue[currentTrackIndex + 1];
    if (!nexTrack) {
      setPlayerState("paused");
      return
    }
    playTrack(nexTrack.id);
  }

  const onAudioTimeUpdate = () => {
    if (!audioRef.current) return;
    setCurrentTime(audioRef.current.currentTime)
  }

  const onAudioLoadedMetadata = () => {
    const audio = audioRef.current
    if (!audio) return;
    if (!Number.isFinite(audio.duration)) return;
    setAudioDuration(audio.duration)
  }
  
  const onAudioError =() => {
    if (playerState!=="loading") return;
    setPlayerState("paused");
    pendingPlaybackRequest.current = null;
  }
  // public API
  return {

    //Track
    currentTrack,
    isCurrentTrack,

    //Playback
    playTrack,
    playerState,

    //Audio
    audioRef,

    //Time
    effectiveDuration,
    currentTime,

    //Audio events
    onAudioCanPlay,
    onAudioPause,
    onAudioPlay,
    onAudioEnded,
    onAudioTimeUpdate,
    onAudioLoadedMetadata,
    onAudioError,


  };
};
