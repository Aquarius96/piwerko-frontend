import React from 'react';
import Routes from '../routes';
import Header from './Header';

const App = () =>
    <div>
        <Header />
        {Routes}
    </div>;

export default App;
