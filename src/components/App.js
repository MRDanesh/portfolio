import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Main from './screens/Main';
import Header from './Header';
import AcademicProjects from './screens/AcademicProjects';
import WebProjects from './screens/WebProjects';
import Footer from './Footer';
import history from '../history';
import Research from './screens/Research';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Header/>
                <>
                    <Route path = '/portfolio/' exact component={Main} />
                    <Route path = '/portfolio/research' exact component={Research} />
                    <Route path = '/portfolio/projects/scientific' exact component={AcademicProjects} />
                    <Route path = '/portfolio/projects/web' exact component={WebProjects} />
                </>
            </BrowserRouter>
        </>
    );
};

export default App;