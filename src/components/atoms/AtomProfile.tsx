import React, { FC } from 'react';
import Styled from 'styled-components';
import Anonymous from 'images/anonymous.png';

const StyledProfile = Styled.div`
img{
  width:35px;
  height:35px;
  border-radius:50%;
}
`;

const AtomProfile: FC = () => {
  return (
    <StyledProfile>
      <img src={Anonymous}></img>
    </StyledProfile>
  );
};

export default AtomProfile;
