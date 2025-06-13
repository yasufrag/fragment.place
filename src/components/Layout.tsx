// src/components/Layout.tsx
import { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen px-4 py-8">
      {children}
    </div>
  )
}