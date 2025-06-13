import { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen px-6 py-12 max-w-3xl mx-auto">
      {children}
    </div>
  )
}