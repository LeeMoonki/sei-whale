import { NextPage } from 'next';

interface Props {
  statusCode: number | undefined;
}

const Error: NextPage<Props> = ({ statusCode }) => {
  return (
    <p>
      {statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}
    </p>
  );
};

Error.getInitialProps = ({ res, err }): Props => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
