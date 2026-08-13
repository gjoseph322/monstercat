import React, { useState, useEffect } from 'react'
import { useAudioGlobal } from '../features/music-player/context/AudioContext.js'
import Icons from './Icons.js'
import { EMPTY_TRACK } from '../features/music-player/constants/player.constants.js'
import { formatReleaseDate } from '../features/music-player/utils/formatReleaseDate.js'

interface PortadaProps {
    className?: string;
    classNameImg?: string;
    classNameSectionRight?: string;
    classNameSectionleft?: string;
}

export const Portada = ({ className = "",
    classNameImg = "", classNameSectionRight = "", classNameSectionleft = "" }: PortadaProps) => {
    const { currentTrack, PlayerState, playTrack

    } = useAudioGlobal();
    const getTrackIcon = (trackId: string) => {
        if (currentTrack?.id !== trackId) return "play";
        if (PlayerState === "loading") return "loading";
        if (PlayerState === "playing") return "pause";
        return "play";
    } 
   
    return (
        <section className={`${className} relative  z-[3] w-full pb-[80px] `}>
            <div className={`transition-opacity duration-500
            grid min-[992px]:grid-cols-4  m-auto bg-transparent  min-[768px]:pt-[80px] gap-x-[50px] `}>
                <div className={`col-span-2  flex flex-row justify-center ${classNameSectionleft}`} >
                    <div className='flex justify-end'>
                        <h2 className='inline transform  [writing-mode:vertical-rl] rotate-180
                  italic w-full text-[#50A584] text-[18px] font-[Montserrat,Helvetica,Arial,sans-serif] font-semibold' >Instinct
                            <p className='inline text-[#F1F1F1] font-normal'> —Released&nbsp;{formatReleaseDate(currentTrack?.album.releaseDate)}</p></h2> {//&nbsp; usado para espacio
 
                        }
                    </div>
                    <div className={`flex ${classNameImg}`}>
                        <img src={currentTrack?.album.cover} 
                            className='min-[768px]:w-[712px] min-[992px]:w-[408px]  min-[1440px]:w-[480px] 
                            min-[1920px]:w-[680px] w-[500px] aspect-square '></img>
                    </div>
                </div>
                <div className={`col-span-2 flex flex-col justify-center ${classNameSectionRight}`} >

                    <div className='general-fonts-port uppercase'>
                        <h1 className="text-[22px] min-[768px]:text-[32px] min-[1024px]:text-[50px]  stroke-tittle-album tracking-[3px] ">
                            {currentTrack?.album.title}
                        </h1>
                        <h2 className="text-[22px] min-[768px]:text-[28px] min-[1024px]:text-[2rem] ">
                            {currentTrack?.artists.map((artist) => artist.name).join(", ")}
                        </h2>
                        <div className='flex gap-2 mt-10 items-center [&_button]:[text-transform:inherit]'>
                            {currentTrack &&
                                <button onClick={() => playTrack(currentTrack.id)} className='px-7 py-4 bg-[#50A584] flex 
                                flex-row gap-1.5 items-center leading-none tracking-wider border border-[#50A584]'>
                                    <Icons name={getTrackIcon(currentTrack.id)} className="h-4 w-4 flex items-center" />
                                    <span className='text-[14px]  '>listen now</span>
                                </button>
                            }
                            <button className='px-7 py-4 bg-transparent border-solid flex flex-row  
                items-center gap-2 border-[#F1F1F1] border leading-none tracking-wider ' >
                                <Icons name="share" className="h-4 w-4 flex items-center" />
                                <span className='text-[14px] '>share</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default Portada
