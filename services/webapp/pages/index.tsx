import { GetServerSideProps } from 'next';
import Head from 'next/head';
import styles from '../styles/pages/Home.module.scss';
import { AppPageProps } from './_app';

import { CardRecommend } from '../components/cards';

export default function Home() {
  return (
    <div id={styles.app}>
      <Head>
        <title>Gomawo</title>
      </Head>
      <h1 className={'visually-hidden'}>고마워 추천 서비스 입니다.</h1>
      <ul>
        <li>
          <CardRecommend keywords={['foo', 'bar']} content={'foo, bar를 추천합니다.'} />
        </li>
      </ul>
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
