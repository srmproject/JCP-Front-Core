import React, { FC } from 'react';
import styled from 'styled-components';
import { h2Property } from 'types/atoms';

const StyledH2 = styled.h2``;

const AtomH2: FC<h2Property> = ({ children, className, onClick }) => {
  return (
    <StyledH2 className={className} onClick={onClick}>
      {children}
    </StyledH2>
  );
};

export default AtomH2;
