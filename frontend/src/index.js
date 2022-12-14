import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import 'antd/dist/antd.min.css';

function AppWithCallbackAfterRender() {
  useEffect(() => {
    console.log('rendered');
  });

  return <App tab="home" />
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<AppWithCallbackAfterRender />);