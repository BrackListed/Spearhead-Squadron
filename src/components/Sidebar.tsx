
import { useDispatch, useSelector } from "react-redux"
import { selectCharacter } from "../SquadronSlice"
import type { RootState } from "../Store"


export function Sidebar(){
    const dispatch = useDispatch()
    const characters = useSelector((state: RootState) => state.squadronCharacters.characterList)
    function handleSelectCharacter(id: number){ //takes the id
        dispatch(selectCharacter(id)) //wtf we're saying selected id equals id? yes so if that's true then display the character! wooo
    }
    
    return(
        <div className="flex flex-col gap-2 px-5 py-3 border-r-2 border-white/5">
            <div id = "header" className="font-medium text-2xl tracking-wide">SQUADRON ROSTER</div>
            <div id = "characters" className="flex flex-col gap-2 border-slate-600">
                {characters.map((character) => (
                    <div className="flex gap-2">[{character.callSign}] {character.name}</div>
                ))}
            </div>
        </div>
    )
}