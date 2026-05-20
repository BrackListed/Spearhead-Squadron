import { useSelector } from "react-redux"
import type { RootState } from "../Store"
import { selectCharacter } from "../SquadronSlice"


export function MainMonitor() {
    const characters = useSelector((state: RootState) => state.squadronCharacters.characterList)
    const selectedId = useSelector((state: RootState) => state.squadronCharacters.selectedId)
    const selectedCharacter = characters.find((c) => c.id === selectedId)
    return(
        <div id = "main-dashboard thing">
            <div id = "header">{selectedCharacter?.name}</div>
        </div>
    ) //render different stuff out based on who they are honestly idk how to go about this
}