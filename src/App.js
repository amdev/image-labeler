<<<<<<< HEAD
import React, {Component} from 'react';
import firebase from './Firebase'
import Home from './Screen/Home';
import Page from './Screen/single-page';
import Loading from './components/Loading';
import PrivateRoute from './components/PrivateRoute';
import {BrowserRouter as Router, Route} from "react-router-dom";
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            message: '',
            loading: true,
            authenticated: false,
            user: null,
            register: 'Tabs1',
            position: "Undefind"
        }
    }
    componentWillMount() {
        firebase
            .auth()
            .onAuthStateChanged(user => {
                if (user) {
                    this.setState({authenticated: true, currentUser: user, loading: false});
                } else {
                    this.setState({authenticated: false, currentUser: null, loading: false});
                }
            });
    }
     render() {
        const {authenticated, loading} = this.state;

        if (loading) {
            return <Loading/>;
        }
        return (

            <Router>
                <div>
                    <PrivateRoute
                        exact
                        path="/dashboard"
                        component={Page}
                        authenticated={authenticated}/>

                    <Route exact path="/" component={Home}/>

                </div>
            </Router>

        );
    }
}

export default App;
=======
import React, {Component} from 'react';
import firebase from './Firebase'
import Home from './Pages/Home';
import Page from './Pages/single-page';
import Loading from './React-components/Loading';
import PrivateRoute from './React-components/PrivateRoute';
import {BrowserRouter as Router, Route} from "react-router-dom";
import CreateProject from './React-components/CreateProject';


require('dotenv').config()
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            message: '',
            loading: true,
            authenticated: false,
            user: null,
            register: 'Tabs1',
            position: "Undefind"
        }
    }
    componentWillMount() {
        firebase
            .auth()
            .onAuthStateChanged(user => {
                if (user) {
                    this.setState({authenticated: true, currentUser: user, loading: false});
                } else {
                    this.setState({authenticated: false, currentUser: null, loading: false});
                }
            });
    }
     render() {
        const {authenticated, loading} = this.state;

        if (loading) {
            return <Loading/>;
        }
        return (

            <Router>
                <div>
                    <PrivateRoute
                        exact
                        path="/dashboard"
                        component={Page}
                        authenticated={authenticated}/>

                    <Route exact path="/" component={Home}/>
                    <Route exact path="/create" component={CreateProject} />
                  
                </div>
            </Router>

        );
    }
}

export default App;
>>>>>>> bec1b36af0632a9d39c0b135cc89c94fce450447
