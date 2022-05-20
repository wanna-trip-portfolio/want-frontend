import React from 'react';

interface ErrorPageProps {
  title: string;
  content: string;
}

export const ERROR_KIND = {
  NOT_FOUND: {
    title: '404 Not Found',
    content: '요청하신 페이지를 찾을수 없습니다.'
  }
};

const ErrorPage: React.FC<{ errorType: ErrorPageProps }> = () => {
  return <div>잘못된 경로입니다.</div>;
};

export default ErrorPage;
