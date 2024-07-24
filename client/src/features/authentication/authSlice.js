import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  loginUser,
  logout,
  registerUser,
  uploadUserImage,
} from "./authService";

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

export const logUserOut = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      return await logout();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.error);
    }
  }
);

export const logUserIn = createAsyncThunk(
  "login-user",
  async (userData, thunkAPI) => {
    try {
      return await loginUser(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.error);
    }
  }
);

export const userImageUpload = createAsyncThunk(
  "image-upload",
  async (imageData, thunkAPI) => {
    try {
      return await uploadUserImage(imageData);
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
        state.userLoading = false;
        state.userSuccess = true;
        state.user = action.payload;
      })
      .addCase(logUserOut.pending, (state, action) => {
        state.userLoading = true;
      })
      .addCase(logUserOut.rejected, (state, action) => {
        state.userLoading = false;
        state.userError = true;
        state.userMessage = action.payload;
      })
      .addCase(logUserOut.fulfilled, (state, action) => {
        state.userLoading = false;
        state.user = null;
      })
      .addCase(logUserIn.pending, (state, action) => {
        state.userLoading = true;
      })
      .addCase(logUserIn.rejected, (state, action) => {
        state.userLoading = false;
        state.userError = true;
        state.userMessage = action.payload;
        state.user = null;
      })
      .addCase(logUserIn.fulfilled, (state, action) => {
        state.userLoading = false;
        state.userSuccess = true;
        state.user = action.payload;
      })
      .addCase(userImageUpload.pending, (state, action) => {
        state.userLoading = true;
      })
      .addCase(userImageUpload.rejected, (state, action) => {
        state.userLoading = false;
        state.userError = true;
        state.userMessage = action.payload;
      })
      .addCase(userImageUpload.fulfilled, (state, action) => {
        state.userLoading = false;
        state.userSuccess = true;
        state.user = action.payload;
        localStorage.setItem("user", JSON.stringify(action.payload));
      });
  },
});
export const { userReset } = authSlice.actions;
export default authSlice.reducer;
