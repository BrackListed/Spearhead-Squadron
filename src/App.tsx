

export default function App(){
  return(
    <div className="flex flex-col p-6 w-screen max-w-full box-border">
      <Header/>
    </div>
  )
}

export function Header(){
  return(
    <div className="flex rounded-lg justify-between sticky top-0 z-50 p-6 items-center bg-zinc-900/75 backdrop-blur-md border-b border-white/5">
      <div id = "left" className="font-medium text-2xl tracking-wide ">[H-1] Bloody Regina // TACTICAL OVERVIEW MONITOR</div>
      <div id = "right" className="font-medium text-2xl tracking wide text-green-400">[SYSTEM STATUS: OK]</div>
    </div>
  )
}