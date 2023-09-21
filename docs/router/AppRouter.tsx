import * as React from 'react';
import * as ReactDom from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {observer} from 'mobx-react';

import Entry from '../views/Entry';
import Dashboard from '../views/dashboard/Dashboard';
import { createHashHistory } from 'history';

@observer
export default class AppRouter extends React.Component<any, any> {
    render() {
        return (
            <Router>
                <Routes>
                    <Route path="/" Component={Entry} />
                    <Route path="/dashboard" Component={Dashboard} />
                    {/* Add more routes as needed */}
                </Routes>
            </Router>
        );
    }
}
