import Head from 'next/head';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div id={styles.app}>
      <Head>
        <title>sei-whale</title>
      </Head>
      <header className={styles.header}>
        <h1 className="service-title">sei-whale 추천 서비스 입니다.</h1>
        <section className={styles.layoutBoundary}>
          <input className={styles.inputSearch} type="text" placeholder="검색하고 찾아보세요" />
          <section className={styles.recommend}>
            <textarea
              className={styles.recommendArea}
              placeholder="어떤걸 공유하고 싶으세요?"
            ></textarea>
          </section>
        </section>
      </header>
      <section className={styles.contents}>
        <section className={styles.layoutBoundary}></section>
      </section>
      <footer>
        <section className={styles.layoutBoundary}></section>
      </footer>
    </div>
  );
}
