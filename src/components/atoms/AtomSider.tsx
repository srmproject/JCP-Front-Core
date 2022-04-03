import React, { FC } from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';
import { siderProperty } from 'types/atoms';
const { Sider } = Layout;
const StyledSider: any = styled(Sider)``;

const AtomSider: FC<siderProperty> = ({ children, className }) => {
  return <StyledSider className={className}>{children}</StyledSider>;
};

export default AtomSider;
