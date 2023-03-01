import React from 'react'

interface PageContainerProps {
  children: React.ReactNode
}

export const PageContainer = ({ children }: PageContainerProps) => (
  <main className="max-w-5xl mx-auto w-full px-4 sm:px-6 md:px-8">
    {children}
  </main>
)
