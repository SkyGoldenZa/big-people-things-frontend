import { NextPage } from 'next';
import Head from 'next/head';
import {
  Button,
  Card,
  InnerContainer,
  Input,
  Layout,
  OuterContainer,
  Title,
} from 'components';
import { useState } from 'react';
import { useRouter } from 'next/router';

const Signup: NextPage = () => {
  const router = useRouter();

  const [inputValues, setInputValues] = useState({
    username: '',
    password: '',
  });

  const disabled = !inputValues.username || !inputValues.password;

  const submit = () => {
    if (!inputValues.username || !inputValues.password) return;
  };

  function getInputValue({ name, value }: { name: string; value: string }) {
    setInputValues(prevState => ({ ...prevState, [name]: value }));
  }

  return (
    <>
      <Head>
        <title>Signup - Big People Things</title>
      </Head>

      <Layout>
        <OuterContainer>
          <Card>
            <InnerContainer>
              <Title>SIGNUP</Title>

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

              <Button onClick={() => router.push('/login')} outline>
                Log in
              </Button>
            </InnerContainer>
          </Card>
        </OuterContainer>
      </Layout>
    </>
  );
};

export default Signup;
