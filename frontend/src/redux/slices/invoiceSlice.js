import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    invoices: [],
};
const invoiceSlice = createSlice({
    name: 'invoices',
    initialState,
    reducers: {
        setInvoices: (state, action) => {
            state.invoices = action.payload; // Store the fetched invoices in the state
        },
        addInvoice: (state, action) => {
            state.invoices.push(action.payload); // Add a new invoice to the state
        },
        updateInvoice: (state, action) => {
            const index = state.invoices.findIndex(invoice => invoice.id === action.payload.id);
            if (index !== -1) {
                state.invoices[index] = action.payload; // Update the invoice data
            }
        },
    },
});
export const { setInvoices, addInvoice, updateInvoice } = invoiceSlice.actions;
export default invoiceSlice.reducer;
