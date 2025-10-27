import type { PropsWithChildren } from 'react'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <div className="relative m-10 h-52 bg-slate-100 border-2 border-black overflow-hidden">
        {children}
      </div>
    </>
  )
}