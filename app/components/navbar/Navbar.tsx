'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import {
  BsChatLeftDots,
  BsMoon,
  BsSearch,
  BsCalendar3,
  BsSun
} from 'react-icons/bs'
import { SlBell } from 'react-icons/sl'
import { Tooltip } from '@mui/material'

const Navbar = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  const date = new Date().toLocaleDateString('en-us', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div className='fixed bottom-0 left-72 right-0 top-0 z-10 box-border flex h-20 min-w-[600px] max-w-full items-center justify-between gap-3 bg-white px-10 shadow-md shadow-gray-300/20 dark:bg-black dark:shadow-none'>
      <div className='relative basis-2/5'>
        <input
          className='focus:border-1 w-full rounded-xl bg-gray-300/30 py-3 pl-5 text-gray-700 outline-none transition duration-300 ease-in-out placeholder:font-normal placeholder:text-gray-400 hover:bg-gray-300/40 focus:border-2 focus:border-blue-600 dark:text-gray-300  dark:hover:bg-gray-300/30 dark:focus:border-blue-600'
          type='text'
          placeholder='Search'
        />
        <BsSearch className='absolute right-5 top-1/2 -translate-y-1/2 dark:fill-gray-400' />
      </div>
      <div className='flex max-w-fit items-center gap-6'>
        {theme === 'dark' ? (
          <div className='tooltip tooltip-bottom' data-tip='Light Theme'>
            <div
              onClick={() => setTheme('light')}
              className='group cursor-pointer rounded-full  p-3 transition duration-300 ease-in-out dark:hover:bg-gray-400/30'
            >
              <BsSun className='h-6 w-6 fill-gray-500 transition duration-300 ease-in-out dark:group-hover:fill-gray-300' />
            </div>
          </div>
        ) : (
          <div className='tooltip tooltip-bottom' data-tip='Dark Theme'>
            <div
              onClick={() => setTheme('dark')}
              className='group cursor-pointer rounded-full  p-3 transition duration-300 ease-in-out hover:bg-gray-300/30'
            >
              <BsMoon className='h-6 w-6 fill-gray-500 transition duration-300 ease-in-out group-hover:fill-blue-600' />
            </div>
          </div>
        )}
        <Tooltip title='Notifications'>
          <div className='group cursor-pointer rounded-full  p-2.5 transition duration-300 ease-in-out hover:bg-gray-300/30 dark:hover:bg-gray-400/30'>
            <div className='relative'>
              <span className='ping absolute right-0.5 top-px h-2 w-2 rounded-full bg-red-500'></span>
              <span className='absolute right-0.5 top-px h-2 w-2 rounded-full bg-red-500'></span>
              <SlBell className='h-6 w-6 fill-gray-500 transition duration-300 ease-in-out group-hover:fill-blue-600 dark:group-hover:fill-gray-300' />
            </div>
          </div>
        </Tooltip>
        <Tooltip title='Chats'>
          <div className='group cursor-pointer rounded-full  p-3 transition duration-300 ease-in-out hover:bg-gray-300/30 dark:hover:bg-gray-400/30'>
            <div className='relative'>
              <span className='ping absolute -right-1 -top-px h-2 w-2 rounded-full bg-red-500'></span>
              <span className='absolute -right-1 -top-px h-2 w-2 rounded-full bg-red-500'></span>
              <BsChatLeftDots className='h-6 w-6 fill-gray-500 transition duration-300 ease-in-out group-hover:fill-blue-600 dark:group-hover:fill-gray-300' />
            </div>
          </div>
        </Tooltip>
        <div className='mr-1 h-10 w-px border-r dark:border-gray-500'></div>
        <div className='flex items-center gap-3'>
          <BsCalendar3 className='h-5 w-5 fill-gray-500/80' />
          <span className='break-words text-sm text-gray-500/80 dark:text-gray-400/80 xl:text-base'>
            {date}
          </span>
        </div>
      </div>
    </div>
  )
}
export default Navbar
