import './public-path';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

let curRoot;

export async function bootstrap() {
  console.log('react app bootstraped');
}

export async function mount(props) {
  console.log('mount react')
  const el = props.container ? props.container.querySelector('#root') : document.getElementById('root');
  curRoot = ReactDOM.createRoot(el);
  curRoot.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

export function unmount(props) {
  console.log('unmount react')
  curRoot.unmount();
}

export async function update(props) {
  console.log('update props', props);
}


