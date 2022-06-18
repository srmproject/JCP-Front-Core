import React, { FC, useState } from 'react';
import { MenuOutlined, CaretDownOutlined, FolderAddOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import axios from 'axios';
import { Modal, Row, Col, Input, Button } from 'antd';
import { coreHeaderProperty } from 'types/modules';
import AtomProfile from 'components/atoms/AtomProfile';
import AtomHeader from 'components/atoms/AtomHeader';
import AtomH2 from 'components/atoms/AtomH2';
import AtomH4 from 'components/atoms/AtomH4';
import AtomSpan from 'components/atoms/AtomSpan';
import AtomDiv from 'components/atoms/AtomDiv';

const { Search } = Input;

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
const [isOpen, setIsOpen] = useState(false);
const [name, setName] = useState('');
const [description, setDescription] = useState('');
const callApi =  async () => {

 const response = await axios.post('http://dev-backend.choilab.xyz/api/v1/project/', 
 {
   name,description
 },
 {
   headers: {
      'Content-type': 'application/json',
      'Accept': 'application/json'
   }
  }
 ) 
   .then((response) => {console.log(response.data); })
   .catch((response) => {console.log('Error!') });

}
const handleSubmit = () => {
  setIsOpen(false);
  console.log(name);
  console.log(description);
  callApi();
}

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
          <AtomSpan className="projectLabel" onClick={() => console.log('프로젝트 선택')}>프로젝트 선택</AtomSpan>
        </AtomH4>
        <AtomH4 onClick={onClickProject}>
          <AtomSpan className="projectLabel" onClick={() => setIsOpen(true)}>프로젝트 생성</AtomSpan>
        </AtomH4>
        <AtomDiv className="projectProfile">
          <AtomProfile />
        </AtomDiv>
      </AtomHeader>
      <Modal onCancel={() => setIsOpen(false)} title="프로젝트 선택" visible={isOpen} footer={[
        <>
           <Button htmlType='submit' onClick={()=>handleSubmit()} >
           생성
         </Button>
        </>
      ]} >
        <Row>
              <Col span={4}>프로젝트 이름</Col>
              <Col span={20}><Input onChange={(e)=>setName(e.target.value)} value={name}></Input></Col>
              <Col span={4}>설명</Col>
              <Col span={20}><Input.TextArea onChange={(e)=>setDescription(e.target.value)} value={description}></Input.TextArea></Col>
        </Row>
      </Modal>
    </CoreHeaderStyled>
  );
};

export default ModuleCoreHeader;
