import React from 'react';
import { useI18nLocale } from '../../providers';
import styles from './footer.module.scss';

const FooterView = () => {
  const { lang } = useI18nLocale();
  return (
    <div className={styles.footer}>
      <span>{lang.footer.copyright}</span>
    </div>
  );
};

export default FooterView;
