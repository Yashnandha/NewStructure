export interface ReducerState {
  userData: UserDataProps | undefined;
  isLogin: boolean;
  token: string | undefined;
}

interface UserDataProps {}
