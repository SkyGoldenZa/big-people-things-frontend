import { NextPage, NextPageContext } from 'next';
import Head from 'next/head';
import Router, { useRouter} from 'next/router';

import {
  Card,
  Layout,
  OuterContainer,
  InnerContainer,
  Button,
  Title,
} from 'components';
import api from "../../services/api";

const Dashboard: NextPage = ({ userData }: any) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Dashboard - Big People Things</title>
      </Head>

      <Layout>
        <OuterContainer>
          <Card>
            <InnerContainer>
              <Title>Dashboard</Title>

              <br />

              <Button outline onClick={() => router.push('/login')}>
                Logout
              </Button>
            </InnerContainer>
          </Card>
        </OuterContainer>
      </Layout>
    </>
  );
};

export default Dashboard;

Dashboard.getInitialProps = async (ctx: NextPageContext) => {
  const cookie = ctx.req?.headers.cookie;

  const url = '/dashboard';

  const response = await api.get(url, ctx);
  // const response = await fetch('/api/dashboard', { headers: { cookie: cookie! } });

  if (response.status === 401 && !ctx.req) {
    await Router.replace('/login');
  }

  if (response.status === 401 && ctx.req) {
    ctx.res?.writeHead(302, {
      Location: process.env.NEXT_PUBLIC_BASE_URL
    });
  }

  const data = await response.json();
  return { userData: data };
};
