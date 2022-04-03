import React, { FC } from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import { buttonProperty } from 'types/atoms';

const StyledButton: any = styled(Button)``;
const AtomButton: FC<buttonProperty> = ({ children, onClick, className }) => {
  return (
    <StyledButton onClick={onClick} className={className}>
      {children}
    </StyledButton>
  );
};

export default AtomButton;
