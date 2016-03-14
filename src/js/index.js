import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search-bar';

import css from '../scss/styles.scss';

const API_KEY = 'AIzaSyAkR_KUryY_eCDzpRGYIWEvYpI2yI2rSmc';

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}
ReactDOM.render(
  <App />,
  document.querySelector('.react-root')
);
