import React from 'react'

interface Props{
    title: string
    description: string;
    children: React.ReactNode;
}

export default function Solution({title, description, children}: Props) {
  return (
    <div className='bg-[#0a0332] flex-1 rounded-xl pt-6 pb-16 px-4'>
        {children}
        <p className='text-center text-white text-xl font-semibold my-4'>{title}</p>
        <p className='text-sm text-center text-[#d5d5d5]'>{description}</p>
    </div>
  )
}
