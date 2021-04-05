import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import Card from '../components/card';

export default function Home() {
  return (
    <div id={styles.app}>
      <Head>
        <title>sei-whale</title>
      </Head>
      <header className={styles.header}>
        <h1 className="service-title">sei-whale 추천 서비스 입니다.</h1>
        <section className={styles.gnb}>
          <input className={styles.inputSearch} type="text" placeholder="검색하고 찾아보세요" />
        </section>
        <div className="layoutBoundary">
          <section className={styles.recommend}>
            <textarea
              className={styles.recommendArea}
              placeholder="어떤걸 공유하고 싶으세요?"
            ></textarea>
          </section>
        </div>
      </header>
      <main className={styles.contents}>
        <div className="layoutBoundary">
          <section className={styles.recommendCards}>
            <Card
              keywords={['아이템1', '아이템2']}
              recommendation={'이러저러한 이 책을 추천합니다.'}
            />
          </section>
        </div>
      </main>
      <footer>
        <div className="layoutBoundary"></div>
      </footer>
    </div>
  );
}
