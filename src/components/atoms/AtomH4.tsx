import React, { FC } from 'react';
import styled from 'styled-components';
import { h4Property } from 'types/atoms';

const StyledH4 = styled.h4`
  color: white;
  margin-left: 30px;
  cursor: pointer;
  .anticon.anticon-caret-down {
    margin-right: 10px;
  }
`;

const AtomH4: FC<h4Property> = ({ children, className, onClick }) => {
  return (
    <StyledH4 className={className} onClick={onClick}>
      {children}
    </StyledH4>
  );
};

export default AtomH4;
