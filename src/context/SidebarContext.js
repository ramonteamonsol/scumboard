import React, { createContext, useState, useContext, useEffect, useRef } from 'react';

// Create the context
const SidebarContext = createContext();

// Provider component
export const SidebarProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSound, setIsSound] = useState(false);
  const audioRef = useRef(null);
  // Toggler function
  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };
  const toggleSound = () => {
    setIsSound((prev) => !prev);
  };

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/assets/audio/r1ramon.mp3"); // Ensure this path exists
      audioRef.current.loop = true; // Keep the sound playing if needed
    }

    if (isSound) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }

    return () => {
      audioRef.current.pause(); // Stop playing when component unmounts
    };
  }, [isSound]);
  return (
    <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar, isSound, toggleSound }}>
      {children}
    </SidebarContext.Provider>
  );
};

// Custom hook to use the context
export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
};
