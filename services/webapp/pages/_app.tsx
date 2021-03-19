/**
 * Layout 설정
 * global css를 적용
 * 페이지간 state 유지
 * componentDidCatch를 통해 에러 핸들링을 커스터마이징
 * page에 추가적인 데이터 삽입
 */
import type { AppProps /*, AppContext */ } from 'next/app'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  // Component는 렌더링 될 페이지이다.
  // Component에 전달하는 props는 페이지 컴포넌트에서 props로 받는다.
  return <Component {...pageProps} />
}

export default MyApp
