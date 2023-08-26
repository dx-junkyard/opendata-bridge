import { FC } from 'react';

const Head: FC = () => {
  return (
    <>
      <title>OpenData Bridge</title>
      <meta
        name="description"
        content={'市民とオープンデータをつなぐプラットフォーム'}
      />
      <link rel="icon" href={'/favicon.ico'} />
    </>
  );
};

export default Head;
