import { useState } from 'react';
import { useI18nLocale } from '../../providers';
import { InputError } from './interface/inputError';
import { Login } from './interface/login';

export const useLoginViewModel = () => {
  const { lang, locale } = useI18nLocale();

  const [isUserError, setIsUserError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [login, setLogin] = useState<Login>({
    username: '',
    password: '',
  });

  const onClickLogin = () => {
    console.log('Test');
  };

  const setUserError = (value: string) => {
    if (!value) {
      setIsUserError(true);
    } else {
      setIsUserError(false);
    }
  };

  const setPasswordError = (value: string) => {
    if (!value) {
      setIsPasswordError(true);
    } else {
      setIsPasswordError(false);
    }
  };

  const onChangeUsername = (value: string) => {
    setUserError(value);
    setLogin((result) => ({ ...result, username: value }));
  };

  const onChangePassword = (value: string) => {
    setPasswordError(value);
    setLogin((result) => ({ ...result, password: value }));
  };

  const getHelperText = (type: InputError): string => {
    switch (type) {
      case 'username':
        return errorMessage(isUserError);
      case 'password':
        return errorMessage(isPasswordError);
      default:
        return ' ';
    }
  };

  const errorMessage = (isError: boolean) => {
    if (isError) {
      return lang.youMustEnterValue;
    } else {
      return ' ';
    }
  };

  return {
    lang,
    locale,
    login,
    isUserError,
    isPasswordError,
    onClickLogin,
    setUserError,
    setPasswordError,
    onChangeUsername,
    onChangePassword,
    getHelperText,
  };
};
