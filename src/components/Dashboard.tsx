import { MainMonitor } from "./MainMonitor";
import { Sidebar } from "./Sidebar";

export function Dashboard() {
  return(
    <div className="flex gap-3 rounded-lg sticky p-3 items-center bg-zinc-900/75 backdrop-blur-md border-b border-white/5 h-fit">
      <Sidebar/>
      <MainMonitor/>
    </div>
  )
}
