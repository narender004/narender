import React, { Component } from 'react';
import './payment.css';

class PaymentSuccess extends Component {
    componentDidMount() {
        document.body.classList.add("bodySuccess");
    }
    
    componentWillUnmount() {
        document.body.classList.remove("bodySuccess");
    }
    render() {
        return (
            <div className="bodySuccess">
            <div className="subscribe-body">
             <div className="p-3 subscribe-container ">
                <div className="container text-center"> 
                    <strong className="subscribed">Payment Successful</strong>                      
                </div>
                </div>
             </div>
            </div>

        )}

}

export default PaymentSuccess;