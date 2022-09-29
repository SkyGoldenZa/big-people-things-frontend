import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { signupSchema } from 'utils/validation';
import { yupResolver } from '@hookform/resolvers/yup';

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

type SignupType = { email: string; password: string; confirmPassword: string };

const Signup: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(signupSchema),
  });

  const router = useRouter();

  const onSubmitHandler = ({ email, password, confirmPassword }: SignupType) => {
    try {
    } catch (err) {
      console.error(err);
    }
  };

  console.log('test');

  return (
    <>
      <Head title="Signup - Big People Things" />

      <Layout>
        <OuterContainer>
          <Card>
            <InnerContainer>
              <Form
                onSubmit={handleSubmit(
                  onSubmitHandler as SubmitHandler<FieldValues>
                )}
              >
                <Title>SIGNUP</Title>

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

                <Input
                  formHook={register('confirmPassword')}
                  // onChange={getInputValue}
                  placeholder="Confirm Password"
                  password
                  errorMessage={errors.confirmPassword?.message as string | undefined}
                />

                <br />

                <Button primary type="submit">
                  Submit
                </Button>

                <br />

                <Button onClick={() => router.push('/login')} outline>
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
