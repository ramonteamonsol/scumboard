"use client"
import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import { AudioOffIcon, AudioOnIcon, MenuIcon } from '../helper/Icon'
import Header from './Header'
import { SidebarProvider, useSidebar } from '@/context/SidebarContext'
import { usePathname } from 'next/navigation'
import AOS from 'aos'
import 'aos/dist/aos.css';
import LoadingScreen from './LodingScreen'
import { AnimationProvider } from '@/context/AnimationContext'
import Footer from './Footer'

export default function Layout({ children }) {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <SidebarProvider>
      <AnimationProvider>
        {loading === true && <LoadingScreen />}
        <MainLayout pathname={pathname} children={children} />
      </AnimationProvider>
    </SidebarProvider>
  );
}

function MainLayout({ pathname, children }) {
  const { toggleSidebar, toggleSound, isSound } = useSidebar();
  return (
    <>
      <Sidebar />
      {pathname === '/' ? (
        <>
          <button
            onClick={toggleSidebar}
            type="button"
            aria-label="Toggle sidebar"
            className="fixed top-1 right-10 lg:right-32 z-40 text-[#B4FFA3] max-w-10 focus:outline-none hover:text-green-300 transition-colors"
          >
            <MenuIcon />
          </button>
          <button
            onClick={toggleSound}
            type="button"
            aria-label="Toggle sidebar"
            className="fixed top-1 left-10 lg:left-32 z-40 text-[#B4FFA3] max-w-10 focus:outline-none hover:text-green-300 transition-colors"
          >
            {isSound ? <AudioOnIcon /> : <AudioOffIcon />}
          </button>
        </>
      ) : (
        <Header />
      )}
      {children}{pathname === '/' ? (
        null
      ) : (
        <Footer />
      )}
    </>
  );
}
