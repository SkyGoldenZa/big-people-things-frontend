import { useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import {
  Card,
  Layout,
  OuterContainer,
  InnerContainer,
  Input,
  Button,
  Title,
} from 'components';

const Login: NextPage = () => {
  const router = useRouter();

  const [inputValues, setInputValues] = useState({
    username: '',
    password: '',
  });

  const disabled = !inputValues.username || !inputValues.password;

  const submit = () => {
    if (!inputValues.username || !inputValues.password) return;
  };

  const getInputValue = ({ name, value }: { name: string; value: string }) => {
    setInputValues(prevState => ({ ...prevState, [name]: value }));
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
              <Title>LOGIN</Title>

              <Input
                name="username"
                onChange={getInputValue}
                placeholder="Username"
              />

              <br />

              <Input
                name="password"
                onChange={getInputValue}
                placeholder="Password"
                password
              />

              <br />

              <Button primary onClick={submit} disabled={disabled}>
                Submit
              </Button>

              <br />

              <Button onClick={() => router.push('/signup')} outline>
                Creat Account
              </Button>
            </InnerContainer>
          </Card>
        </OuterContainer>
      </Layout>
    </>
  );
};

export default Login;
