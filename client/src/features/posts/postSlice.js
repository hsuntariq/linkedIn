import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPosts, uploadPost } from "./postService";

// define your post initial State

const initialState = {
  posts: [],
  postLoading: false,
  postSuccess: false,
  postError: false,
  postMessage: "",
};

export const uploadPostData = createAsyncThunk(
  "upload-post",
  async (postData, thunkAPI) => {
    try {
      return await uploadPost(postData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.error);
    }
  }
);

export const getPostData = createAsyncThunk(
  "get-posts",
  async (_, thunkAPI) => {
    try {
      return await getPosts();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.error);
    }
  }
);

// create your slice / global state

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    postReset: (state) => {
      state.postLoading = false;
      state.postSuccess = false;
      state.postError = false;
      state.postMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(uploadPostData.pending, (state, action) => {
        state.postLoading = true;
      })
      .addCase(uploadPostData.rejected, (state, action) => {
        state.postLoading = false;
        state.postError = true;
        state.postMessage = action.payload;
      })
      .addCase(uploadPostData.fulfilled, (state, action) => {
        state.postLoading = false;
        state.postSuccess = true;
        state.posts.push(action.payload);
      })
      .addCase(getPostData.pending, (state, action) => {
        state.postLoading = true;
      })
      .addCase(getPostData.rejected, (state, action) => {
        state.postLoading = false;
        state.postError = true;
        state.postMessage = action.payload;
      })
      .addCase(getPostData.fulfilled, (state, action) => {
        state.postLoading = false;
        state.postSuccess = true;
        state.posts = action.payload;
      });
  },
});
export const { postReset } = postSlice.actions;
export default postSlice.reducer;
