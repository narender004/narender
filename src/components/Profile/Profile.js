import React, { Component } from 'react';
import './Profilestle.css';

 var tooltipStyle
class Profile extends Component {

 
  

   
   
    render() {

        return (

            <div>
                
                <body className="profile-body container">                
                <div className="form-group  mx-auto" style={{marginTop: "10%", maxWidth: "100%",}}>
                        <h1 className={this.state.profile_value.shouldShow ? 'header' : 'hidden'} >Profile updated successfuly</h1>
                        <h2 className="header mt-2 mb-5">Profile</h2>

                        <hr className="mt-5 devider" style={{height: "2px", marginBottom: "80px",}} />

                        <div class="input-container my-4" onMouseOver={this.handleMouseIn.bind(this)} onMouseOut={this.handleMouseOut.bind(this)}>
                        <i class="fa fa-user icon"></i>
                        <div style={tooltipStyle}>this is the tooltip!!</div>
                        <input  type="text" name="first_name" class="input-field" placeholder="First Name" />
                        </div>

                        <div class="input-container my-4">
                        <i class="fa fa-user icon"></i>
                        <input type="text" name="last_name"  class="input-field" placeholder="Last Name" />
                        </div>

                        <div class="input-container my-4">
                        <i class="fa fa-envelope icon"></i>
                        <input type="text" name="email"  class="input-field" placeholder="Email" />
                        </div>
                        
                        
                    
                        <div class="input-container my-4">
                        <i class="fa fa-map-marker icon"></i>
                        <input type="text" name="city"  class="input-field" placeholder="City" />
                        </div>
                        
                        <div class="input-container my-4">
                        <i class="fa fa-calendar icon"></i><input type="date" name="birthday" class="input-field"   placeholder="Date" /></div>                       
                                <div className="text-center mt-5 mb-3">
                                    <span>
                                        <button className="btn btn-premium submit" style={{marginLeft: "10px",}} onClick={this.goUpdate.bind(this)} >Submit</button>
                                        <button className="btn btn-cancel-outline btn-premium submit " >Cancel</button>
                                    </span>

                                </div>
                 </div>
                   
                </body>
                
            </div>

        )
    }

}

export default Profile;