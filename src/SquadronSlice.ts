import { createSlice } from "@reduxjs/toolkit";

interface Character {
  id: number;
  callSign: string;
  name: string;
  status: 'ACTIVE' | 'STANDBY' | 'KIA';
  syncRatio: number;
}

const userSquadron: Character[] = [
    {id: 1, callSign: "Undertaker", name: "Shinei Nouzen", status: "STANDBY", syncRatio: 50},
    {id: 2, callSign: "Werewolf", name: "Raiden Shuga", status: "STANDBY", syncRatio: 15},
    {id: 3, callSign: "Laughing Fox", name: "Theo Rikka", status: "STANDBY", syncRatio: 15},
    {id: 4, callSign: "Snow Witch", name: "Anju Emma", status: "STANDBY", syncRatio: 20},
    {id: 5, callSign: "Gunslinger", name: "Kurena Kukumila", status: "STANDBY", syncRatio: 25},
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
            }
        }
    }
)

export const {selectCharacter} = SquadronSlice.actions
export default SquadronSlice.reducer