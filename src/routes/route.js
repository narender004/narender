import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import App from '../App';
//import About from './About';
import Navbar from '../Navbar/navbar';

import Login from '../components/Login/Loginpage';
import SignUp from '../components/Signup/Signup';
import ResetPassword from '../components/ResetPassword/ResetPassword';

    

class CustomRoutes extends React.Component {


    render() {
        return (
           <div>
          <Router>
        <div>
            <Navbar />
          <Route exact path='/' component={Login} />
           <Route exact path='/Login' component={SignUp} />
           <Route exact path='/forget' component={ResetPassword} />
 
        </div>
        </Router>
       
           </div>
        );

    };

}
export default CustomRoutes;