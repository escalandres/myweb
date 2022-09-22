//Router
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Auth from './Auth';
import App from '../App';
// import Descarga from './Descargar';
// import About from './About';
// import Dropzone from './Dropzone';
const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" component={Auth} />
            <Route exact path="/App" component={App} />
            {/* <Route exact path="/descargar" component={Descarga} />
            <Route exact path="/about" component={About} />
            <Route exact path="/update-photo" component={Dropzone} /> */}
        </Routes>
    </BrowserRouter>
);

export default Router;