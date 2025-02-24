import React from 'react'

export const Textarea = ({ className, ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => (
  <textarea className={`border border-gray-300 p-2 rounded w-full h-24 ${className}`} {...props} />
)
