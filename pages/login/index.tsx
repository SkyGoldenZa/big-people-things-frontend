import { useContext } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAtom } from 'jotai';

import { loginSchema } from 'utils';
import { isDarkThemeAtom } from 'atoms';
import { setLocalStorage } from 'utils/localStorage';
import { postLogin } from 'services/calls';
import { LoginType } from 'types/Auth';

import {
  Card,
  Layout,
  OuterContainer,
  InnerContainer,
  Input,
  Button,
  Title,
  Form,
  Head,
} from 'components';

const Login: NextPage = () => {
  const [isDarkTheme, setIsDarkTheme] = useAtom(isDarkThemeAtom);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const themeSwitch = () => {
    setLocalStorage('isDarkTheme', !isDarkTheme);
    setIsDarkTheme((prevState: boolean) => !prevState);
  };

  const onSubmitHandler = ({ email, password }: LoginType) => {
    try {
      postLogin({ email, password } as LoginType);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Head>
        <title>Login - Big People Things</title>
      </Head>

      <Layout>
        <OuterContainer>
          <Card>
            <InnerContainer>
              <Button outline onClick={() => themeSwitch()}>
                Theme toggle
              </Button>

              <Form
                onSubmit={handleSubmit(
                  onSubmitHandler as SubmitHandler<FieldValues>
                )}
              >
                <Title>LOGIN</Title>

                <Input
                  formHook={register('email')}
                  placeholder="Email"
                  errorMessage={errors.email?.message as string | undefined}
                />

                <br />

                <Input
                  formHook={register('password')}
                  placeholder="Password"
                  password
                  errorMessage={errors.password?.message as string | undefined}
                />

                <br />

                <Button primary type="submit">
                  Submit
                </Button>

                <br />

                <Button outline onClick={() => router.push('/signup')}>
                  Create Account
                </Button>
              </Form>
            </InnerContainer>
          </Card>
        </OuterContainer>
      </Layout>
    </>
  );
};

export default Login;
