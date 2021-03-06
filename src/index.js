import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import App from './App';
import { ThemeProvider } from './hooks/index';
import i18n from './hooks/i18n';

i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
});

ReactDOM.render(
  <ThemeProvider>
    <I18nextProvider i18n={i18n}>
      <Suspense fallback={<h1>Hi</h1>}>
        <App />
      </Suspense>
    </I18nextProvider>
  </ThemeProvider>,
  document.getElementById('root')
);
