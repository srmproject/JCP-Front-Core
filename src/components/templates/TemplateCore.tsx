import React from 'react';
import { Layout } from 'antd';
import { useNavigate } from 'react-router-dom';

import ModuleCoreHeader from 'components/modules/ModuleCoreHeader';
import ModuleCoreSider from 'components/modules/ModuleCoreSider';
import ModuleCoreContent from 'components/modules/ModuleCoreContent';
const TemplateCore = () => {
  const navigation = useNavigate();
  const handleClickTitle = () => {
    navigation('/');
  };
  const handleClickProject = () => {
    console.log('프로젝트 클릭...');
  };
  return (
    <>
      <Layout id="mainSelection">
        <ModuleCoreHeader onClickTitle={handleClickTitle} onClickProject={handleClickProject}></ModuleCoreHeader>
        <Layout>
          <ModuleCoreSider></ModuleCoreSider>
          <Layout>
            <ModuleCoreContent></ModuleCoreContent>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
};

export default TemplateCore;
