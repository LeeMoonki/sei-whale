import Head from 'next/head';

interface Head {
  title: string;
}

export function DefaultHead(head: Head) {
  return (
    <Head>
      <title>Gomawo | {head.title}</title>
    </Head>
  );
}
