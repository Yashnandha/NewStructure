import {fetchUserProfile} from '@redux/userReducer/userAPICall';
import {createAction, createSlice} from '@reduxjs/toolkit';
import {ReducerState} from './interface';
export const clearAction = createAction('clear');

const initialState: ReducerState = {
  isLogin: false,
  token: '',
  userData: undefined,
};
const UserData = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {
    loginSuccess: (state, action) => {
      return {
        ...state,
        token: action.payload?.token,
        userData: action.payload?.payload,
        isLogin: true,
      };
    },
  },

  extraReducers: builder => {
    builder.addCase(
      fetchUserProfile.fulfilled,
      (state: ReducerState, action: {payload: any}) => {
        return {
          ...state,
          userProfile: action.payload,
        };
      },
    );

    builder.addCase(fetchUserProfile.rejected, (state: any, action: any) => {
      return {
        ...state,
      };
    });

    builder.addCase(clearAction, () => initialState);
  },
});
export const {loginSuccess} = UserData.actions;
export default UserData.reducer;
