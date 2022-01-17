import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51KIm1OK268r9eAkBxDeGVZRWPleLHLdeZ1sz5NWZLWi8hrZR3loWRbbyKSx34sfpnxhjeiUp2gQT8N7NwNCwADCD00MjyqqNA4';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
    <StripeCheckout
        label='Pay Now'
        name='CRWN Clothing Ltd.'
        billingAddress
        shippingAddress
        allowRememberMe
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total price is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
    />
    );
}

export default StripeCheckoutButton;