"use client"
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from 'react-icons/fa'

export const ThemeSwitcher = () => {
    const {resolvedTheme, setTheme} = useTheme();
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
      setLoaded(true);
    }, [setLoaded]);
    return (
        <div className="absolute right-10 top-10">
          <button onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}>
            {loaded && resolvedTheme === 'dark' ? 
              <FaSun className='transition-colors duration-300 hover:text-light-button dark:hover:text-dark-button' size={40}/> : 
                <FaMoon className='transition-colors duration-300 hover:text-light-button dark:hover:text-dark-button' size={40}/>}
          </button>
        </div>
      )
}