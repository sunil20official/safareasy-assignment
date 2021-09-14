import React , { Fragment , useEffect , useState } from 'react';
import './App.css';
import { BrowserRouter as Router , Route , Switch  } from 'react-router-dom';

import Navbar from './components/Navbar';
import Login from './components/Login';
import Home  from './components/Home';
import PrivateRoute from './components/routing/PrivateRoute';

function App() {

  const [ user , setUser ] = useState({
    email:"",
    password:""
  });

const [ auth , setAuth ] = useState(false);

const onChange = (e) => {
  setUser({...user,[e.target.name]: e.target.value});
}

const onCompare = () => {
  if(user.email === sessionStorage.getItem("email") && user.password === sessionStorage.getItem("password")) {
    loginSuccess();
  } else {
    alert('unauthorized user');
  }
}

const loginSuccess = () => {
  setAuth(true);
}

const onSubmit = (e) => {
  onCompare();
  e.preventDefault();
}

  useEffect(() => {
    sessionStorage.setItem("email","sam@gmail.com");
    sessionStorage.setItem("password","1234");
    sessionStorage.setItem("auth",auth);
  },[auth]);

  return (
    <Router>
      <Fragment className="App">
          <Navbar auth={auth} />
          <div className="container">
            <Switch>
              <Route exact path='/login' >
                <Login user={user} onChange={onChange} onSubmit={onSubmit} auth={auth} />
              </Route>
              <PrivateRoute exact path='/' component={Home} auth={auth} user={user} />
            </Switch>
          </div>
      </Fragment>
    </Router>
  );
}

export default App;
