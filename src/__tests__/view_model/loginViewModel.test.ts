import { useLoginViewModel } from '../../components/login/loginViewModel';
import { renderHook, act, waitFor } from '@testing-library/react';
import { useI18nLocaleSpy } from '../spy/providers';

jest.mock('../../providers/i18nLocale');

const sut = () => {
  return renderHook(() => useLoginViewModel());
};

describe('LoginViewModel', () => {
  beforeEach(() => {
    useI18nLocaleSpy.init('th');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Initial LoginPage => Should return default value', () => {
    // Given
    const inputLogin = {
      username: '',
      password: '',
    };

    // When
    const { result } = sut();

    // Then
    expect(result.current.isUserError).toBe(false);
    expect(result.current.isPasswordError).toBe(false);
    expect(result.current.login).toEqual(inputLogin);
  });

  test('Set User Error Empty value => Should return true', async () => {
    // Given
    const { result } = sut();

    // When
    act(() => {
      result.current.setUserError('');
    });

    // Then
    await waitFor(() => {
      expect(result.current.isUserError).toBe(true);
    });
  });

  test('Set User Error value => Should return true', async () => {
    // Given
    const { result } = sut();

    // When
    act(() => {
      result.current.setUserError('Username');
    });

    // Then
    await waitFor(() => {
      expect(result.current.isUserError).toBe(false);
    });
  });

  test('Set Passwor Error Empty value => Should return true', async () => {
    // Given
    const { result } = sut();

    // When
    act(() => {
      result.current.setPasswordError('');
    });

    // Then
    await waitFor(() => {
      expect(result.current.isPasswordError).toBe(true);
    });
  });

  test('Set Passwor Error value => Should return true', async () => {
    // Given
    const { result } = sut();

    // When
    act(() => {
      result.current.setPasswordError('Username');
    });

    // Then
    await waitFor(() => {
      expect(result.current.isPasswordError).toBe(false);
    });
  });

  test('Input Username onChangeUsername => Should return Username', async () => {
    // Given
    const { result } = sut();

    // When
    act(() => {
      result.current.onChangeUsername('Username');
    });

    // Then
    await waitFor(() => {
      expect(result.current.isPasswordError).toBe(false);
      expect(result.current.login.username).toBe('Username');
    });
  });

  test('Input Password onChangePassword => Should return Password', async () => {
    // Given
    const { result } = sut();

    // When
    act(() => {
      result.current.onChangePassword('Password');
    });

    // Then
    await waitFor(() => {
      expect(result.current.isPasswordError).toBe(false);
      expect(result.current.login.password).toBe('Password');
    });
  });

  test('Get Helper Text User Error Empty value => Should return Error Msg', async () => {
    // Given
    const { result } = sut();
    const lang = result.current.lang;
    let errorMsg = '';

    // When
    await act(async () => {
      result.current.setUserError('');
    });
    errorMsg = result.current.getHelperText('username');

    // Then
    await waitFor(() => {
      expect(result.current.isUserError).toBe(true);
      expect(errorMsg).toBe(lang.youMustEnterValue);
    });
  });

  test('Get Helper Text Password Error Empty value => Should return Error Msg', async () => {
    // Given
    const { result } = sut();
    const lang = result.current.lang;
    let errorMsg = '';

    // When
    await act(async () => {
      result.current.setPasswordError('');
    });
    errorMsg = result.current.getHelperText('password');

    // Then
    await waitFor(() => {
      expect(result.current.isPasswordError).toBe(true);
      expect(errorMsg).toBe(lang.youMustEnterValue);
    });
  });
});
