import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IbBegEyL7ZahbG7VkrL0K0knXZ1CtGA4vZRTexUhSFmHAMYr5k5gYjb8DCFxilZWdOQ7i0hlolSvU22cPbUKp8V00FlDKyVHy'
    const onToken = token => {
        console.log(token)
        alert("Payment Succesfull")
    }
    return (
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothnig Ltd.'
            billingAddress
            shippingAddress
            description={`Your total price s $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;