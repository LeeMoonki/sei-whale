import Logo from '../../components/logo';
import style from './style.module.scss';

import { Button, Anchor } from '../../components/buttonAndAnchors';
import { InputSearch } from '../../components/inputs';

export interface BaseLayoutProps {
  host?: string;
  isLogin?: boolean;
  children: JSX.Element | JSX.Element[];
}

export default function BaseLayout({ host, isLogin, children }: BaseLayoutProps) {
  return (
    <div id="root">
      <header className={style.header}>
        <Logo host={host || '#main'} />
        <InputSearch className={style.inputSearch} placeholder="검색어를 입력해주세요" />
        <Button className={style.btnWrite}>작성</Button>
        {!isLogin && (
          <Anchor href="/login" className={style.btnLogin}>
            로그인
          </Anchor>
        )}
      </header>
      <main id="main">{children}</main>
    </div>
  );
}
