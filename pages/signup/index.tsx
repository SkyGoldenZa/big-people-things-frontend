import type { NextPage } from 'next'
import Head from "next/head";
import { Card, Layout } from 'components';

const Signup: NextPage = () => {
  return (
    <>
      <Head>
        <title>Signup - Big People Things</title>
      </Head>

      <Layout>
        <Card>SIGNUP</Card>
      </Layout>
    </>
  )
}

export default Signup;
