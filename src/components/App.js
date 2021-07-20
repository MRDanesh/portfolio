import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Main from './screens/Main';
import Header from './Header';
import AcademicProjects from './screens/AcademicProjects';
import WebProjects from './screens/WebProjects';
import Footer from './Footer';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Header/>
                <>
                    <Route path = '/portfolio/' exact component={Main} />
                    <Route path = '/portfolio/projects/scientific' exact component={AcademicProjects} />
                    <Route path = '/portfolio/projects/web' exact component={WebProjects} />
                </>
                <Footer/>
            </BrowserRouter>
        </>
    );
};

export default App;