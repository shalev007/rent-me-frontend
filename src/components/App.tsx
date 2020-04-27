import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Map from 'src/components/Map/Component';
import BookingForm from 'src/components/User/Forms/Booking/Component';
import 'src/style/App.css';

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
