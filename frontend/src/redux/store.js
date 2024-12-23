import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice'; // Auth slice for managing user state
import invoiceReducer from './slices/invoiceSlice'; // Invoice slice for managing invoices
export const store = configureStore({
    reducer: {
        auth: authReducer, // Add auth reducer to store
        invoices: invoiceReducer, // Add invoice reducer to store
    },
});
