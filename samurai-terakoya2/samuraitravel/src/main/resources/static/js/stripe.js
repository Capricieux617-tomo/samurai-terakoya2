const stripe = Stripe('pk_test_51QIgjwDQ69lR6qbPACVOLmbs1rj0u8EyrtLWv63pDU8md0sGeBlOzolmXySoURYgJAHvZ8ocaQsuAmqaWZyCRtfP00C4yoxgtx');
const paymentButton = document.querySelector('#paymentButton');

paymentButton.addEventListener('click', () => {
  stripe.redirectToCheckout({
    sessionId: sessionId
  })
});
