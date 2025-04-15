import { createSlice } from "@reduxjs/toolkit";
import sections from "../../data/sections";

const initialState = {
    sections: sections,
    atualSection:[],
}

const sectionSlice = createSlice({
    name: "section",
    initialState,
    reducers: {
        listSection(state){
            state.sections = state.sections.map((sections) => sections);    
        },
        listSingleSection(state, action){
            state.atualSection = [...state.atualSection, state.sections.find((section) => section.id === action.payload)];
        },        
    }
})

export const { listSection, listSingleSection } = sectionSlice.actions;
    
export default sectionSlice.reducer;