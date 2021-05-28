import { GetServerSideProps } from '../../types';
import { AppPageProps } from '../../pages/_app';
import { api } from '../api';

export const getServerSidePropsMapper = <Props extends AppPageProps = AppPageProps>(
  appPropsMapper?: (appProps?: AppPageProps) => Props
): GetServerSideProps => {
  return async ({ req }) => {
    const login = await api.s.get('/echo-whale', null, { cookie: req.headers.cookie });
    const domain = process.env.DOMAIN as string;

    const _appProps: AppPageProps = {
      layout: 'base',
      host: domain,
      isLogin: !!login.user,
    };

    return {
      props: appPropsMapper ? appPropsMapper(_appProps) : _appProps,
    };
  };
};
