import React from 'react';
import './Payment.css';
import { CardElement, injectStripe } from 'react-stripe-elements';
import * as loginService from '../../services/loginService';
import PaymentModel from '../../Model/paymentModel';
import { NotificationContainer, NotificationManager } from 'react-notifications';

// import { concatAll } from 'rxjs-compat/operator/concatAll';

// import { Observable } from 'rxjs/Rx';

class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loader_value: new PaymentModel(),

    }

  }




  submit() {
    this.state.loader_value.errormsg = ''
    this.props.setLoader(true);
    var get_token = localStorage.getItem('token')
    if (this.props.stripe) {
      this.props.stripe.createToken()
        .then((payload) => {
          if (payload.error) {
            NotificationManager.error(payload.error.message);
            this.props.setLoader(false, null);
            return;
          }
          
          loginService.getPayment({ id: payload.token.id, token: get_token }).then((res) => {
            this.props.setLoader(false, null);
            this.props.history.push('/success')
            this.setState({ showPopup: true })

          }).catch((error) => {
            // this.state.loader_value.errormsg = error.response.data.error;            
            //       this.setState({loader_value: this.state.loader_value});
            // this.setState({ error: error });
            this.props.setLoader(false, error.response.data.error);
            NotificationManager.error(error.response.data.error);
          })
        }

        )
    } else {
      console.log("Stripe.js hasn't loaded yet.");
    }

  }



  render() {
    return (



      // <div>
      //     <form  className="checkout form-group">
      //           <p>Would you like to complete the purchase?</p>
      //     <CardElement />
      //     <button className="submit my-3" onClick={this.submit.bind(this)} >Pay</button>

      //   </form>
      //     <NotificationContainer/>
      //     </div>

      <div>
        
        <div className="checkout form-group">
          <p>Would you like to complete the purchase?</p>
          <CardElement />
          <button className="submit my-3" onClick={this.submit.bind(this)}>Pay</button>

        </div>
        <NotificationContainer />
      </div>
    );
  }
}
export default injectStripe(Payment);