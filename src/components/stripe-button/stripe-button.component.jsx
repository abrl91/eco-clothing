import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_3KUrrfh8CEPcjdBf0PCRrAG400cHwwJa0w';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    };
    
    return (
        <StripeCheckout
            label='Pay Now'
            name='eco clothing'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;
