import type { FunctionComponent, PropsWithChildren } from 'react';

type IProps = {};

export const Button: FunctionComponent<PropsWithChildren<IProps>> = ({
  children,
}) => {
  return (
    <button
      type={'button'}
      className="bg-primary-500 text-white font-bold py-2 px-4 rounded"
    >
      {children}
    </button>
  );
};
