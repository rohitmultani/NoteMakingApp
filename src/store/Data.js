import { configureStore } from '@reduxjs/toolkit';
const { createSlice } = require('@reduxjs/toolkit');
const noteSlice = createSlice({
    name: 'Notes',
    initialState: {},
    reducers: {
        upDate(state, action) {
            // state.push(action.payload);
        state[0]=action.payload;
     // state.isEdit=!state.isEdit
        },
        
    },
});
const store = configureStore({

    reducer: noteSlice.reducer,

});
export const { upDate } = noteSlice.actions;

export default store;