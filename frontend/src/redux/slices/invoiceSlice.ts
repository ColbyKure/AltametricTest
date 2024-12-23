import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Invoice {
  id: number;
  vendor_name: string;
  amount: number;
  due_date: string;
  description: string;
  paid: boolean;
}

interface InvoiceState {
  invoices: Invoice[];
}

const initialState: InvoiceState = {
  invoices: [],
};

const invoiceSlice = createSlice({
  name: 'invoices',
  initialState,
  reducers: {
    setInvoices: (state, action: PayloadAction<Invoice[]>) => {
      state.invoices = action.payload;  // Store the fetched invoices in the state
    },
    addInvoice: (state, action: PayloadAction<Invoice>) => {
      state.invoices.push(action.payload);  // Add a new invoice to the state
    },
    updateInvoice: (state, action: PayloadAction<Invoice>) => {
      const index = state.invoices.findIndex(invoice => invoice.id === action.payload.id);
      if (index !== -1) {
        state.invoices[index] = action.payload;  // Update the invoice data
      }
    },
  },
});

export const { setInvoices, addInvoice, updateInvoice } = invoiceSlice.actions;
export default invoiceSlice.reducer;
