import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Main from './screens/Main';
import About from './screens/About/About';
import Projects from './screens/Projects/Projects'
import Header from './Header';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Header/>
                <>
                    <Route path = '/portfolio/' exact component={Main} />
                    <Route path = '/portfolio/projects' exact component={Projects}/>
                    <Route path = '/portfolio/about' component={About} />
                </>
            </BrowserRouter>
        </>
    );
};

export default App;