import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './pages/Home';
import Films from './pages/Films';

const App = () => {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/Films">
                    <Films />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;