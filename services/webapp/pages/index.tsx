import { GetServerSideProps } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div id={styles.app}>
      <Head>
        <title>sei-whale</title>
      </Head>
      <a href="/login">로그인</a>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  console.log('====== getServerSideProps of Index : ', req.headers.cookie);

  return {
    props: {},
  };
};
