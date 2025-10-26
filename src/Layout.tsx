import type { PropsWithChildren } from 'react'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <div className="relative m-10 h-40 bg-slate-200 border-2 border-black overflow-hidden">
        {children}
      </div>
    </>
  )
}