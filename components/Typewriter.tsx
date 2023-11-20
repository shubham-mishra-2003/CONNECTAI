import React, { useState, useEffect, useMemo } from 'react';

const Typewriter: React.FC = () => {
  const strings = useMemo(() => [
    "ChatBot",
    "Code Generator",
    "Image Generator",
    "Video Generator",
    "Music Generator",
  ], []);

  const [currentString, setCurrentString] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const typeString = () => {
      const targetString = strings[currentIndex];
      const currentStringLength = currentString.length;

      if (currentStringLength < targetString.length) {
        setCurrentString(targetString.substring(0, currentStringLength + 1));
      } else {
        setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % strings.length);
        }, 1500);
      }
    };

    const typingInterval = setInterval(typeString, 100);

    return () => clearInterval(typingInterval);
  }, [currentIndex, currentString, strings]);

  return (
    <div>
      <h1>{currentString}</h1>
    </div>
  );
};

export default Typewriter;