import Usecase from 'components/molecules/Usecase/Usecase';
import { FC } from 'react';
import { UsecaseProps } from 'types/usecase';

import styles from './UsecaseList.module.scss';

export type UsercaseListProps = {
  usecases: UsecaseProps[];
};

const UsercaseList: FC<UsercaseListProps> = ({
  usecases,
}: UsercaseListProps) => {
  return (
    <div className={styles.grid}>
      {usecases.map((usecase, index) => (
        <Usecase key={index} {...usecase} />
      ))}
    </div>
  );
};

export default UsercaseList;