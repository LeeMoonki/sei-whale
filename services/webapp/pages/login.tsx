import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/Home.module.scss';

export default function Home() {
  const [email, setEmail] = useState('foo');
  const [password, setPassword] = useState('bar');

  const submit = () => {
    const body = { email, password };

    fetch('http://localhost:7070/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then(({ success }) => {
        if (success) {
          location.href = '/';
        } else {
          alert('로그인 실패');
        }
      });
  };

  return (
    <div id={styles.app}>
      <Head>
        <title>sei-whale | 로그인</title>
      </Head>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <button onClick={submit}>로그인</button>
      </form>
    </div>
  );
}
