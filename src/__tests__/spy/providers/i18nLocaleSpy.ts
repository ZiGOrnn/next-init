import { i18n } from '../../../i18n';
import { I18n } from '../../../i18n/interface/i18n';
import * as I18nLocale from '../../../providers';

export const useI18nLocaleSpy = {
  init(locale: I18n) {
    jest.spyOn(I18nLocale, 'useI18nLocale').mockReturnValue({
      locale,
      lang: i18n[locale],
    });
  },
  destroy() {
    jest.clearAllMocks();
  },
};
