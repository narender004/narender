import React, { Component } from 'react';
import './Premium.css';
import circle from '../../circle.svg';




class GetPremium extends Component {

  
    componentDidMount() {
        document.body.classList.add("bodyPremium");
    }

    componentWillUnmount() {
        document.body.classList.remove("bodyPremium");
    }
  

   

    render() {
        return (

            <div className="bodyPremium" >
                <div className="text-right">

                    
                </div>


                <div className="container text-center mt-5">

                    <h2>take control of your music With premium</h2>
                    <p><button className="btn btn-premium submit mt-5 mb-3" >GET PREMIUM</button></p>

                    <p ><span className="terms">Terms and Conditions applied.</span><span ><span className="terms-link" >Learn more</span></span></p>
                    <hr className="devider my-5" />
                    <div className="my-5">
                        <h4 className="my-5">Here's What you get:</h4>
                        <div className="row" >
                            <div className="col-sm-6 col-lg-3">
                                <img alt='xzczx' src={circle} className="feature" />
                                <h4>Listen without ads</h4>
                                <p>Enjoy nonstop music.
                </p>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                <img alt='czx' src={circle} className="feature" />
                                <h4>Play any song</h4>
                                <p>Even on mobile.
                </p>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                <img alt='xczx' src={circle} className="feature" />
                                <h4>Unlimited skips</h4>
                                <p>Just hit next.
                </p>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                <img alt='xzcz' src={circle} className="feature" />
                                <h4>High quality audio</h4>
                                <p>3x better sound quality
                </p>
                            </div>

                        </div>
                    </div>
                </div>
                
            </div>

        )
    }
}

export default GetPremium;
