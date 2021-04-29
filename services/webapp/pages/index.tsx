import { GetServerSideProps } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import Logo from '../components/Logo';

export default function Home() {
  return (
    <div id={styles.app}>
      <Head>
        <title>Gomawo</title>
      </Head>
      <header>
        <Logo />
        <input type="text" />
        <button type="button">작성</button>
        <button type="button">로그인</button>
      </header>
      <main id="main"></main>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  // api.s
  //   .get('/echo-whale', null, { cookie: req.headers.cookie })
  //   .then((result) => console.log('######## shoot in getServerSideProps', result));

  return {
    props: {},
  };
};
