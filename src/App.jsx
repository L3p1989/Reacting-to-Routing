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
                <Route exact path="/films">
                    <Films />
                </Route>
                <Route exact path="/films/:filmid">
                    <h1>Film details</h1>
                </Route>
            </Switch>
        </Router>
    );
};

export default App;