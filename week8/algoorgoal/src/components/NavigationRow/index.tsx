import React, { ReactNode } from 'react';
import BackButton from './BackButton';
import CancelButton from './CancelButton';
import Row from '../../common/components/Row';

interface NavigationRowPropsTypes {
  children: ReactNode;
}

export default function NavigationRow({ children }: NavigationRowPropsTypes) {
  return <Row justifyContent="space-between">{children}</Row>;
}
