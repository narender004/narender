import React, { Component } from 'react';
import './ResetPassword.css';





class ResetPassword extends Component {
     
  
   
    render() {
          const reset = {
   
    color: "black"  
}
        return (
            <div className="body ">
                <div className="container ">
                    <div className="p-3 text-light">                  
                        <div className="form-group text-center mx-auto ">
                        <div className="mb-4 mt-3"><strong style={reset}>Reset Your Password</strong></div>
                            <div class="input-container my-3">
                                <i class="fa fa-hashtag icon"></i>
                                <input name='user_token'  className="input-field " type="text" placeholder="Token" />
                            </div>
                            <div class="input-container my-3">
                                <i class="fa fa-key icon"></i>
                                <input name='user_password' className="input-field " type="password" placeholder="Password" />
                            </div>
                            <div><button className="submit mt-5 mb-3" >Submit</button></div>

                        </div>
                    </div>
                </div>
               
            </div>
        )
    }

}

export default ResetPassword;