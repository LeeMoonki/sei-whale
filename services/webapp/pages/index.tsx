import { GetServerSideProps } from 'next';
import Head from 'next/head';
import styles from '../styles/pages/Home.module.scss';
import { AppPageProps } from './_app';

export default function Home() {
  return (
    <div id={styles.app}>
      <Head>
        <title>Gomawo</title>
      </Head>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<AppPageProps> = async () => {
  // api.s
  //   .get('/echo-whale', null, { cookie: req.headers.cookie })
  //   .then((result) => console.log('######## shoot in getServerSideProps', result));

  const domain = process.env.DOMAIN as string;

  return {
    props: {
      // _app pageProps
      layout: 'base',
      host: domain,
    },
  };
};
