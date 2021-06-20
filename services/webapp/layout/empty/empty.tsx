import Logo from '../../components/logo';
import style from './style.module.scss';

export interface EmptyLayoutProps {
  host?: string;
  children: JSX.Element | JSX.Element[];
}

export default function EmptyLayout({ host, children }: EmptyLayoutProps) {
  return (
    <div id="root">
      <header className={style.header}>
        <Logo host={host || '#main'} />
      </header>
      <main id="main">{children}</main>
    </div>
  );
}
