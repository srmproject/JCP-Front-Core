import React, { FC } from 'react';
import { Menu } from 'antd';
import styled from 'styled-components';
import { menuProperty } from 'types/atoms';

const StyledMenu = styled(Menu)`
  height: 100%;
`;
const { Item } = Menu;

const AtomMenu: FC<menuProperty> = ({ mode, onClick }) => {
  return (
    <StyledMenu mode={mode}>
      <Menu.Item key="1" onClick={onClick}>
        Sample
      </Menu.Item>
      <Item key="2" onClick={onClick}>
        Application
      </Item>
      <Item key="3" onClick={onClick}>
        Job
      </Item>
    </StyledMenu>
  );
};

export default AtomMenu;
