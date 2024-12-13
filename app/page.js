"use client";

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Snowfall from 'react-snowfall';

export default function Home() {
  const [messageVisible, setMessageVisible] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Attempt to play the audio when the component mounts
    if (audioRef.current) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Audio playback started
            console.log('Audio playback started');
          })
          .catch(error => {
            // Auto-play was prevented
            console.log('Autoplay prevented:', error);
            // Optionally, you can handle the error, e.g., show a play button
          });
      }
    }
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center text-white p-4">
      {/* Background layers */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: "url('/bg1.png')" }}
      />
      {/* <div 
        className="absolute inset-0 bg-gradient-to-b from-green-900 to-green-600 opacity-70"
      /> */}
      
      {/* Snowfall with increased intensity */}
      <Snowfall snowflakeCount={300} />

      <motion.h1
        className="text-8xl font-black mb-4 relative text-green-600 py-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        MERRY CHRISTMAS
        <span className=' text-white mt-4 text-4xl'>TELEIOS GLOBAL</span>
      </motion.h1>

      <p className="text-2xl mb-8 relative text-white ">
        Wishing everyone at Teleios Global a joyful and warm Christmas,<br/>filled with happiness, togetherness, and cherished moments!
      </p>

      <div className="mt-10 relative">
        <Image 
          src="/cap.png"
          alt="Decorative Christmas Cap"
          width={200}
          height={200}
        />
      </div>

      <button 
        onClick={() => setMessageVisible(!messageVisible)} 
        className="w-full max-w-md bg-white text-red-600 text-xl rounded-md p-4 relative mt-6 hover:bg-gray-200 transition"
        aria-pressed={messageVisible}
      >
        {messageVisible ? 'Hide Personal Note' : 'VIEW'}
      </button>
      
      {messageVisible && (
        <motion.div
          className="mt-8 bg-white text-black p-4 rounded-lg shadow-lg max-w-md relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-2">A Special Message</h2>
          <p>
            This Christmas season, let us celebrate our accomplishments and look forward to new opportunities. 
            May the upcoming year bring Teleios Global even greater success, prosperity, and unity.
            <br /><br />
            Merry Christmas and Happy New Year to all!
          </p>
        </motion.div>
      )}

      {/* Autoplay Audio */}
      <audio
        ref={audioRef}
        autoPlay
        loop
        className="absolute top-2 right-2"
        aria-label="Jingle Bells Audio"
      >
        <source src="/jingle-bells.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      
    </div>
  );
}
