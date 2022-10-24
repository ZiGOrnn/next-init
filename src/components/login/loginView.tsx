import React from 'react';
import { useLoginViewModel } from './loginViewModel';
import styles from './login.module.scss';
import FooterView from '../footer/footerView';
import Layout from '../layout/layout';
import { Button, TextField } from '@mui/material';

const LoginView = () => {
  const viewModel = useLoginViewModel();
  const { lang, login } = viewModel;
  const { username, password } = login;

  return (
    <Layout className={styles.login}>
      <Layout.Content className={styles.loginContent}>
        <div className={styles.loginCard}>
          <form>
            <TextField
              className={styles.field}
              value={username}
              fullWidth
              onBlur={(event) => {
                event.preventDefault();
                viewModel.setUserError(event.target.value);
              }}
              onChange={(event) =>
                viewModel.onChangeUsername(event.target.value)
              }
              error={viewModel.isUserError}
              id="outlined-basic"
              variant="outlined"
              placeholder="Username"
              helperText={viewModel.getHelperText('username')}
            />

            <TextField
              className={styles.field}
              value={password}
              fullWidth
              onBlur={(event) => viewModel.setPasswordError(event.target.value)}
              onChange={(event) =>
                viewModel.onChangePassword(event.target.value)
              }
              error={viewModel.isPasswordError}
              id="outlined-basic"
              variant="outlined"
              placeholder="Password"
              helperText={viewModel.getHelperText('password')}
            />

            <Button
              type="submit"
              fullWidth
              sx={{ borderRadius: 28 }}
              variant="contained"
              size="medium"
              disableElevation
              onClick={viewModel.onClickLogin}
            >
              {lang.login.signIn}
            </Button>
          </form>
        </div>
      </Layout.Content>
      <div className={styles.systemUsage}>
        <p>{lang.login.systemUsage}</p>
      </div>
      <Layout.Footer>
        <FooterView />
      </Layout.Footer>
    </Layout>
  );
};

export default LoginView;
