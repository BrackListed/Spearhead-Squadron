import { useSelector } from "react-redux"
import type { RootState } from "../Store"


export function MainMonitor() {
    const characters = useSelector((state: RootState) => state.squadronCharacters.characterList)
    const selectedId = useSelector((state: RootState) => state.squadronCharacters.selectedId)
    const selectedCharacter = characters.find((c) => c.id === selectedId)
    return(
        <div id = "main-dashboard thing" className="flex flex-col p-6 h-full gap-5 w-full ">
            <div className="flex justify-between w-full">

                <div id = "left" className="flex flex-col gap-5">
                    <h1 className="text-3xl font-bold tracking-wide text-green-500 ">MAIN MONITOR: REGINA SYNC PROFILE</h1>
                    <p className="text-2xl">[SELECTED PILOT: <span className="text-red-500">{selectedCharacter!.callSign}</span>]</p>
                    <div className="mt-6 max-w-xs space-y-2 font-mono">
                        <div className="flex justify-between text-xs tracking-wider text-neutral-400 uppercase">
                        <span>Para-RAID Sync Rate</span>
                        <span className="text-[#ff3333] font-semibold animate-pulse">{selectedCharacter?.syncRatio}</span>
                         </div>
                    </div>
                    <div className="w-full h-3 bg-neutral-900 border border-neutral-800 rounded-sm p-0.5 overflow-hidden">
                        <div className="h-full bg-[#ff3333] rounded-sm shadow-[0_0_8px_rgba(255,51,51,0.5)] transition-all duration-500 ease-out"
                         style={{ width: `${selectedCharacter?.syncRatio}%` }} />
                    </div>
                </div>

                <div className="w-full sm:w-48 h-60 shrink-0 bg-[#0d0d0d] border border-neutral-800 rounded overflow-hidden relative group shadow-lg">
                    <img src = {selectedCharacter!.img} alt = "Image of character" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"></img>
                </div>

            </div>

        </div>
    )
}