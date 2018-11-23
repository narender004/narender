import React, { Component } from 'react';
import './Signup.css';

class SignUp extends Component {
   constructor(props)
    {
    super(props);
    this.state = {
       
        first_name :'',
        last_name :'',
        email :'',
        password :'',
        code :'',
        city :'',
       birthday :'',
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
        let first_name = this.state.first_name;
        let last_name = this.state.last_name;
         let email = this.state.email;
        let password = this.state.password;
        let user_email = this.state.user_email;
        let code = this.state.code;
         let city = this.state.city;
          let birthday = this.state.birthday;
        console.log('first_name',first_name);
        console.log('last_name',last_name);
         console.log('email',email);
        console.log('password',password);
         console.log('code',code);
        console.log('city',city);
         console.log('birthday',birthday);
    }
    
    render() {
        return (
            
            
            <div className="body ">
            
            <div className="container ">
             <div className="p-3 text-light">                 
                 <div className="form-group marg-top text-center mx-auto "> 
                 <div  className=" logo-login">hipster</div>  
                     <div class="input-container my-3">
                        <i class="fa fa-user icon"></i>
                         <input name="first_name"   class="input-field" type="text" placeholder="First Name" onChange={this.onchangehandler}/>
                         </div>
                    <div class="input-container my-3">
                        <i class="fa fa-user icon"></i>
                        <input name="last_name"  class="input-field" type="text" placeholder="Last Name" onChange={this.onchangehandler}/>
                    </div>

                    <div class="input-container my-3">
                        <i class="fa fa-envelope icon"></i>
                        <input  name="email" class="input-field" type="text" placeholder="Email" onChange={this.onchangehandler}/>
                    </div>

                    <div class="input-container my-3">
                        <i class="fa fa-key icon"></i>
                        <input name="password"  class="input-field" type="password" placeholder="Password" onChange={this.onchangehandler}/>
                    </div>

                    <div class="input-container my-3">
                        <i class="fa fa-hashtag icon"></i>
                        <input name="code"  class="input-field" type="text" placeholder="Code" onChange={this.onchangehandler}/>
                    </div>

                    <div class="input-container my-3">
                        <i class="fa fa-map-marker icon"></i>
                        <input name="city"  class="input-field" type="text" placeholder="city" onChange={this.onchangehandler}/>
                    </div>   

                    <div class="input-container my-3">
                        <i class="fa fa-calendar icon"></i>
                        <input name="birthday"  class="input-field date" type="date" onChange={this.onchangehandler}/>
                    </div> 

                    <div><button className="submit my-3" onClick={this.clickhandler}>Sign up</button></div>
                    <p>Already Have an account ? <a className="forget"  href="/"> Login</a></p>
                 </div>
                </div>
             </div>
            
            </div>           
           
        );
    }
}

export default SignUp;
