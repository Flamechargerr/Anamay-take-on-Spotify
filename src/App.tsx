import React, { useState } from 'react';
import { Home, Search, Library, Heart, Plus, LayoutList, Volume2, Shuffle, SkipBack, Play, Pause, SkipForward, Repeat, Mic2, ListMusic, Laptop2, Volume1, Maximize2 } from 'lucide-react';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState({
    title: "Summer Walk",
    artist: "Olexy",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop",
    audio: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3"
  });

  const songs = [
    {
      title: "Summer Walk",
      artist: "Olexy",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop",
      audio: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3"
    },
    {
      title: "Lofi Study",
      artist: "FASSounds",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
      audio: "https://cdn.pixabay.com/download/audio/2022/10/25/audio_17e787d5df.mp3"
    },
    {
      title: "Ambient Piano",
      artist: "SergeQuadrado",
      image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=300&fit=crop",
      audio: "https://cdn.pixabay.com/download/audio/2022/03/17/audio_c8c8a73acc.mp3"
    },
    {
      title: "Electronic Dreams",
      artist: "Coma-Media",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop",
      audio: "https://cdn.pixabay.com/download/audio/2022/01/18/audio_e6b2cd4a4e.mp3"
    },
    {
      title: "Calm Meditation",
      artist: "ZakharValaha",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&h=300&fit=crop",
      audio: "https://cdn.pixabay.com/download/audio/2021/10/25/audio_1b7feb1c41.mp3"
    },
    {
      title: "Acoustic Motivation",
      artist: "Music_Unlimited",
      image: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?w=300&h=300&fit=crop",
      audio: "https://cdn.pixabay.com/download/audio/2022/10/14/audio_e36dc22311.mp3"
    }
  ];

  const playlists = [
    "Copyright Free Mix",
    "Study Beats",
    "Ambient Sounds",
    "Focus Flow"
  ];

  const handlePlay = (song) => {
    const audio = document.querySelector('audio');
    if (currentSong.title === song.title) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    } else {
      setCurrentSong(song);
      setIsPlaying(true);
      setTimeout(() => {
        audio.play();
      }, 0);
    }
  };

  return (
    <div className="h-screen flex flex-col bg-black">
      <div className="bg-gradient-to-r from-purple-800 to-blue-900 text-white p-4 text-center font-bold text-xl md:text-2xl">
        Anamay's take on Spotify - Copyright Free Music Edition
      </div>
      
      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="hidden md:flex w-64 bg-black p-6 flex-col gap-6">
          <nav className="space-y-4">
            <a href="#" className="text-gray-400 hover:text-white flex items-center gap-4">
              <Home size={24} />
              <span className="font-semibold">Home</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-white flex items-center gap-4">
              <Search size={24} />
              <span className="font-semibold">Search</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-white flex items-center gap-4">
              <Library size={24} />
              <span className="font-semibold">Your Library</span>
            </a>
          </nav>

          <div className="mt-4 space-y-4">
            <button className="text-gray-400 hover:text-white flex items-center gap-4">
              <div className="p-1 bg-gray-400 hover:bg-white rounded-sm">
                <Plus size={20} className="text-black" />
              </div>
              <span className="font-semibold">Create Playlist</span>
            </button>
            <button className="text-gray-400 hover:text-white flex items-center gap-4">
              <div className="p-1 bg-gradient-to-br from-indigo-600 to-purple-400 rounded-sm">
                <Heart size={20} className="text-white" />
              </div>
              <span className="font-semibold">Liked Songs</span>
            </button>
          </div>

          <div className="border-t border-gray-800 pt-4 mt-4">
            <div className="space-y-2">
              {playlists.map((playlist) => (
                <a key={playlist} href="#" className="text-gray-400 hover:text-white block py-1">
                  {playlist}
                </a>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 bg-gradient-to-b from-indigo-900 to-black overflow-y-auto p-4 md:p-8">
          <header className="flex items-center justify-between mb-8">
            <div className="flex gap-4">
              <button className="rounded-full bg-black/40 p-1">
                <SkipBack size={24} className="text-white" fill="currentColor" />
              </button>
              <button className="rounded-full bg-black/40 p-1">
                <SkipForward size={24} className="text-white" fill="currentColor" />
              </button>
            </div>
            <div className="flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=32&h=32&fit=crop&crop=faces"
                alt="Profile"
                className="w-8 h-8 rounded-full"
              />
            </div>
          </header>

          <h1 className="text-2xl font-bold text-white mb-6">Copyright Free Music</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
            {songs.map((song) => (
              <div key={song.title} className="bg-white/10 group rounded-md overflow-hidden hover:bg-white/20 transition cursor-pointer flex items-center">
                <img src={song.image} alt={song.title} className="w-20 h-20 object-cover" />
                <div className="flex-1 p-4">
                  <h3 className="font-semibold text-white">{song.title}</h3>
                  <p className="text-gray-400 text-sm">{song.artist}</p>
                </div>
                <button 
                  className="mr-4 rounded-full bg-green-500 p-3 opacity-0 group-hover:opacity-100 transition"
                  onClick={() => handlePlay(song)}
                >
                  {currentSong.title === song.title && isPlaying ? (
                    <Pause size={24} className="text-black" fill="currentColor" />
                  ) : (
                    <Play size={24} className="text-black" fill="currentColor" />
                  )}
                </button>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-white mb-6">Featured Artists</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {songs.map((song) => (
              <div key={song.title} className="bg-zinc-900 p-4 rounded-md hover:bg-zinc-800 transition cursor-pointer">
                <img
                  src={song.image}
                  alt={song.title}
                  className="w-full aspect-square object-cover rounded-md mb-4"
                />
                <h3 className="text-white font-semibold mb-2">{song.artist}</h3>
                <p className="text-gray-400 text-sm">Artist</p>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* Player */}
      <footer className="h-24 bg-zinc-900 border-t border-zinc-800 p-4">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-4">
            <img
              src={currentSong.image}
              alt="Now playing"
              className="w-14 h-14 rounded"
            />
            <div>
              <h4 className="text-white text-sm">{currentSong.title}</h4>
              <p className="text-gray-400 text-xs">{currentSong.artist}</p>
            </div>
            <button className="text-gray-400 hover:text-white">
              <Heart size={20} />
            </button>
          </div>

          <div className="flex flex-col items-center gap-2 max-w-xl w-full">
            <div className="flex items-center gap-6">
              <button className="text-gray-400 hover:text-white">
                <Shuffle size={20} />
              </button>
              <button className="text-gray-400 hover:text-white">
                <SkipBack size={20} fill="currentColor" />
              </button>
              <button 
                className="rounded-full bg-white p-2"
                onClick={() => handlePlay(currentSong)}
              >
                {isPlaying ? (
                  <Pause size={24} className="text-black" fill="currentColor" />
                ) : (
                  <Play size={24} className="text-black" fill="currentColor" />
                )}
              </button>
              <button className="text-gray-400 hover:text-white">
                <SkipForward size={20} fill="currentColor" />
              </button>
              <button className="text-gray-400 hover:text-white">
                <Repeat size={20} />
              </button>
            </div>
            <div className="flex items-center gap-2 w-full">
              <span className="text-xs text-gray-400">0:00</span>
              <div className="h-1 bg-gray-600 rounded-full flex-1">
                <div className="h-1 bg-gray-400 rounded-full w-1/3" />
              </div>
              <span className="text-xs text-gray-400">3:45</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="text-gray-400 hover:text-white">
              <Mic2 size={20} />
            </button>
            <button className="text-gray-400 hover:text-white">
              <ListMusic size={20} />
            </button>
            <button className="text-gray-400 hover:text-white">
              <Laptop2 size={20} />
            </button>
            <div className="flex items-center gap-2">
              <button className="text-gray-400 hover:text-white">
                <Volume1 size={20} />
              </button>
              <div className="h-1 bg-gray-600 rounded-full w-24">
                <div className="h-1 bg-gray-400 rounded-full w-2/3" />
              </div>
            </div>
            <button className="text-gray-400 hover:text-white">
              <Maximize2 size={20} />
            </button>
          </div>
        </div>
        <audio src={currentSong.audio} />
      </footer>
    </div>
  );
}

export default App;