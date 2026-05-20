
import { useDispatch, useSelector } from "react-redux"
import { selectCharacter } from "../SquadronSlice"
import type { RootState } from "../Store"


export function Sidebar(){
    const dispatch = useDispatch()
    const characters = useSelector((state: RootState) => state.squadronCharacters.characterList)
    function handleSelectCharacter(id: number){ //takes the id
        dispatch(selectCharacter(id)) // true then display the character
    }
    
    return(
        <div className="flex flex-col gap-2 px-5 py-3 border-r-2 border-white/5">
            <div id = "header" className="font-medium text-2xl tracking-wide">SQUADRON ROSTER</div>
            <div id = "characters" className="flex flex-col gap-5 my-5 border-slate-600">
                {characters.map((character) => (
                    <div onClick = {() => handleSelectCharacter(character.id)}className="flex gap-2 hover:brightness-50 hover:p-2 hover:scale-105 transition-all hover:cursor-pointer">[{character.callSign}] {character.name}</div>
                ))}
            </div>
        </div>
    )
}