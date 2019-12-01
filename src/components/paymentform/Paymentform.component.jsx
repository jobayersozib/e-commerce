import React from "react";
import { connect } from "react-redux";
import { StripeElements } from "../../stripe/stripe";

class Paymentform extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // Custom styling can be passed to options when creating an Element.
    var style = {
      base: {
        // Add your base input styles here. For example:
        fontSize: "16px",
        color: "#32325d"
      }
    };

    // Create an instance of the card Element.
    var card = StripeElements.create("card", { style: style });

    // Add an instance of the card Element into the `card-element` <div>.
    card.mount("#card-element");
  }
  render() {
    return (
      <div>
        <form action="/charge" method="post" id="payment-form">
          <div class="form-row">
            <label for="card-element">Credit or debit card</label>
            <div id="card-element"></div>

            <div id="card-errors" role="alert"></div>
          </div>

          <button>Submit Payment</button>
        </form>
      </div>
    );
  }
}

export default connect(null, null)(Paymentform);
