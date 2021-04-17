/**
 * 앱의 <html> 그리고 <body> 태그들을 구성하기 위해 일반적으로 사용된다.
 * <Head /> 컴포넌트는 next/head로 사용되는 것과 다르다.
 * <Head /> 컴포넌트는 모든 페이지에 적용되는 <head> 코드를 정의하는 경우에만 사용한다.
 * 그렇지 않은 경우 (<title> 같이) next/head를 사용하자.
 */
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx); // 프론트 사이드 이동에선 호출되지 않는다.
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="ko">
        <Head>
          <link rel="shortcut icon" href="favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
