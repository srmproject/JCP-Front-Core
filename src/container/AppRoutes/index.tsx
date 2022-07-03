import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TemplateSample from 'components/templates/TemplateSample';
import DynamicRouter from 'container/DynamicRouter';
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/sample" element={<TemplateSample />} />
      <Route path="apps">
        <Route path=":appName/*" element={<DynamicRouter />}></Route>
      </Route>
      <Route path="*" element={<div>코어홈?</div>} />
    </Routes>
  );
};

export default AppRoutes;
