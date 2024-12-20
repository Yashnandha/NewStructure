import {PayloadAction, createAction, createSlice} from '@reduxjs/toolkit';
import {ReducerState} from './interface';

import {fetchUserProfile} from './userAPICall';
const initialState: ReducerState = {
  userData: {
    full_name: '',
    mobile_name: '',
    email: '',
    password: '',
  },
  isLogin: false,
  token: undefined,
  DarkTheme: false,
};
export const clearAction = createAction('clear');
const UserData = createSlice({
  name: 'users',
  initialState,
  reducers: {
    loginSuccess: (state: ReducerState, action: { payload: any; }) => {
      return {
        ...state,
        token: '',
        userData: action.payload,
        isLogin: true,
      };
    },

    themeChange: (state: any, action: PayloadAction<boolean>) => {
      return {
        ...state,
        DarkTheme: action.payload,
      };
    },

    getUserDetails: (state: any, action: PayloadAction<boolean>) => {
      return {
        ...state,
      };
    },
  },

  extraReducers: (builder: { addCase: (arg0: any, arg1: { (state: any, action: any): any; (state: any, action: any): any; (): ReducerState; }) => void; }) => {
    builder.addCase(fetchUserProfile.fulfilled, (state: any, action: { payload: any; }) => {
      return {
        ...state,
        userData: action.payload,
      };
    });

    builder.addCase(fetchUserProfile.rejected, (state: any, action: any) => {
      return {
        ...state,
      };
    });

    builder.addCase(clearAction, () => initialState);
  },
});

export const {loginSuccess, themeChange, getUserDetails} = UserData.actions;

export default UserData.reducer;
