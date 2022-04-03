import React, { FC } from 'react';
import styled from 'styled-components';
import { spanProperty } from 'types/atoms';

const StyledSpan = styled.span``;
const AtomSpan: FC<spanProperty> = ({ className, onClick, children }) => {
  return (
    <StyledSpan className={className} onClick={onClick}>
      {children}
    </StyledSpan>
  );
};

export default AtomSpan;
