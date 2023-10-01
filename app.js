import spx from 'spx'

spx.connect({
  annotate: false,
  targets: ['main', 'product-modal'],
  render: 'morph',
  hover: {
    trigger: 'href',
    threshold: 100
  },
  intersect: {
    rootMargin: '0px 0px 0px 0px',
    threshold: 0
  },
  proximity: {
    distance: 150,
    threshold: 100,
    throttle: 500
  }
}
)(function (session) {

  // The connect returns a callback function after
  // connection was established. Lets inspect the session:
  console.log(session);

  // You initialize third party JavaScript in this callback
  // It's the equivalent of DOMContentLoaded.

});
const main = document.querySelector('main');

spx.on('load', function (params) {
  // customElements.upgrade(document.documentElement);
  const fadeInAnimation = main.animate([
    { opacity: 0 },
    { opacity: 1 }
  ], {
    duration: 500, // Animation duration in milliseconds
    easing: 'ease', // Animation easing function
    fill: 'forwards' // Keep the final state of the animation
  });
});
spx.on('visit', function (event) {
  console.log('fetch', event)

  const main = document.querySelector('main');

  const fadeOutAnimation = main.animate([
    { opacity: 1 },
    { opacity: 0 }
  ], {
    duration: 500, // Animation duration in milliseconds
    easing: 'ease', // Animation easing function
    fill: 'forwards' // Keep the final state of the animation
  });
})
