import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { registerUser } from "./authService";

const isUserPresent = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: isUserPresent ? isUserPresent : null,
  userLoading: false,
  userSuccess: false,
  userError: false,
  userMessage: "",
};

export const regUser = createAsyncThunk(
  "auth/reg-user",
  async (userData, thunkAPI) => {
    try {
      return await registerUser(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.error);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userReset: (state) => {
      state.userError = false;
      state.userSuccess = false;
      state.userMessage = "";
      state.userLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(regUser.pending, (state, action) => {
        state.userLoading = true;
      })
      .addCase(regUser.rejected, (state, action) => {
        state.userLoading = false;
        state.userError = true;
        state.user = null;
        state.userMessage = action.payload;
      })
      .addCase(regUser.fulfilled, (state, action) => {
        console.log(action.payload);
        state.userLoading = false;
        state.userSuccess = true;
        state.user = action.payload;
      });
  },
});
export const { userReset } = authSlice.actions;
export default authSlice.reducer;
