import React, { useContext } from 'react'
import { useAudioGlobal } from '../context/AudioContext.js'
interface MusicVideoProps {
    className?: string;
    classNameVideo?: string
}
const MusicVideo = ({className="", classNameVideo=""} : MusicVideoProps) => {
    const {currentTrack}= useAudioGlobal();
    return (
        <section className={`${className}  my-14 `}>
            <div className='flex flex-col gap-10' >
                <div >
                    <h3 className='general-fonts-port leading-none
               text-[1.3rem] min-[533px]:text-[1.7rem] min-[769px]:text-[2.2rem] 
                min-[1441px]:text-[2.8rem] '> MUSIC VIDEO
                    </h3>
                </div>
                <div>
                    <iframe
                        className={`${classNameVideo}  w-full aspect-video border-0`}
                        src={`https://youtube.com/embed/${currentTrack?.youtubeId}`}
                        title="YouTube player"
                        allowFullScreen
                    />
                </div>

            </div>
        </section>
    )
}

export default MusicVideo
