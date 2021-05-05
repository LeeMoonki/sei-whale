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
        <h2 className={style.keywordHeader}>
          <span className={'visually-hidden'}>추천 키워드 입니다</span>
          {keywords.length &&
            keywords.map((keyword, index) => (
              <a key={index} href={url()} className={style.keyword}>
                {keyword}
              </a>
            ))}
        </h2>
      </header>
      <section className={style.contentSection}>
        <h3 className={'visually-hidden'}>추천 내용입니다.</h3>
        <p>{content}</p>
      </section>
    </article>
  );
}
