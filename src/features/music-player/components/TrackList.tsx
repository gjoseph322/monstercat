import React from 'react'
import { useAudioGlobal } from '../context/AudioContext.js';
import Icons from '../../../components/Icons.js';
import { formatTime } from '../utils/formatTime.js';
import type { Track } from '../types/track.types.js';

interface TrackListProps {
    className?: string;
}

const TrackList = ({ className }: TrackListProps) => {

    const { queue, currentTrack, playerState
        , playTrack, isCurrentTrack, effectiveDuration, currentTime
    } = useAudioGlobal();

    const remainingTime = Math.max(
        effectiveDuration - currentTime,
        0
    );
    const displayedTime = (track: Track) => {
        if (isCurrentTrack(track.id)) return formatTime(remainingTime);
        else return formatTime(track.duration);
    }

    const getTrackIcon = (trackId: string) => {
        console.log("playerState:", playerState);
        if (currentTrack?.id !== trackId) return "play";
        if (playerState === "loading") return "loading";
        if (playerState === "playing") return "pause";
        return "play";
    }
    return (
        <section className={`${className} relative z-[3] general-fonts-port flex flex-col gap-10 font-semibold`}>
            <h1 className='text-[45px] leading-loose'>TRACK LIST</h1>
            <table className='font-semibold'>
                <tbody>
                    {queue.map((track, index) => (
                        <tr className='text-[18px]' key={track.id}>
                            <td className='align-middle text-center text-[18px]'><span>{index + 1}</span></td>
                            <td className='w-[50px] text-center align-middle p-8'>
                                <button type='button' className="flex w-6 items-center justify-center "
                                    onClick={() => playTrack(track.id)}>
                                    <Icons name={getTrackIcon(track.id)} className="h-6" />
                                </button>
                            </td>
                            <td className='  '><span >{track.title}</span><span className='block text-[14px]'>
                                {track.artists.map((artist) => artist.name).join(", ")}</span></td>
                            <td className='text-center  font-normal font-sans'>{displayedTime(track)}</td>
                            <td className='text-center'>
                                <Icons name="share" className="h-5 w-5 mx-auto" />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </section>
    )
}

export default TrackList
