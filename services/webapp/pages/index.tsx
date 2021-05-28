import Head from 'next/head';
import styles from '../styles/pages/Home.module.scss';

import { CardRecommend } from '../components/cards';
import { getServerSidePropsMapper } from '../lib/dataFetchingMethods';

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

export const getServerSideProps = getServerSidePropsMapper();
