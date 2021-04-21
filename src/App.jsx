import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './pages/Home';
import Films from './pages/Films';
import FilmDetail from './pages/FilmDetail';
import People from './pages/People';

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
                    <FilmDetail />
                </Route>
                <Route exact path="/people">
                    <People />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;