import Head from 'next/head'
import { useState, useEffect } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch('http://localhost:3000/').then(r => r.json()).then(res => {
      console.log(res);
    });
  }, []);

  return (
    <div>
      <Head>
        <title>sei-whale</title>
      </Head>
      <h1>Sei Whale Service!!</h1>
      <div>{count}</div>
      <button type="button" onClick={() => {
        setCount(count + 1);
      }}>증가</button>
    </div>
  )
}
