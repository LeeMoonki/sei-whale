import Head from 'next/head';

interface Props {
  posts: number[];
}

export default function Home({ posts }: Props) {
  return (
    <div>
      <Head>
        <title>sei-whale</title>
      </Head>
      <h1>Sei Whale list</h1>
      {posts && posts.map((n, idx) => <div key={idx}>{n}</div>)}
    </div>
  );
}

interface Path {
  params: {
    id?: string;
  };
}

export async function getStaticPaths() {
  const paths: Path[] = [{ params: { id: '1' } }, { params: { id: '2' } }];
  return { paths, fallback: false }; // fallback은 다른 라우트에 대해선 404를 반환하도록 설정한다.
}

export async function getStaticProps({ params }: Path): Promise<{ props: Props }> {
  console.log('params : ', params);

  // params를 사용해 data를 fetch 한다.
  const data = [10, 20].map((n) => n + +(params.id || 10000)); // parmas를 사용해 가져온 데이터라고 가정

  return { props: { posts: data } };
}
