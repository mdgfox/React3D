"use client"
import { useTheme } from "next-themes";
import { FC } from "react";
import { FaMoon, FaSun } from 'react-icons/fa'

const ThemeSwitcher: FC = () => {
    const {resolvedTheme, setTheme} = useTheme();
    return (
        <div className="absolute right-10 top-10">
          <button onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}>
            {resolvedTheme === 'dark' ? 
              <FaSun className='transition-colors duration-300 hover:text-light-button dark:hover:text-dark-button' size={40}/> : 
                <FaMoon className='transition-colors duration-300 hover:text-light-button dark:hover:text-dark-button' size={40}/>}
          </button>
        </div>
      )
}

export default ThemeSwitcher;