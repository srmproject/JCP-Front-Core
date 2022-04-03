import React, { FC } from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';
import { headerProperty } from 'types/atoms';
const { Header } = Layout;

const StyledHeader = styled(Header)``;

const AtomHeader: FC<headerProperty> = ({ children, className }) => {
  return <StyledHeader className={className}>{children}</StyledHeader>;
};

export default AtomHeader;
