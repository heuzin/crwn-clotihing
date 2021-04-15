import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IbBegEyL7ZahbG7VkrL0K0knXZ1CtGA4vZRTexUhSFmHAMYr5k5gYjb8DCFxilZWdOQ7i0hlolSvU22cPbUKp8V00FlDKyVHy'
    
    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert('Payment successful')
        }).catch(error => {
            console.log('Payment error: ', JSON.parse(error));
            alert(
                'There was an issue with your payment. Please make sure you use the provided credit cart'
            );
        });
    };
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