import React from "react";
import StripeCheckout from "react-stripe-checkout";
// const priceForStripe = props.price * 100;
const publickey = "pk_test_WhW6zV8Ak0qjDjWVHHHDzHGx00JxsfwxGL";

const onToken = token => {
  console.log(token);
};

class StripeButton extends React.Component {
  render() {
    return (
      <StripeCheckout
        name="CRWN Clothing Limited"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF7lqrwghEjxmwIFi-lHw2KyMPGMWq5CjYHFea_nglzJrKbTjs&s" // the pop-in header image (default none)
        label="Pay now" // text inside the Stripe button
        amount={this.props.price * 100} // cents
        description={`Your Total is $${this.props.price}`}
        currency="USD"
        panelLabel="Pay Now"
        shippingAddress
        billingAddress
        token={onToken}
        stripeKey={publickey}
      />
    );
  }
}

export default StripeButton;
