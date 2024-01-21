import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { event } from '@ice/stark-data';

const rootEle = document.getElementById('root')
let root = null
if (rootEle) {
  root = ReactDOM.createRoot(rootEle);
  root.render(
      <App />
  );
}

export default App;

// 声明 mount 生命周期
export function mount(ModuleComponent, targetNode, props) {
  root = ReactDOM.createRoot(targetNode)
  root.render(<ModuleComponent {...props} />);
}

// 声明 unmount 生命周期
export function unmount(targetNode) {
  // ReactDOM.unmountComponentAtNode(targetNode);
  root.unmount()
}

if (module.hot) {
  module.hot.accept('./App.js', () => {
    console.log('should rerender..')
    event.emit('freshMessage', true);
    if (rootEle && root) {
      root.render(
        <App />
      );
    }
  })
}