export interface loginHookProps {}

interface loginProps {}

type errorMessage = {
  email: string | null;
  password: string | null;
};

type formDataType = {
  [name: string]: string | undefined;
};
