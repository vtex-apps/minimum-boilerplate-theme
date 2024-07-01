const Debug = require('./_js/_debug.js')
const CheckoutCustom = require('./_js/_v.custom.checkout.ui.js')

window.vcustom = {
  checkout: new CheckoutCustom({
    type: 'vertical', // ["vertical" , "horizontal"]
    accordionPayments: true,
    deliveryDateFormat: false,
    quantityPriceCart: false,
    showNoteField: false,
    customAddressForm: true,
    hideEmailStep: true,
  }),
  debug: new Debug({
    dbg: false,
    logo: '',
  }),
}

window.vcustom.checkout.start()

// vcustom.debug.start();
