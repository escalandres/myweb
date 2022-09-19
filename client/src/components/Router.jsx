//Router
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Auth from './Auth';
// import App from '../App';
// import Descarga from './Descargar';
// import About from './About';
// import Dropzone from './Dropzone';
const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Auth} />
            {/* <Route exact path="/login" component={App} />
            <Route exact path="/descargar" component={Descarga} />
            <Route exact path="/about" component={About} />
            <Route exact path="/update-photo" component={Dropzone} /> */}
        </Switch>
    </BrowserRouter>
);

export default Router;