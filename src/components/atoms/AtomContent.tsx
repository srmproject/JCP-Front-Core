import React, { FC } from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';
import { contentProperty } from 'types/atoms';
const { Content } = Layout;
const StyledContent: any = styled(Content)``;

const AtomContent: FC<contentProperty> = ({ children, className }) => {
  return <StyledContent className={className}>{children}</StyledContent>;
};

export default AtomContent;
