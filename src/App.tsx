import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import TemplateCore from 'components/templates/TemplateCore';
const App: FC = () => {
  return (
    <BrowserRouter>
      <TemplateCore></TemplateCore>
    </BrowserRouter>
  );
};

export default App;
