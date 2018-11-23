import React, { Component } from 'react';
// import logo from './logo.svg';
import './Login.css';



// var errormsg
class Login extends Component {
    routeTocontact(e)
    {
         e.preventDefault();
    this.props.history.push('/forget'); //redirect another page it will redirect contact page(path='/contact' from router.js)
    }

   constructor(props)
    {
    super(props);
    this.state = {
       
        user_email :'',
        user_password :'',
        isClicked : false
    }
this.onchangehandler = this.onchangehandler.bind(this);
this.clickhandler = this.clickhandler.bind(this);
    }
onchangehandler(e)
{
   // e.target.name= e.target.value;
     this.setState({
            [e.target.name]: e.target.value
        })
}
 clickhandler(e)
    {
        e.preventDefault();
        this.setState({isClicked : !this.state.isClicked});
        let user_email = this.state.user_email;
        let user_password = this.state.user_password;
        console.log('user_email',user_email);
        console.log('user_password',user_password);

//          const data = new FormData(event.target);
    
//     fetch('/api/form-submit-url', {
//       method: 'POST',
//       body: data,
//     });
//   }

    }

    render() {
         var someElementClass = this.state.isClicked ? 'clicked' : 'body';
        const forgetStyle = {
   
    color: "#5FBFF9",
     border: 'none',
     backgroundColor:"white"
   
}
        return (
            
            <div id="body" className={someElementClass}>
                <div className="container">
                    <div className="p-3 text-light">                
                 
                        <div className="form-group text-center mx-auto" style={{marginTop: "10%"}}>
                        
                            <div  className="logo-login">Digital Music Sytem</div>
                            <div>
                                <div class="input-container my-4">
                                    <i class="fa fa-user icon"></i>
                                    <input class="input-field" type="text"  placeholder="User ID" name='user_email' onChange={this.onchangehandler}/>
                                </div>
                               
                                <div class="input-container my-4">
                                  <i class="fa fa-key icon"></i>
                                  <input class="input-field" type="password" placeholder="Password" name='user_password'onChange={this.onchangehandler}  />
                                </div>
                               
                                <div><button className="submit mt-5 mb-3" onClick={this.clickhandler} >LogIn</button></div>
                                <a href="" style={forgetStyle} onClick={this.routeTocontact.bind(this)}>Forget password</a>
                            </div>
                        </div>
                    </div>
                </div>
              
            </div>


        );
    }
}

export default Login;
