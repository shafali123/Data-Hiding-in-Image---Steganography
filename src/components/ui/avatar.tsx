import React from 'react'

export const Avatar = ({ src, fallback }: { src: string; fallback: string }) => (
  <div className="relative w-10 h-10">
    <img src={src} alt="Avatar" className="rounded-full w-full h-full object-cover" />
    <div className="absolute inset-0 rounded-full bg-black opacity-0 hover:opacity-10 transition-opacity"></div>
    <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity">
      {fallback}
    </div>
  </div>
)
