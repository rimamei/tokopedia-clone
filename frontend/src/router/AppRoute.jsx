import { FallbackError } from '@/component/Elements';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Helmet } from 'react-helmet-async';
import { ScrollRestoration } from 'react-router-dom';

const AppRoute = ({ permissions, privateroute, stage, children, title }) => {
  return (
    <>
      <Helmet>
        <title>{title ?? 'Tokopedia Clone'}</title>
      </Helmet>
      <ErrorBoundary FallbackComponent={FallbackError}>
        <Suspense fallback={<p>Loading</p>}>{children}</Suspense>
      </ErrorBoundary>
      <ScrollRestoration />
    </>
  );
};

export default AppRoute;
