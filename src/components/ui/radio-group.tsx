import React from 'react'

export const RadioGroup = ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`flex flex-col ${className}`} {...props}>
    {children}
  </div>
)

export const RadioGroupItem = ({ children, className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) => (
  <label className={`flex items-center space-x-2 ${className}`}>
    <input type="radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 ${className}" {...props} />
    {children}
  </label>
)
