/**
 * Created by chenjun on 2017/6/30.
 */
import { Router } from 'react-router'
import {
    HashRouter,
    Route,
    Link
} from 'react-router-dom';
import React from 'react';
import A from '../views/A.js';
import Home from '../views/Home.js'
import About from '../views/About.js'
import Resume from '../views/Resume.js'
import Work from '../views/Work.js'
import Contact from '../views/Contact.js'
//import createBrowserHistory from 'history/createBrowserHistory';
//const customHistory = createBrowserHistory();<Router history={customHistory}>
const route = ()=>(
    <HashRouter>
        <div>
            <A />
            <Route path="/home" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/resume" component={Resume}/>
            <Route path="/work" component={Work}/>
            <Route path="/contact" component={Contact}/>
        </div>
    </HashRouter>
)

export default route;