import type { NextPage } from 'next'
import Head from 'next/head'
import { Card, Layout } from 'components';

const Login: NextPage = () => {
  return (
    <>
      <Head>
        <title>Login - Big People Things</title>
      </Head>

      <Layout>
        <Card>LOGIN</Card>
      </Layout>
    </>
  )
}

export default Login;
