import { GetServerSideProps as _GetServerSideProps, GetStaticProps as _GetStaticProps } from 'next';
import { AppPageProps } from '../pages/_app';

export type GetServerSideProps = _GetServerSideProps<AppPageProps>;

export type GetStaticProps = _GetStaticProps<AppPageProps>;
