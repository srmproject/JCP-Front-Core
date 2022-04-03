import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TemplateSample from 'components/templates/TemplateSample';
import DynamicRouter from './DynamicRouter';
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/sample" element={<TemplateSample />} />
      <Route path="/apps/:appName" element={<DynamicRouter />} />
      <Route path="*" element={<div>홈화면?</div>} />
    </Routes>
  );
};

export default AppRoutes;
