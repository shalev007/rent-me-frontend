import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Map from './Map/Component';
import BookingForm from './BookingForm/Component';
import '../style/App.css';

const App: React.FC = (): JSX.Element => {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/" component={Map} />
                    <Route exact path="/booking" component={BookingForm} />
                </Switch>
            </Router>
        </div>
    );
};

export default App;
