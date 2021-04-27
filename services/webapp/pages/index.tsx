import { GetServerSideProps } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import { api } from '../lib/api';

export default function Home() {
  return (
    <div id={styles.app}>
      <Head>
        <title>sei-whale</title>
      </Head>
      <a href="/login">로그인</a>
      <button
        type="button"
        onClick={() => {
          api.f.get('/echo-whale', null).then((result) => console.log('!!!', result));
        }}
      >
        Request
      </button>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  api.s
    .get('/echo-whale', null, { cookie: req.headers.cookie })
    .then((result) => console.log('######## shoot in getServerSideProps', result));

  return {
    props: {},
  };
};
