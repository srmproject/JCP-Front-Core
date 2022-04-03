import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import AtomSider from 'components/atoms/AtomSider';
import AtomMenu from 'components/atoms/AtomMenu';

const ModuleCoreSider: FC = () => {
  const navigation = useNavigate();
  const handleClickMenu = (item: any) => {
    const { key } = item;
    if (key === '1') {
      navigation('/sample');
    } else if (key === '2') {
      navigation('/apps/application');
    } else {
      navigation('/apps/job');
    }
  };
  return (
    <AtomSider>
      <AtomMenu mode="vertical" onClick={handleClickMenu}></AtomMenu>
    </AtomSider>
  );
};

export default ModuleCoreSider;
