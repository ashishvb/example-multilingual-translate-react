import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MultiLingualTranslationWrapper from 'multilingual-translate'

ReactDOM.render(
  <React.StrictMode>
    <MultiLingualTranslationWrapper defLang="en">
      <App />
    </MultiLingualTranslationWrapper>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
