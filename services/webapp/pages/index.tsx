import Head from 'next/head';
import { useState } from 'react';
// import styles from '../styles/Home.module.scss';

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <Head>
        <title>sei-whale</title>
      </Head>
      <h1>Sei Whale Service!!</h1>
      <div>{count}</div>
      <button
        type="button"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        증가
      </button>
    </div>
  );
}
