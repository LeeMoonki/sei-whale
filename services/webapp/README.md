# sei-whale 프론트 서비스

## 안내

- 환경 변수를 [dotenv](https://github.com/motdotla/dotenv#readme)를 사용하여 설정했는데 server에서는 사용 가능하지만 프론트에선 사용 불가능한 문제가 있었습니다.
  - 따라서 서버에서 환경변수 값을 생성해 컴포넌트에 하나하나 전달해 사용하기보다 서비스가 시작될 때 `.env`에 있는 내용을 `config.ts`로 복사해주는 `parseEnvIntoConfig.js`를 만들어 사용했습니다.
  - 그래서 혹시 `config.ts`가 없어서 문제가 생기는 경우 `webapp`에서 `yarn dotenv1`을 별도로 실행해줘야 합니다. (문제가 있는 경우에만 입니다. 보통 docker-compose를 실행하거나 `webapp`에서 실행할 때 직전에 `parseEnvIntoConfig.js`를 실행해서 `config.ts`를 실행해줍니다.)
  - `.env`는 현재 개발중이기 때문에 git에 포함했습니다. 하지만 서비스 예정이라면 공유하지 않습니다. 따라서 `config.ts`는 미리 공유하지 않았습니다.

## Nextjs 안내

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
