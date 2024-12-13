"use client"

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Snowfall from 'react-snowfall';

export default function Home() {
  const [messageVisible, setMessageVisible] = useState(false);

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
        <h1 className=' text-white mt-4 text-4xl'>TELEIOS GLOBAL</h1>
      </motion.h1>

      <p className="text-2xl  mb-8 relative text-white ">
      Wishing everyone at Teleios Global a joyful and warm Christmas,<br/>filled with happiness, togetherness, and cherished moments!
      </p>

      <div className="mt-10 relative">
        <Image 
          src="/cap.png"
          alt="Christmas Tree"
          width={200}
          height={200}
        />
        
      </div>
      <button 
        onClick={() => setMessageVisible(!messageVisible)} 
        className="w-[600px] bg-white text-red-600 text-xl rounded-md p-4 relative "
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

      

      <audio controls className="absolute top-2 right-2">
        <source src="/jingle-bells.mp3" type="audio/mpeg" />
      </audio>
      
    </div>
  );
}
