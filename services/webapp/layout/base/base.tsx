import Logo from '../../components/Logo';
import styles from './style.module.scss';

export interface BaseLayoutProps {
  host?: string;
  children: JSX.Element | JSX.Element[];
}

export default function BaseLayout({ host, children }: BaseLayoutProps) {
  return (
    <>
      <header className={styles.header}>
        <Logo host={host || '#main'} />
        <input type="text" />
        <button type="button">작성</button>
        <button type="button">로그인</button>
      </header>
      <main id="main">{children}</main>
    </>
  );
}
