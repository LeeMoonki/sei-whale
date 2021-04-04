import React from 'react';
import styles from './style.module.scss';

type Keyword = string;
interface DefaultCardProps {
  keywords: Keyword[];
  recommendation: string;
}

function DefaultCard({ keywords, recommendation }: DefaultCardProps) {
  return (
    <article className={styles.card}>
      <hgroup className={styles.keywords}>
        <h1 className={styles.title}>
          추천 키워드 : {keywords.length > 0 ? keywords.join(',') : recommendation.slice(0, 20)}
        </h1>
        {keywords.length > 0 &&
          keywords.map((keyword, index) => (
            <h2 key={index} className={styles.keyword}>
              {keyword}
            </h2>
          ))}
      </hgroup>
      <p className={styles.recommendation}>{recommendation}</p>
    </article>
  );
}

export default DefaultCard;
