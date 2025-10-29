import {
  LocalizationContextProps,
  LocalizationProviderProps,
} from '@i18n/localizationProps';
import React, { createContext, useEffect, useState } from 'react';
import * as RNLocalize from 'react-native-localize';
import { MMKV } from 'react-native-mmkv';
import translations, { DEFAULT_LANGUAGE } from './translations';

const storage = new MMKV({ id: 'app-storage' });
const APP_LANGUAGE = 'appLanguage';

const LocalizationContext = createContext<LocalizationContextProps>({
  translations,
  setAppLanguage: () => {},
  appLanguage: DEFAULT_LANGUAGE,
  initializeAppLanguage: () => {},
});
const LocalizationProvider = ({ children }: LocalizationProviderProps) => {
  const [appLanguage, setAppLanguageState] = useState(DEFAULT_LANGUAGE);

  const setAppLanguage = (language: string) => {
    translations.setLanguage(language);
    setAppLanguageState(language);
    storage.set(APP_LANGUAGE, language);
  };

  const initializeAppLanguage = () => {
    const storedLanguage = storage.getString(APP_LANGUAGE);

    if (storedLanguage) {
      setAppLanguage(storedLanguage);
    } else {
      const supportedLanguages = translations.getAvailableLanguages();
      const deviceLanguages = RNLocalize.getLocales().map(l => l.languageCode);

      const matchedLanguage = deviceLanguages.find(code =>
        supportedLanguages.includes(code),
      );

      setAppLanguage(matchedLanguage || DEFAULT_LANGUAGE);
    }
  };

  // Auto-initialize on mount
  useEffect(() => {
    initializeAppLanguage();
  }, []);

  return (
    <LocalizationContext.Provider
      value={{
        translations,
        setAppLanguage,
        appLanguage,
        initializeAppLanguage,
      }}
    >
      {children}
    </LocalizationContext.Provider>
  );
};

export { LocalizationContext, LocalizationProvider };
