import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Map from './Map/Component';
import '../style/App.css';

const App: React.FC = (): JSX.Element => {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/" component={Map} />
                </Switch>
            </Router>
        </div>
    );
};

export default App;
