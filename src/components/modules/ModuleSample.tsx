import React, { FC } from 'react';

import { RootState } from 'types/reducer';
import { actions } from 'slices/sample';
import { useSelector, useDispatch } from 'react-redux';

import AtomButton from 'components/atoms/AtomButton';
import AtomDiv from 'components/atoms/AtomDiv';

const ModuleSample: FC = () => {
  const dispatch = useDispatch();
  const value = useSelector<RootState>((state) => state.sample.value);
  const init = () => {
    dispatch(actions.getValue());
  };
  const onChangeValue = (amount: number) => {
    dispatch(actions.changeValue({ amount }));
  };
  return (
    <AtomDiv>
      <AtomDiv>테스트 {value} </AtomDiv>
      <AtomButton onClick={() => onChangeValue(1)} className="test1">
        +
      </AtomButton>
      <AtomButton onClick={() => onChangeValue(-1)}>-</AtomButton>
      <AtomButton onClick={() => init()}>saga test</AtomButton>
    </AtomDiv>
  );
};

export default ModuleSample;
