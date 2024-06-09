import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface userState {
  name: string | null | undefined;
  email: string | null | undefined;
  image: string | null | undefined;
}

const userSlice = createSlice({
  name: 'user',
  initialState: <userState>{
    name: '',
    email: '',
    image: '',
  },
  reducers: {
    setName: (state, action: PayloadAction<string | null | undefined>) => {
      state.name = action.payload;
    },
    setEmail: (state, action: PayloadAction<string | null | undefined>) => {
      state.email = action.payload;
    },
    setImage: (state, action: PayloadAction<string | null | undefined>) => {
      state.image = action.payload;
    },
  },
});

export const { setName, setEmail, setImage } = userSlice.actions;

export default userSlice.reducer;
