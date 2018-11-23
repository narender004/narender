import React, { Component } from 'react';
import './AlreadySubscribe.css';

class AlreadySubscribe extends Component {

    componentDidMount() {
        document.body.classList.add("bodySubscribe");
    }
    
    componentWillUnmount() {
        document.body.classList.remove("bodySubscribe");
    }
   
    render() {
        return (
            <div className="bodySubscribe">
            <div className="subscribe-body">
             <div className="p-3 subscribe-container ">
                <div className="container text-center"> 
                    <strong className="subscribed">You are already Subscribed</strong>   
                    <div><button className="back-button my-3 " ><i className="fas fa-arrow-left mx-3"></i>Back</button></div>
                </div>
                </div>
             </div>
            </div>

        )}

}

export default AlreadySubscribe;