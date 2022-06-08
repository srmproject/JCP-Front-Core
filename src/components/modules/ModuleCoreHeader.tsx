import React, { FC } from 'react';
import { MenuOutlined, CaretDownOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { coreHeaderProperty } from 'types/modules';
import AtomProfile from 'components/atoms/AtomProfile';

import AtomHeader from 'components/atoms/AtomHeader';
import AtomH2 from 'components/atoms/AtomH2';
import AtomH4 from 'components/atoms/AtomH4';
import AtomSpan from 'components/atoms/AtomSpan';
import AtomDiv from 'components/atoms/AtomDiv';

const CoreHeaderStyled = styled.div`
  .ant-layout-header {
    padding: 0 25px;
    background: #1a73e8;
    display: flex;
    height: 48px;
    line-height: 48px;
    .menuController {
      .anticon.anticon-menu {
        color: white;
        cursor: pointer;
      }
    }
    .appTitle {
      color: white;
      margin-left: 30px;
      cursor: pointer;
    }
    .projectProfile {
      margin-left: auto;
      color: white;
    }
  }
`;
const ModuleCoreHeader: FC<coreHeaderProperty> = ({ onClickTitle, onClickProject }) => {
  return (
    <CoreHeaderStyled>
      <AtomHeader>
        <AtomDiv className="menuController">
          <MenuOutlined></MenuOutlined>
        </AtomDiv>
        <AtomH2 className="appTitle" onClick={onClickTitle}>
          Junior Cloud Platform
        </AtomH2>
        <AtomH4 onClick={onClickProject}>
          <CaretDownOutlined></CaretDownOutlined>
          <AtomSpan className="projectLabel">프로젝트 선택</AtomSpan>
        </AtomH4>
        <AtomDiv className="projectProfile">
          <AtomProfile />
        </AtomDiv>
      </AtomHeader>
    </CoreHeaderStyled>
  );
};

export default ModuleCoreHeader;
