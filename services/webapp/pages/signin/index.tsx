import { useState } from 'react';
import styles from '../../styles/pages/Home.module.scss';
import { DefaultHead } from '../../components/htmlHead';

export default function Signin() {
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
          // location.href = '/';
          alert('성공');
        } else {
          alert('로그인 실패');
        }
      });
  };

  return (
    <div id={styles.app}>
      <DefaultHead title="로그인" />
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <button onClick={submit}>로그인</button>
      </form>
    </div>
  );
}
