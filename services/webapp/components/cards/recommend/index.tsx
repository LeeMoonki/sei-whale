import style from './style.module.scss';

export interface CardRecommendProps {
  keywords: string[];
  content: string;
}

export function CardRecommend({ keywords, content }: CardRecommendProps) {
  const header = `추천 키워드 입니다 : ${keywords.join(',')}`;
  return (
    <article className={style.card}>
      <header>
        <h1>{header}</h1>
        <nav>
          <ul>
            {keywords.length &&
              keywords.map((keyword, index) => (
                <li key={index}>
                  <a>{keyword}</a>
                </li>
              ))}
          </ul>
        </nav>
      </header>
      <section>
        <h2>추천 내용입니다.</h2>
        <p>{content}</p>
      </section>
    </article>
  );
}
