import React from 'react'

export const Input = ({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input className={`border border-gray-300 p-2 rounded w-full ${className}`} {...props} />
)
