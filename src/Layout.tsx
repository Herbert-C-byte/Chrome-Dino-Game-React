import type { PropsWithChildren } from 'react'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <div className="w-96 h-52 bg-slate-500 border-2 border-black overflow-hidden relative">
        {children}
      </div>
    </>
  )
}