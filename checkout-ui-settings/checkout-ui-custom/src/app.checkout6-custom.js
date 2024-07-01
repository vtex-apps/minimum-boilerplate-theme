const Debug = require('./_js/_debug.js')
const CheckoutCustom = require('./_js/_v.custom.checkout.ui.js')

window.vcustom = {
  checkout: new CheckoutCustom({
    type: '"{{type}}"', // ["vertical" , "horizontal"]
    accordionPayments: '{{accordionPayments}}',
    deliveryDateFormat: '{{deliveryDateFormat}}',
    quantityPriceCart: '{{showCartQuantityPrice}}',
    showNoteField: '{{showNoteField}}',
    customAddressForm: '{{customAddressForm}}',
    hideEmailStep: '{{hideEmailStep}}',
  }),
  debug: new Debug({
    dbg: false,
    logo: '',
  }),
}

window.vcustom.checkout.start()
