import { useSelector } from "react-redux"
import type { RootState } from "../Store"
import { selectCharacter } from "../SquadronSlice"


export function MainMonitor() {
    const characters = useSelector((state: RootState) => state.squadronCharacters.characterList)
    const selectedId = useSelector((state: RootState) => state.squadronCharacters.selectedId)
    const selectedCharacter = characters.find((c) => c.id === selectedId)
    return(
        <div id = "main-dashboard thing" className="flex flex-col p-6 h-full gap-5 ">
            <div className="text-3xl font-bold tracking-wide text-green-500 ">MAIN MONITOR: REGINA SYNC PROFILE </div>
            <div id = "callsign" className="text-2xl">[ SELECTED PILOT: <span className="text-red-500">{selectedCharacter!.callSign}</span> ]</div>
        </div>
    ) //render different stuff out based on who they are honestly idk how to go about this
}