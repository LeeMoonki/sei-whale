import { useState } from 'react';
import { DefaultHead } from '../../components/htmlHead';
import { getStaticPropsMapper } from '../../lib/dataFetchingMethods';
import { onChangeListener } from '../../lib/listener';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  return (
    <div>
      <DefaultHead title="회원가입" />
      <h1>회원가입</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" value={email} onChange={onChangeListener(setEmail)} />
        <input type="password" value={password} onChange={onChangeListener(setPassword)} />
        <input
          type="password"
          value={passwordConfirm}
          onChange={onChangeListener(setPasswordConfirm)}
        />
      </form>
    </div>
  );
}

export const getStaticProps = getStaticPropsMapper((props) => ({ ...props, layout: 'empty' }));
