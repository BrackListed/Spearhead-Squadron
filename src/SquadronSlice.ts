import { createSlice } from "@reduxjs/toolkit";


interface Character {
  id: number;
  callSign: string;
  name: string;
  status: 'ACTIVE' | 'STANDBY' | 'KIA';
  syncRatio: number;
  img: string
}

//use a usestate for sync ratio and export that instead so u can always use setsyncratio outside of this

const userSquadron: Character[] = [
    {id: 1, callSign: "Undertaker", name: "Shinei Nouzen", status: "STANDBY", syncRatio: 50, img: "characters/Shinei_Nouzen.png"},
    {id: 2, callSign: "Werewolf", name: "Raiden Shuga", status: "STANDBY", syncRatio: 15, img: "characters/Raiden_Shuga.png"},
    {id: 3, callSign: "Laughing Fox", name: "Theo Rikka", status: "STANDBY", syncRatio: 15, img: "characters/Theo_Rikka.png"},
    {id: 4, callSign: "Snow Witch", name: "Anju Emma", status: "STANDBY", syncRatio: 20, img: "characters/Anju_Emma.png"},
    {id: 5, callSign: "Gunslinger", name: "Kurena Kukumila", status: "STANDBY", syncRatio: 25, img: "characters/Kurena_Kukumila.png"},
]




const initialState = { //full on object that we'll initialize with from the start
    characterList: userSquadron, //set characterlist to usersquadron so it lives in initialstate
    selectedId: 1 //use this to tell which one has been clicked
}

const SquadronSlice = createSlice({
    name: "Squadron",
    initialState,
    reducers: {
        selectCharacter: (state, action) => {
            state.selectedId = action.payload //use this later with .find find squadron and compare if its equal to selected id
        },
        ejectCharacter: (state) => {
            const selectedCharacter = state.selectedId
            state.characterList = state.characterList.filter((c) => c.id !== selectedCharacter) //character id not equal to selected id 
            state.selectedId = 0 //keeps everything in redux, instead of using a boolean of usestate from app
        },
        setSyncRatio: (state) => {
            const selectedCharacter = state.characterList.find((c) => c.id === state.selectedId) //userSquadron and characterlist is frozen/static due to initialState, in order to unfreeze you need to use "state", annd the one that lives in state is characterList and not userSquadron, hence state.characterList. state = initialState but state is the one that updates, not initialstate
             const tempCharacter = userSquadron.find((c) => c.id === state.selectedId) //use userSquadron and not characterList, because characterList is dynamic and changes
            const maxSyncRatio = tempCharacter!.syncRatio * 2 //needs to go to the original old value, not state. Why does it update?
            console.log(maxSyncRatio)
            if(selectedCharacter){ //just to avoid using ! because of the future eject button
                if(selectedCharacter.syncRatio < maxSyncRatio){
                    selectedCharacter.syncRatio *= 2
                }
            }
        }

        }
    }
)


export const {selectCharacter, setSyncRatio, ejectCharacter} = SquadronSlice.actions
export default SquadronSlice.reducer