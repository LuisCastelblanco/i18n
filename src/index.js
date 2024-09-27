import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from 'react-intl';
import localeEsMessages from "./locales/es.json";
import localeEnMessages from "./locales/en.json";
import JobsList from "./components/jobsList";


const messages = {
  es: localeEsMessages,
  en: localeEnMessages
};


const language = navigator.language.split('-')[0] || 'en';

ReactDOM.render(
  <IntlProvider locale={language} messages={messages[language]}>
    <JobsList />
  </IntlProvider>,
  document.getElementById("root")
);
