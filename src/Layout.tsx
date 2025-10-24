import type { PropsWithChildren } from 'react'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <div className="m-10 h-40 bg-slate-500 border-2 border-black overflow-hidden relative">
        {children}
      </div>
    </>
  )
}