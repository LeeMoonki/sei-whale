/**
 * Layout 설정
 * global css를 적용
 * 페이지간 state 유지
 * componentDidCatch를 통해 에러 핸들링을 커스터마이징
 * page에 추가적인 데이터 삽입
 */
import type { AppProps /*, AppContext */ } from 'next/app';
import '../styles/globals/fonts.css';
import '../styles/globals/reset.css';
import '../styles/globals/index.css';

import BaseLayout from '../layout/base';
import EmptyLayout from '../layout/empty';

export type Layout = 'base' | 'empty'; // union
export interface AppPageProps {
  layout?: Layout;
  host?: string;
  isLogin?: boolean;
}

function MyApp({ Component, pageProps }: AppProps) {
  // Component는 렌더링 될 페이지이다.
  // Component에 전달하는 props는 페이지 컴포넌트에서 props로 받는다.
  // 각 페이지에서 작성한 Data Fetching 메서드가 전달하는 props가 여기로 전달되어 컴포넌트로 들어간다.

  const { layout: layout1, host, isLogin } = pageProps as AppPageProps;
  const layout = layout1;

  console.log('MyApp : ', layout1);

  return layout === 'base' ? (
    <BaseLayout host={host} isLogin={isLogin}>
      <Component {...pageProps} />
    </BaseLayout>
  ) : layout === 'empty' ? (
    <EmptyLayout host={host}>
      <Component {...pageProps} />
    </EmptyLayout>
  ) : (
    <Component {...pageProps} />
  );
}

export default MyApp;
