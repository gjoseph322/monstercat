import React from 'react'
import { memo } from 'react'
import { useAudioGlobal } from '../features/music-player/context/AudioContext.js';

const BackgroundLayers = () => {
    const {currentTrack} = useAudioGlobal();
    return (
        <div className='absolute w-full h-screen overflow-hidden  -z-10 pointer-events-none select-none'>
            <div className='absolute z-[2] top-0 left-0 w-full h-screen   bg-clip-content
        bg-cover bg-center blur-[10px]  scale-105'  style={{backgroundImage: `url(${currentTrack?.album.cover})`}}/>
            <div className=' absolute z-[2] w-screen h-screen bg-gradient-to-t top-0 right-0
       from-black/80 via-black/70   to-black/40' />
            <div className='absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(0,0,0,0.65),transparent_60%)]' />
        </div>
    )
}

export default memo(BackgroundLayers);
