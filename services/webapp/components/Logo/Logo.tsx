import style from './style.module.scss';

interface LogoProps {
  host: string;
}

export default function Logo({ host }: LogoProps) {
  return (
    <section className={style.logo}>
      <a href={host}>
        <span>G</span>
        omawo
      </a>
    </section>
  );
}
