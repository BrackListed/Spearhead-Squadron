import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../Store"
import { setSyncRatio } from "../SquadronSlice"; //impport this instead of useselector because it doesn't need to read data it just needs to say "go"


export function MainMonitor() {
    interface Character {
        id: number;
         callSign: string;
        name: string;
        status: 'ACTIVE' | 'STANDBY' | 'KIA';
        syncRatio: number;
        img: string
    }
    const dispatch = useDispatch()
    const characters = useSelector((state: RootState) => state.squadronCharacters.characterList)
    const selectedId = useSelector((state: RootState) => state.squadronCharacters.selectedId)
    const selectedCharacter = characters.find((c) => c.id === selectedId)
    return(
        <div id = "main-dashboard thing" className="flex flex-col p-6 h-full gap-5 w-full ">
            <div className="flex justify-evenly w-full">

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

                <div id = 'center' className="flex gap-2">
                    <button onClick = {() => dispatch(setSyncRatio())}className="px-4 py-1.5 text-xs font-bold tracking-widest text-[#39ff14] uppercase transition-all duration-200 ease-in-out bg-transparent border border-[#39ff14]/30 hover:bg-[#39ff14]/10 hover:border-[#39ff14] hover:shadow-[0_0_12px_rgba(57,255,20,0.4)] cursor-pointer select-none">OVERCLOCK</button>
                    <button className="px-4 py-1.5 text-xs font-bold tracking-widest text-[#ff3333] uppercase transition-all duration-200 ease-in-out bg-transparent border border-[#ff3333]/30 hover:bg-[#ff3333]/10 hover:border-[#ff3333] hover:shadow-[0_0_12px_rgba(255,51,51,0.5)] cursor-pointer select-none">EJECT</button>
                </div>

                <div id = "right" className="w-full sm:w-48 h-60 shrink-0 bg-[#0d0d0d] border border-neutral-800 rounded overflow-hidden relative group shadow-lg">
                    <img src = {selectedCharacter!.img} alt = "Image of character" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"></img>
                </div>

            </div>

        </div>
    )

}