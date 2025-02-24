import React from 'react'

export const Card = ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`bg-white p-4 rounded shadow-md ${className}`} {...props}>
    {children}
  </div>
)

export const CardHeader = ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`pb-4 ${className}`} {...props}>
    {children}
  </div>
)

export const CardTitle = ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <h3 className={`text-lg font-bold ${className}`} {...props}>
    {children}
  </h3>
)

export const CardDescription = ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <p className={`text-gray-500 ${className}`} {...props}>
    {children}
  </p>
)

export const CardContent = ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`pt-4 ${className}`} {...props}>
    {children}
  </div>
)

export const CardFooter = ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`pt-4 ${className}`} {...props}>
    {children}
  </div>
)
