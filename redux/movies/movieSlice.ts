import {createSlice, PayloadAction} from "@reduxjs/toolkit";



export const movie = createSlice({
    name:'movie',
    initialState: {
        name: '',
        image: '',
    },
    reducers: {
        setName: (state, action: PayloadAction<string | null | undefined>) => {
            state.name = action.payload;
        },
        setImage: (state, action: PayloadAction<string | null | undefined>) => {
            state.image = action.payload;
        },
    },
})