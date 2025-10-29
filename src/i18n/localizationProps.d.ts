import translations from './translations';
interface LocalizationProviderProps {
  children: ReactNode;
}

export interface LocalizationContextProps {
  translations: typeof translations;
  setAppLanguage: (value: string) => void;
  appLanguage: string;
  initializeAppLanguage: () => void;
}
