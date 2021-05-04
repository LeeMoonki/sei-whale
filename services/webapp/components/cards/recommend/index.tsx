import style from './style.module.scss';
import { url } from '../../../lib/url';

export interface CardRecommendProps {
  keywords: string[];
  content: string;
}

export function CardRecommend({ keywords, content }: CardRecommendProps) {
  return (
    <article className={style.card}>
      <header>
        <h1>
          <span className={'visually-hidden'}>추천 키워드 입니다</span>
          {keywords.length &&
            keywords.map((keyword, index) => (
              <a key={index} href={url()}>
                {keyword}
              </a>
            ))}
        </h1>
      </header>
      <section>
        <h2 className={'visually-hidden'}>추천 내용입니다.</h2>
        <p>{content}</p>
      </section>
    </article>
  );
}
