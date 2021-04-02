import Head from 'next/head';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div id={styles.app}>
      <Head>
        <title>sei-whale</title>
      </Head>
      <header>
        <h1 className="service-title">sei-whale 추천 서비스 입니다.</h1>
        <div className={styles.layoutBoundary}></div>
      </header>
      <div className={styles.contents}>
        <div className={styles.layoutBoundary}></div>
      </div>
      <footer>
        <div className={styles.layoutBoundary}></div>
      </footer>
    </div>
  );
}
