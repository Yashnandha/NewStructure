export interface ReducerState {
  userData: loginPayload | undefined;
  isLogin: boolean;
  token: string | undefined;
  DarkTheme: boolean;
}

export interface loginPayload {
  full_name: string;
  mobile_name: string;
  email: string;
  password: string;
}


interface UserApiCallParams {token?: string | undefined; userId: string}