import React from 'react'

export default function Container({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`max-w-7xl w-full mx-auto lg:px-8 md:px-4 px-2 ${className ?? ''}`}>
      { children }
    </div>
  )
}
