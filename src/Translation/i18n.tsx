import i18n from 'i18n-js';
// import AsyncStorageUtils from '../../helpers/AsyncStorageUtils';
import en from './locale/en';
import vi from './locale/vi';

i18n.translations = {
  vi,
  en,
};
i18n.fallbacks = true;

export default i18n;
interface typeI18nBase {
  locale: string;
}
export function setLocation(I18n: typeI18nBase, location: string): void {
  _storeData(location);
  const defaultLanguage = { languageTag: location, isRTL: false };
  const { languageTag } = defaultLanguage;
  I18n.locale = languageTag;
}

const _storeData = async (location: string) => {
  try {
    // await AsyncStorageUtils.save(AsyncStorageUtils.KEY.LANGUAGE, location);
  } catch (error) {}
};

export function translate(
  key: keyof typeof vi,
  options?: i18n.TranslateOptions,
) {
  return vi[key] ? i18n.t(key, options) : key;
}
