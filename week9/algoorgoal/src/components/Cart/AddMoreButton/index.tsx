import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Button from '../../common/Button';
import theme from '../../../common/styles/theme';
import useCartStore from '../../../store/cartStore';

const InversedPrimaryButton = styled(Button)`
  box-sizing: border-box;
  color: ${theme.color.primary};
  background-color: ${theme.color.white};
`;

export default function AddMoreButton() {
  const { id } = useCartStore((state) => state.store)!;
  const navigate = useNavigate();
  return (
    <InversedPrimaryButton
      onClick={() => {
        navigate(`/store/${id}`);
      }}
    >
      더 담기 +
    </InversedPrimaryButton>
  );
}
