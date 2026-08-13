import React from 'react'
import Portada from '../../../components/Portada.js';
import TrackList from './TrackList.js';
import MusicVideo from './MusicVideo.js';
import Footer from '../../../components/Footer.js';

interface MusicPlayerProps {
    className?: string;
}

const MusicPlayer = ({className=""}:MusicPlayerProps) => {

    return (
        <main className={`${className} relative flex flex-col `}>

            <Portada  className='animate-slide-in-right' />

            <TrackList/>

            <MusicVideo/>

        </main>
    )
}

export default MusicPlayer
