import React from 'react'

export const Select = ({ children, className, ...props }: React.HTMLAttributes<HTMLSelectElement>) => (
  <select className={`border border-gray-300 p-2 rounded w-full ${className}`} {...props}>
    {children}
  </select>
)

export const SelectTrigger = ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`bg-white p-2 rounded border border-gray-300 ${className}`} {...props}>
    {children}
  </div>
)

export const SelectValue = ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`text-gray-500 ${className}`} {...props}>
    {children}
  </div>
)

export const SelectContent = ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`bg-white p-2 rounded border border-gray-300 shadow-md ${className}`} {...props}>
    {children}
  </div>
)

export const SelectItem = ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`p-2 hover:bg-gray-100 rounded ${className}`} {...props}>
    {children}
  </div>
)
