import { useRouter } from 'next/router';
import { I18n } from '../i18n/interface/i18n';
import { i18n } from '../i18n';
import { Language } from './interface/Language';

export const getLang = (key: I18n) => {
  return i18n[key];
};

export const useI18nLocale = (): Language => {
  const locale = useRouter().locale as I18n;
  const lang = getLang(locale);

  return {
    locale,
    lang,
  };
};
