import React from 'react';
import Map from './Map/Component';
import '../style/App.css';

const App: React.FC = (): JSX.Element => {
    return (
        <div className="App">
            <Map></Map>
        </div>
    );
};

export default App;
