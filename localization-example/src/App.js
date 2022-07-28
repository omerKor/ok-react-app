import './App.css';
import { useState, useEffect } from 'react';

import { IntlProvider, FormattedMessage } from 'react-intl'

const messages = {
  'tr': {
    title: "Merhaba",
    description: `Şöyleyken böyle böyleyken şöyle öyleyken böyleyse şöyleyken böyledir "dinamik sayı ({count})"`
  },
  'en': {
    title: "Hello",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum laudantium beatae praesentium ad? "dinamic number ({count})"`

  }
}
function App() {
  const isLocale = localStorage.getItem('locale');

  const defaultLocale = isLocale ? isLocale : navigator.language;

  const [locale, setLocale] = useState(defaultLocale);

  useEffect(() => {
    localStorage.setItem("locale", locale);
  }, [locale]);

  return (
    <div className="App">
      <IntlProvider locale={locale} messages={messages[locale]}>
        <h2>
          <FormattedMessage id="title" />
        </h2>
        <p>
          <FormattedMessage id="description" values={{ count: 3 }} />
        </p>
        <br /><br />
        <button onClick={() => setLocale('tr')}>TR</button>
        <button onClick={() => setLocale('en')}>EN</button>
      </IntlProvider>
    </div>
  );
}

export default App;
