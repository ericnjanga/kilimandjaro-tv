import React, { Component } from 'react'
// import PayPalButton from 'paypal-checkout'
import PaypalExpressBtn from 'react-paypal-express-checkout'
import { paypalClient, paypalEnv } from './../settings/paypal-configs'

class PaypalCheckout extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }


  onSuccess = (payment) => {
    console.group('onSuccess')
    // Congratulation, it came here means everything's fine!
    console.log("The payment was succeeded!", payment);
    // You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
    console.groupEnd()
  }

  onCancel = (data) => {
    console.group('onCancel')
    // User pressed "cancel" or close Paypal's popup!
    console.log('The payment was cancelled!', data);
    // You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
    console.groupEnd()
  }

  onError = (err) => {
    console.group('onError')
    // The main Paypal's script cannot be loaded or somethings block the loading of that script!
    console.log("Error!", err);
    // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
    // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
    console.groupEnd()
  }




  render() { 

    console.log('window = ', window)
    console.log('paypalCheckout = ', window.paypalCheckout)
    
    
 
    let currency = 'USD'; // or you can set this value from your props or state
    let total = 1; // same as above, this is the total amount (based on currency) to be paid by using Paypal express checkout
    // Document on Paypal's currency code: https://developer.paypal.com/docs/classic/api/currency_codes/


    return (
      <div className='shoppingCart'>
        <div>
          Paypal checkout!
        </div>
        <p>Buy <strong>Full Body Lobster Onesie - $24.99</strong> now!</p>

        {/* <PaypalExpressBtn client={client} currency={'USD'} total={1.00} /> */}

        <PaypalExpressBtn
          env={paypalEnv}
          client={paypalClient}
          currency={currency}
          total={total}
          onError={this.onError}
          onSuccess={this.onSuccess}
          onCancel={this.onCancel}
        />

        {/* <PayPalButton
          client={client}
          payment={this.payment}
          commit={true}
          onAuthorize={this.onAuthorize} /> */}
     
      </div>
    )
  }
}
 
export default PaypalCheckout


