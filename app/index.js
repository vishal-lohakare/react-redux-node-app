import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import App from './App'
import EmployeeEditDetails from './components/EmployeeDetails/EmployeeEditDettailsHooks'

const routing = (
    <Router>
        <div>
            {/*<Link to='/EmployeeEditDetails'>EmployeeEditDetails </Link>*/}
            <Route exact path="/EmployeeEditDetails" component={EmployeeEditDetails} />
            <Route exact path="/" component={App} />
        </div>
    </Router>
)
ReactDOM.render(routing, document.getElementById('app'))