import {axiosInstance} from '@api/api';
import {createAsyncThunk} from '@reduxjs/toolkit';
import constant from '../../config/constant';

/**
 * users = your reducer name
 * fetchUserProfile action and function name
 */

const fetchUserProfile = createAsyncThunk(
  'users/fetchUserProfile',
  async ({token}: {token: string | undefined}, thunkAPI) => {
    try {
      const response = await axiosInstance.get(`${constant.profile}`, {
        headers: {
          Auth: `${token}`, // Standard auth header format
        },
      });

      if (response.status === 200 || response.status === 201) {
        thunkAPI.fulfillWithValue(response.data.data);
        return response.data?.data;
      } else {
        return thunkAPI.rejectWithValue(response.data?.data);
      }
    } catch (error: any) {
      const message = error.response?.data || 'An unknown error occurred';
      return thunkAPI.rejectWithValue(message);
    }
  },
);

export {fetchUserProfile};
