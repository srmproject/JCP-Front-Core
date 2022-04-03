import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as types from 'types/sample';

const initialState: types.sampleObject = {
    value: 0,
};
const sampleSlice = createSlice({
    name: "sample",
    initialState,
    reducers: {
        getValue: () => { },
        setValue: (state, { payload }: PayloadAction<types.sampleObject>) => {
            state.value = payload.value
        },
        changeValue: (state, { payload }: PayloadAction<types.changeValue>) => {
            const beforeValue = state.value;
            state.value = beforeValue + payload.amount
        },

    },
});

export const actions = sampleSlice.actions;
export default sampleSlice.reducer;
