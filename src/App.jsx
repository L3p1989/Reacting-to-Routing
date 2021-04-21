import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar';

const App = () => {
    return (
        <Router>
            <NavBar />
        </Router>
    );
};

export default App;