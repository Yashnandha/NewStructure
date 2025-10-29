import { LocalizationContext } from '@i18n/Localization';
import { useContext } from 'react';

const useLanguage = () => {
  const context = useContext(LocalizationContext);
  return {
    context: context,
    translations: context.translations,
  };
};

export default useLanguage;
