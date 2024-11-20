import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0,
        object: {
            test1: 1,
            test2: 2,
            test3: 3
        },
        name: "Bouton"
    },
    reducers: {
        increment: (state) => {
            state.value +=1
        },
        decrement: (state) => {
            state.value -=1
        },
        reset: (state) => {
            state.value = 0
        },
        multiplier: (state) => {
            state.value *= 2
        },
        diviser: (state) => {
            state.value /=2
        }
    }
})

export const { increment, decrement, reset, multiplier, diviser} = counterSlice.actions

export default counterSlice.reducer