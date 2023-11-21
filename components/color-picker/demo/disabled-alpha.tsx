import React from 'react';
import { ColorPicker, theme } from 'antd';

const Demo = () => {
  const {
    token: { colorPrimary },
  } = theme.useToken();
  return <ColorPicker defaultValue={colorPrimary} disabledAlpha />;
};

export default Demo;
