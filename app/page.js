"use client";

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [messageVisible, setMessageVisible] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const audioRef = useRef(null);

  // Function to handle manual audio play
  const handlePlayAudio = () => {
    if (audioRef.current) {
      audioRef.current.play()
        .then(() => {
          setIsAudioPlaying(true);
        })
        .catch(error => {
          console.log('Play attempt failed:', error);
        });
    }
  };

  // Attempt to autoplay audio on component mount
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play()
        .then(() => {
          setIsAudioPlaying(true);
        })
        .catch(error => {
          console.log('Autoplay prevented:', error);
          // Audio will not play automatically; user needs to initiate
        });
    }
  }, []);

  // SVG Snowflake Component
  const Snowflake = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
      className="snowflake-svg"
    >
      <path d="M12 2L13.09 8.26L19 8.27L14.545 11.97L15.637 18.23L12 14.97L8.363 18.23L9.455 11.97L5 8.27L10.91 8.26L12 2Z" />
    </svg>
  );

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center text-white p-4 overflow-hidden bg-black">
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: "url('/bg1.png')" }}
      />

      {/* Snowfall Effect */}
      <div className="snowflakes">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="snowflake"
            style={{
              left: `${Math.random() * 100}vw`,
              animationDuration: `${Math.random() * 10 + 5}s`, // 5s to 15s
              transform: `translateX(${Math.random() * 20 - 10}px) scale(${Math.random() * 0.5 + 0.5})`, // Drift and scale
              opacity: Math.random() * 0.5 + 0.5, // Opacity between 0.5 and 1
              animationDelay: `${Math.random() * 10}s`, // Staggered start
            }}
          >
            <Snowflake />
          </div>
        ))}
      </div>

      {/* Snowfall Styling */}
      <style jsx>{`
        .snowflake {
          position: absolute;
          top: -50px;
          user-select: none;
          animation: fall ease-in infinite;
          pointer-events: none;
          z-index: 2;
        }

        .snowflake-svg {
          width: 1em;
          height: 1em;
        }

        @keyframes fall {
          0% {
            transform: translateY(0) rotate(0deg) scale(0.8);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(360deg) scale(1);
            opacity: 0;
          }
        }

        .snowflakes {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 1;
          pointer-events: none;
        }

        /* Overlay for Play Button */
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 20;
        }

        .play-button {
          padding: 1rem 2rem;
          background: white;
          color: black;
          border: none;
          border-radius: 5px;
          font-size: 1.2rem;
          cursor: pointer;
          transition: background 0.3s;
        }

        .play-button:hover {
          background: #f0f0f0;
        }

        /* Runners Styling */
        .runner {
          position: absolute;
          bottom: 10%;
          z-index: 3;
        }

        .runner1 {
          top: 80%;
        }

        .runner2 {
          top: 85%;
        }

        .runner3 {
          top: 90%;
        }

        /* Responsive Adjustments */
        @media (max-width: 768px) {
          .runner {
            width: 60px;
            height: 60px;
          }

          .runner1, .runner2, .runner3 {
            top: auto;
            bottom: 10%;
          }
        }
      `}</style>

      {/* Festive Header */}
      <motion.h1
        className="text-6xl md:text-8xl font-black mb-4 relative text-green-600 py-4 z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        MERRY CHRISTMAS
        <span className='text-white mt-4 block text-4xl md:text-5xl'>TELEIOS GLOBAL</span>
      </motion.h1>

      {/* Greeting Message */}
      <p className="text-xl md:text-2xl mb-8 relative z-10">
        Wishing everyone at Teleios Global a joyful and warm Christmas,<br/>filled with happiness, togetherness, and cherished moments!
      </p>

      {/* Decorative Image */}
      <div className="mt-10 relative z-10">
        <Image 
          src="/cap.png"
          alt="Decorative Christmas Cap"
          width={200}
          height={200}
        />
      </div>

      {/* Toggle Button */}
      
      <button 
        onClick={() => setMessageVisible(!messageVisible)} 
        className="w-full max-w-md bg-white text-red-600 text-xl rounded-md p-4 relative mt-6 hover:bg-gray-200 transition z-10"
        aria-pressed={messageVisible}
      >
        {messageVisible ? 'Hide Personal Note' : 'VIEW'}
      </button>
      
      {/* Conditional Personal Message */}
      {messageVisible && (
        <motion.div
          className="mt-8 bg-white text-black p-4 rounded-lg shadow-lg max-w-md relative z-10"
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
        loop
        className="absolute top-2 right-2"
        aria-label="Jingle Bells Audio"
      >
        <source src="/jingle-bells.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Overlay Play Button if Audio Not Playing */}
      {!isAudioPlaying && (
        <div className="overlay" onClick={handlePlayAudio}>
          <button className="play-button">Play Music</button>
        </div>
      )}

      {/* Animated Runners */}
      {/* Runner 1 */}
     
      {/* Runners Styling */}
      <style jsx>{`
        .runner {
          position: absolute;
          bottom: 10%;
          z-index: 3;
        }

        .runner1 {
          top: 80%;
        }

        .runner2 {
          top: 85%;
        }

        .runner3 {
          top: 90%;
        }

        /* Responsive Adjustments */
        @media (max-width: 768px) {
          .runner {
            width: 60px;
            height: 60px;
          }

          .runner1, .runner2, .runner3 {
            top: auto;
            bottom: 10%;
          }
        }
      `}</style>
      
    </div>
  );
}
