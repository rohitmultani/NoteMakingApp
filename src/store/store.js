import { configureStore } from '@reduxjs/toolkit';
import noteSlice from './Data';

const store = configureStore({

        reducer: noteSlice.reducer,
    
});

export default store;