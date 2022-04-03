import React, { FC } from 'react';
import styled from 'styled-components';
import { divProperty } from 'types/atoms';

const StyledDiv = styled.div``;
const AtomDiv: FC<divProperty> = ({ className, onClick, children }) => {
  return (
    <StyledDiv className={className} onClick={onClick}>
      {children}
    </StyledDiv>
  );
};

export default AtomDiv;
