import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.isAuthenticated = true;
      state.token = action.payload;  // Store the token
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = null;  // Remove the token on logout
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
