import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from 'utils/validation';

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

type LoginType = { email: string; password: string };

const Login: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const router = useRouter();

  // const disabled = !inputValues.email || !inputValues.password;

  const onSubmitHandler = ({ email, password }: LoginType) => {
    console.log('email', email);
    console.log('password', password);
    try {
    } catch (err) {
      console.error(err);
    }
  };

  console.log('errors', errors);

  return (
    <>
      <Head title="Login - Big People Things" />

      <Layout>
        <OuterContainer>
          <Card>
            <InnerContainer>
              <Form
                onSubmit={handleSubmit(
                  onSubmitHandler as SubmitHandler<FieldValues>
                )}
              >
                <Title>LOGIN</Title>

                <Input
                  formHook={register('email')}
                  // onChange={getInputValue}
                  placeholder="Email"
                  errorMessage={errors.email?.message as string | undefined}
                />

                <br />

                <Input
                  formHook={register('password')}
                  // onChange={getInputValue}
                  placeholder="Password"
                  password
                  errorMessage={errors.password?.message as string | undefined}
                />

                <br />

                <Button primary type="submit">
                  Submit
                </Button>

                <br />

                <Button onClick={() => router.push('/signup')} outline>
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
