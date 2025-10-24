import type { PropsWithChildren } from 'react'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <div className=" bg-slate-500 border-2 border-black overflow-hidden relative">
        {children}
      </div>
    </>
  )
}