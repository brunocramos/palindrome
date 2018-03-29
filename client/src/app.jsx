import React from 'react';
import ReactDOM from 'react-dom';

import Main from './js/pages/Main';

import './css/app.css';

const App = () => <Main />;

ReactDOM.render(<App />, document.getElementById('app'));
if (module.hot) module.hot.accept();

export default App;
