import Logo from '../../components/logo';
import style from './style.module.scss';

import { Button } from '../../components/buttons';
import { InputSearch } from '../../components/inputs';

export interface BaseLayoutProps {
  host?: string;
  children: JSX.Element | JSX.Element[];
}

export default function BaseLayout({ host, children }: BaseLayoutProps) {
  return (
    <div id="root">
      <header className={style.header}>
        <Logo host={host || '#main'} />
        <InputSearch className={style.inputSearch} placeholder="검색어를 입력해주세요" />
        <Button className={style.btnWrite}>작성</Button>
        <Button className={style.btnLogin}>로그인</Button>
      </header>
      <main id="main">{children}</main>
    </div>
  );
}
