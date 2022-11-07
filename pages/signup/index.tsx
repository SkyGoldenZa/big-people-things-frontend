import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useAtom } from 'jotai';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { signupSchema } from 'utils';
import { postSignup } from 'services/calls';

import {
  Button,
  Card,
  Form,
  InnerContainer,
  Input,
  Layout,
  OuterContainer,
  Title,
  Head,
} from 'components';
import { setLocalStorage } from 'utils/localStorage';
import { isDarkThemeAtom } from 'atoms';

type SignupType = { email: string; password: string; confirmPassword: string };

const Signup: NextPage = () => {
  const [isDarkTheme, setIsDarkTheme] = useAtom(isDarkThemeAtom);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupSchema),
  });

  const themeSwitch = () => {
    setLocalStorage('isDarkTheme', !isDarkTheme);
    setIsDarkTheme((prevState: boolean) => !prevState);
  };

  const onSubmitHandler = ({
    email,
    password,
    confirmPassword,
  }: SignupType) => {
    try {
      if (password !== confirmPassword) return;
      postSignup({ email, password } as SignupType);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Head>
        <title>Signup - Big People Things</title>
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
                <Title>SIGNUP</Title>

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

                <Input
                  formHook={register('confirmPassword')}
                  placeholder="Confirm Password"
                  password
                  errorMessage={
                    errors.confirmPassword?.message as string | undefined
                  }
                />

                <br />

                <Button primary type="submit">
                  Submit
                </Button>

                <br />

                <Button outline onClick={() => router.push('/login')}>
                  Log in
                </Button>
              </Form>
            </InnerContainer>
          </Card>
        </OuterContainer>
      </Layout>
    </>
  );
};

export default Signup;
