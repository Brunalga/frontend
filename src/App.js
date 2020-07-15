import React, {Component} from 'react';

import { BrowserRouter as Router, Route} from "react-router-dom";
import Dashboard from "./components/Dashboard.js";
import Pabellon from "./components/Pabellon.js";


class App extends Component{
    render() {
        return(
            <Router>
                <Route exact path='' component={Dashboard} />
                <Route exact path='/pabellon' component={Pabellon} />
            </Router>
        )
    }
}
export default App;
