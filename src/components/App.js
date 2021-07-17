import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Main from './screens/Main';
import Header from './Header';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Header/>
                <>
                    <Route path = '/portfolio/' exact component={Main} />
                </>
            </BrowserRouter>
        </>
    );
};

export default App;