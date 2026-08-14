import Header from './components/Header.js'
import { AudioProvider } from './features/music-player/context/AudioContext.js';
import BackgroundLayers from './components/BackgroundLayers.js';
import { useAudioGlobal } from './features/music-player/context/AudioContext.js';
import Footer from './components/Footer.js'
import MusicPlayer from './features/music-player/components/MusicPlayer.js';

export default function App() {

  return (
    <AudioProvider>
      <GlobalInfrastructure />
    </AudioProvider>

  )
}

const GlobalInfrastructure = () => {
  const { currentTrack, audioRef,
    onAudioPlay, onAudioPause, onAudioCanPlay, onAudioEnded,
    onAudioTimeUpdate, onAudioLoadedMetadata, onAudioError,
  } = useAudioGlobal();

  return (
    <div className='relative h-full flex flex-col  text-[#F1F1F1] '> {/* flex ocupa todo el espacio del papá si lo pones en uno de sus hijos */}
      {currentTrack &&
        <audio ref={audioRef} src={currentTrack.audioUrl}
          onPlay={onAudioPlay} onPause={onAudioPause} onCanPlay={onAudioCanPlay}
          onEnded={onAudioEnded} onTimeUpdate={onAudioTimeUpdate} onLoadedMetadata={onAudioLoadedMetadata}
          onError={onAudioError} className='hidden' />
      }

      <Header />

      <BackgroundLayers />

      <div className='mx-auto px-[16px] my-[112px] min-[992px]:max-w-[992px] min-[1440px]:max-w-[1200px] min-[1920px]:max-w-[1600px] min-[2560px]:max-w-[1920px]'>
        <MusicPlayer />

        <Footer />
      </div>

    </div>
  )
}
