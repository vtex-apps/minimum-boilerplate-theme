/* eslint-disable prettier/prettier */
/* eslint-disable vtex/prefer-early-return */
/* eslint-disable no-console */
/* eslint-disable func-names */
/* eslint-disable max-params */
const { _locale } = require('./_locale-infos.js')
const { _countries,_countriesrules, _cities, _addressPlaceholder } = require('./_countries.js')
const { getShipStateValue } = require('./_utils')

// temporaly workaorund
window.callbackMap = () => {
  window.vtexjs.checkout.getOrderForm(orderForm => {
    if (
      window.vcustom &&
      window.vcustom.checkout &&
      window.vcustom.customAddressFormInit
    )
      window.vcustom.checkout.customAddressFormInit(orderForm)
  })
}

// end temporaly workaorund

class fnsCustomAddressForm {
  constructor({ active = false } = {}) {
    this.BodyFormClasses = ['v-custom-addressForm-on', 'v-custom-googleForm-on']
    this.active = active
    this.googleMapsApiKey = window.vtex.googleMapsApiKey
    this.orderForm = ''
    this.classOn = 'v-custom-fnsCustomAddressForm'
    this.deliveryCountries = ''
    this.mainCountry = ''
    this.lang = ''
    this.isPickupPoint = false
    this.locale = ''

    this.address = {
      country: '',
      postalCode: '',
      city: '',
      state: '',
      street: '',
      complement: '',
      addressQuery: '',
      addressId: '',
      geoCoordinates: [],
    }

    this.validate = true

    this.gPlacesAutocomplete = ''

    this.firstAttempt = false
  }

  loadScript() {
    $('body').append(
      `<script src="https://maps.googleapis.com/maps/api/js?key=${this.googleMapsApiKey}&language=${window.vtex.i18n.locale}&libraries=places&callback=callbackMap"></script>`
    )
  }

  messageTrigger(_message) {
    const message = {
      content: {
        title: '',
        detail: _message,
      },
      type: 'warning',
    }

    $(window).trigger('addMessage', message)
  }

  updateAddress(
    country = '',
    postalCode = '',
    city = '',
    state = '',
    street = '',
    number = null,
    complement = '',
    addressQuery = '',
    addressId = '',
    geoCoordinates = ''
  ) {
    this.address = {
      country,
      postalCode,
      addressId,
      city,
      state,
      geoCoordinates,
      street,
      number,
      complement,
      addressQuery,
    }

    if (country === '') {
      this.setForm('')
    }
  }

  setForm(
    country = '',
    street = '',
    formattedStreet = '',
    number = '',
    postalCode = '',
    city = '',
    state = '',
    complement = '',
    neighborhood = '',
    geoCoordinates = ''
  ) {
    const _this = this

    $('.vcustom--vtex-omnishipping-1-x-address #v-custom-ship-street').val(
      'number' in _this.addressrules &&
        _this.addressrules.number &&
        _this.addressrules.number.required
        ? street
        : formattedStreet || street
    )

    $('.vcustom--vtex-omnishipping-1-x-address #ship-complement').val(
      complement
    )
    $('.vcustom--vtex-omnishipping-1-x-address #ship-number').val(number)
    $('.vcustom--vtex-omnishipping-1-x-address #ship-city').val(city)
    $('.vcustom--vtex-omnishipping-1-x-address #ship-postalCode').val(
      postalCode
    )
    $('.vcustom--vtex-omnishipping-1-x-address #v-custom-ship-street').attr(
      'data-street',
      'number' in _this.addressrules &&
        _this.addressrules.number &&
        _this.addressrules.number.required
        ? street
        : formattedStreet || street
    )
    $('.vcustom--vtex-omnishipping-1-x-address #v-custom-ship-street').attr(
      'data-number',
      'number' in _this.addressrules &&
        _this.addressrules.number &&
        _this.addressrules.number.required
        ? number
        : null
    )
    $('.vcustom--vtex-omnishipping-1-x-address #v-custom-ship-street').attr(
      'data-neighborhood',
      neighborhood
    )
    $('.vcustom--vtex-omnishipping-1-x-address #v-custom-ship-street').attr(
      'data-geocoordinates',
      geoCoordinates
    )

    $('.vcustom--vtex-omnishipping-1-x-address #v-custom-ship-country').attr(
      'data-country',
      country
    )

    $('.vcustom--vtex-omnishipping-1-x-address #ship-state').val(
      getShipStateValue(state) || ''
    )
  }

  updateGoogleForm(countryCode = 'usa') {
    const _this = this
    const labels = [
      {
        default: 'Street address',
        prop: 'address1Placeholder',
        element: $('label#address1-label'),
      },
      { default: 'Number', prop: 'number', element: $('label#number-label') },
      {
        default: 'Complements',
        prop: 'address2Placeholder',
        element: $('label#address2-label'),
      },
      { default: 'City', prop: 'city', element: $('label#city-label') },
      { default: 'State', prop: 'state', element: $('label#state-label') },
      {
        default: 'Country',
        prop: 'country',
        element: $('label#country-label'),
      },
      {
        default: 'Postal Code',
        prop: 'postalCode',
        element: $('label#postalCode-label'),
      },
    ]

    _this._locale = _locale[countryCode.toUpperCase()] || _locale.USA

    for (let i = 0; i < labels.length; i++) {
      const label = labels[i]

      label.element.text(_this._locale[label.prop] || label.default)
    }

    $('input#v-custom-ship-street').attr(
      'placeholder',
      _addressPlaceholder[countryCode.toUpperCase()]
        ? _addressPlaceholder[countryCode.toUpperCase()]
        : ''
    )
    this.gPlacesAutocomplete.setComponentRestrictions({
      country: [countryCode],
    })
  }

  returnAddressFRules(components, attrs) {
    if (!attrs) return ''
    const { valueIn = 'short_name', types } = attrs

    for (let i = 0; i < types.length; i++) {
      const ruleComponent = types[i]

      if (
        components.find(component =>
          component.types.some(v => v === ruleComponent)
        )
      ) {
        return components.find(component =>
          component.types.some(v => v === ruleComponent)
        )[valueIn]
      }
    }

    return ''
  }

  googleForm() {
    const _this = this
    const input = document.getElementById('v-custom-ship-street')
    const geocodeClient = new window.google.maps.Geocoder()

    _this.gPlacesAutocomplete = new window.google.maps.places.Autocomplete(
      input
    )

    _this.gPlacesAutocomplete.addListener('place_changed', function () {
      const place = _this.gPlacesAutocomplete.getPlace()

      geocodeClient.geocode({ address: place.formatted_address })

      if (~window.location.host.indexOf('myvtex')) {
        console.log(place)
      }

      const [, country] = _countries.find(
        c =>
          c[0] ===
          place.address_components.filter(
            item => item.types[0] === 'country'
          )[0].short_name
      )

      const street = place.address_components.find(
        item => item.types[0] === 'route'
      )
        ? place.address_components.find(item => item.types[0] === 'route')
            .long_name
        : place.vicinity

      let state = _this.returnAddressFRules(
        place.address_components,
        _this.addressrules.state
      )

      const neighborhood = _this.addressrules.neighborhood
        ? _this.returnAddressFRules(
            place.address_components,
            _this.addressrules.neighborhood
          )
        : ''

      if (
        'number' in _this.addressrules &&
        _this.addressrules.number &&
        _this.addressrules.number.required
      ) {
        $('.vcustom--vtex-omnishipping-1-x-address #ship-number').val(
          _this.returnAddressFRules(place.address_components, {
            types: ['street_number'],
          })
        )
      }

      const number =
        'number' in _this.addressrules &&
        _this.addressrules.number &&
        _this.addressrules.number.required
          ? $('.vcustom--vtex-omnishipping-1-x-address #ship-number').val()
          : _this.returnAddressFRules(place.address_components, {
              types: ['street_number'],
            })

      const complement = _this.addressrules.complement
        ? _this.returnAddressFRules(place.address_components, {
            types: ['subpremise'],
          })
        : $('.vcustom--vtex-omnishipping-1-x-address #ship-complement').val()

      const geoCoordinates = [
        place.geometry.location.lng(),
        place.geometry.location.lat(),
      ]

      const formattedAddress = $('<div></div>')

      formattedAddress.html(place.adr_address)
      let formattedStreet = $('.street-address', formattedAddress).text()

      let city =
        _this.returnAddressFRules(
          place.address_components,
          _this.addressrules.city
        ) || $('.locality', formattedAddress).text()

      let postalCode = _this.addressrules.postalCode
        ? _this.returnAddressFRules(place.address_components, {
            types: ['postal_code'],
          })
        : '00000'

      // temporaly workaround for ARG

      if (country === 'ARG') {
        formattedStreet = street
        postalCode = postalCode.replace(/\D/gi, '')
        if (state === 'Provincia de Buenos Aires') state = 'Buenos Aires'
        if (state.toUpperCase() === 'CABA') {
          state = 'Ciudad Autónoma de Buenos Aires'
          city = 'Ciudad Autónoma de Buenos Aires'
        }
      }

      _this.setForm(
        country,
        street,
        formattedStreet,
        number,
        postalCode,
        city,
        state,
        complement,
        neighborhood,
        geoCoordinates
      )
      _this.validateAllFields()
      _this.updateAddress(
        country,
        postalCode,
        city,
        state,
        street,
        number,
        complement,
        place.formatted_address,
        _this.address.addressId,
        geoCoordinates
      )
    })

    $('body').on('keyup', '#v-custom-ship-street', function () {
      $(this).attr('autocomplete', 'none')
      $(this).attr('data-number', '')
      $(this).attr('data-street', $(this).context.value)
    })

    $('body').on('focus', '#v-custom-ship-street', function () {
      $(this).attr('autocomplete', 'none')
    })
  }

  triggerAddressValidation() {
    window.store.dispatch({
      type: 'DISABLE_CALCULATE_BUTTON',
      isCalculateBttnEnabled: false,
    })
  }

  receiverNameF() {
    const _this = this

    if (
      _this.orderForm.clientProfileData &&
      _this.orderForm.clientProfileData.firstName &&
      _this.orderForm.clientProfileData.lastName &&
      !~window.vtexjs.checkout.orderForm.clientProfileData.firstName.indexOf(
        '*'
      )
    ) {
      return `${_this.orderForm.clientProfileData.firstName} ${
        _this.orderForm.clientProfileData.lastName
          ? _this.orderForm.clientProfileData.lastName
          : ''
      }`
    }

    return ''
  }

  geti18n() {
    const _this = this

    const { locale } = _this.orderForm.clientPreferencesData
    const _lang = window.vtex.i18n[locale]

    const lang = _lang || window.vtex.i18n[locale.split(`-`)[0]]

    if (!lang) window.vtex.i18n.en

    return lang
  }

  sendAddress(
    _country,
    _street,
    _number,
    _state,
    _postalCode,
    _city,
    _complement,
    _addressQuery,
    _addressId,
    _neighborhood,
    geoCoordinates
  ) {
    const _this = this

    if (~geoCoordinates.indexOf(',')) {
      const [lat, lng] = geoCoordinates.split(',')

      geoCoordinates = [parseFloat(lat), parseFloat(lng)]

      // temporaly workaround for ARG_country === 'MLT'
      if (_country === 'ARG' && _city.toUpperCase() === 'CABA') {
        _city = 'Ciudad Autónoma de Buenos Aires'
      }
      // end temporaly workaround for ARG

      // temporaly workaround for MLT
      if (_country === 'MLT') {
        _state = null
        _postalCode = null
      }
      // end temporaly workaround for MLT

      // temporaly workaround for USA and CAN
      if (
        _country === 'USA' ||
        _country === 'ITA' ||
        _country === 'CAN'
      ) {
        _number = null
      }
      // end temporaly workaround for USA

      // if (!_this.addressrules.state) {
      //   _state = ''
      // }
    } else {
      geoCoordinates = []
    }

    $('body').addClass('js-v-custom-is-loading')

    const shippingInfo = {
      selectedAddresses: [
        {
          addressType: 'residential',
          receiverName: _this.receiverNameF(),
          isDisposable: false,
          postalCode: _postalCode,
          city: _city,
          state: _state,
          country: _country,
          street: _street,
          number: _number || '',
          neighborhood: _neighborhood,
          complement: _complement,
          reference: null,
          geoCoordinates: geoCoordinates || [],
          addressQuery: _addressQuery,
        },
      ],
      clearAddressIfPostalCodeNotFound: false,
    }

    window.vtexjs.checkout
      .sendAttachment('shippingData', {})
      .done(function () {
        $(window).trigger('VCUSTOM__ADDRESSFORM__CLEARED')

        $('button.vtex-front-messages-close-all.close').trigger('click')
        $('.vtex-omnishipping-1-x-warning').hide()
        $('.alert-noStreet').hide()
        $(
          '.shp-alert.vtex-omnishipping-1-x-alert.shp-alert-shipping-unavailable.vtex-omnishipping-1-x-alertPickup, .button-unavailable-delivery-pickup-wrapper'
        ).hide()
        _this.firstAttempt = true

        window.vtexjs.checkout
          .sendAttachment('shippingData', shippingInfo)
          .done(function (orderForm) {
            if (
              orderForm.error ||
              !orderForm.shippingData.address ||
              orderForm.items.filter(
                item => item.availability == 'cannotBeDelivered'
              ).length == orderForm.items.length
            ) {
              // eslint-disable-next-line no-alert
              $(
                '.vtex-omnishipping-1-x-warning, .step.shipping-data .box-step'
              ).show()
              $('body')
                .addClass(_this.BodyFormClasses.join(' '))
                .removeClass(
                  'js-v-custom-is-loading js-v-custom-is-loadAddress'
                )
              if (orderForm.error && orderForm.error.message)
                // eslint-disable-next-line no-alert
                alert(
                  `Something went wrong: ${
                    orderForm.error ? orderForm.error.message : 'null address'
                  }`
                )

              if (
                orderForm.items.filter(
                  item => item.availability == 'cannotBeDelivered'
                ).length == orderForm.items.length
              ) {
                _this.messageTrigger(
                  _this.geti18n().cart.unavailableForDelivery
                )
              }
            } else {
              _this.updateAddress(
                _country,
                _postalCode,
                _city,
                _state,
                _street,
                _number,
                _complement,
                '',
                _addressQuery || '',
                _addressId || '',
                geoCoordinates || []
              )
              $('body')
                .removeClass(_this.BodyFormClasses.join(' '))
                .removeClass('js-v-custom-is-loading')
              _this.orderForm = orderForm
              _this.triggerAddressValidation()
              $(window).trigger('VCUSTOM__ADDRESSFORM__UPDATED')
            }
          })
          .fail(function (error) {
            _this.orderForm = window.vtexjs.checkout.orderForm
            $('body').removeClass(
              'js-v-custom-is-loading js-v-custom-is-loadAddress'
            )
            console.error(
              `Something went wrong: Custom Address Form (sendAddress) --> ${error}`
            )
          })
      })
      .fail(function (error) {
        _this.orderForm = window.vtexjs.checkout.orderForm
        $('body').removeClass(
          'js-v-custom-is-loading js-v-custom-is-loadAddress'
        )
        console.error(
          `Something went wrong: Custom Address Form (sendAddress) --> ${error}`
        )
      })
  }

  getRegions(country) {
    const countryRegions = _cities.find(
      city => city.countryShortCode === country
    )

    return countryRegions.regions.map(i => {
      return `<option value="${i.shortCode},${i.name}">${i.name}</option>`
    })
  }

  getCountries() {
    const _this = this

    /* eslint eqeqeq: 0 */
    if (
      _this.deliveryCountries == ['BRA'] ||
      _this.deliveryCountries == 'BRA'
    ) {
      _this.deliveryCountries =
        window.vtexjs.checkout.orderForm.shippingData.logisticsInfo[0].shipsTo
    }

    return _this.deliveryCountries.map(countryCode => {
      const _i18n = window.vtex.i18n[_this.lang]
        ? window.vtex.i18n[_this.lang]
        : window.vtex.i18n[window.vtex.i18n.locale]

      let ret = ''

      if (_i18n.countries[countryCode]) {
        ret = `<option value="${countryCode}" ${
          countryCode === _this.mainCountry ? 'selected' : ''
        }>${_i18n.countries[countryCode]}</option>`
      }

      return ret
    })
  }

  updateFormFieldByCountry(addressrules) {
    const number = $('.vcustom--vtex-omnishipping-1-x-address p.ship-number')
    const state = $('.vcustom--vtex-omnishipping-1-x-address p.ship-state')

    if (
      'number' in addressrules &&
      addressrules.number &&
      addressrules.number.required
    ) {
      number.show()
      number.find('input').attr('required', 'required')
    } else {
      number.hide()
      number.find('input').removeAttr('required')
    }

    if (addressrules.state) {
      state.show()
      state.find('select').attr('required', 'required')
    } else {
      state.hide()
      state.find('select').removeAttr('required')
    }
  }

  form(orderForm) {
    const _this = this

    const { shippingData } = orderForm

    const country = _countries.find(c => c[1] === _this.mainCountry)

    const { isPickupPoint } = this

    const form = `
      <div class="vcustom--vtex-omnishipping-1-x-address step">
        <div>
        <form>
            <p class="input v-custom-ship-street required text"><label id="address1-label" for="v-custom-ship-street">${
              _this.locale
                ? _this.locale.address1Placeholder ||
                  'Street address or P.O. Box'
                : 'Street address or P.O. Box'
            }</label><input required autocomplete="none" id="v-custom-ship-street" type="text" name="v-custom-street" class="input-xlarge" data-hj-whitelist="true" value="${
      shippingData.address &&
      null !== shippingData.address.street &&
      !isPickupPoint
        ? shippingData.address.street
        : ''
    }" placeholder="Eg: 225 East 41st Street, New York"><span class="help error" style="">${
      _this.locale.requiredField
        ? _this.locale.requiredField
        : 'This field is required.'
    }</span></p>
            <div class="v-custom-ship-info">
              <p class="input ship-number text ${
                'number' in _this.addressrules &&
                _this.addressrules.number &&
                _this.addressrules.number.required
                  ? 'required'
                  : 'hide'
              }"><label id="number-label" for="ship-complement">${
      _this.locale.number ? _this.locale.number || 'Number' : 'Number'
    }</label><input ${
      'number' in _this.addressrules &&
      _this.addressrules.number &&
      _this.addressrules.number.required
        ? 'required'
        : ''
    } autocomplete="on" id="ship-number" type="text" name="v-custom-number" maxlength="20" placeholder="${
      _this.locale.number ? _this.locale.number : ''
    }" class="input-xlarge" data-hj-whitelist="true" value="${
      shippingData.address &&
      shippingData.address.number !== null &&
      !isPickupPoint
        ? shippingData.address.number
        : ''
    }"><span class="help error" style="">${
      _this.locale ? _this.locale.requiredField : 'This field is required.'
    }</span></p>
              <p class="input ship-complement text"><label id="address2-label" for="ship-complement">${
                _this.locale
                  ? _this.locale.address2Placeholder ||
                    'Apartment number, unit, floor, etc.'
                  : 'Apartment number, unit, floor, etc.'
              }</label><input autocomplete="on" id="ship-complement" type="text" name="v-custom-complement" maxlength="750" placeholder="${
      _this.locale.address2Placeholder ? _this.locale.address2Placeholder : ''
    }" class="input-xlarge" data-hj-whitelist="true" value="${
      shippingData.address &&
      shippingData.address.complement !== null &&
      !isPickupPoint
        ? shippingData.address.complement
        : ''
    }"></p>
            </div>
            <div class="vcustom--vtex-omnishipping-1-x-address__state">
              <p class="input ship-country text ${
                _this.deliveryCountries.length <= 1 ? 'hide' : ''
              } "><label id="country-label" for="ship-country">Country</label><select name="v-custom-country" id="ship-country" class="input-large">${_this
      .getCountries()
      .join('')}</select></p>
              <p class="input ship-city required text"><label id="city-label" for="ship-city">${
                _this.locale ? _this.locale.city || 'City' : 'City'
              }</label><input required autocomplete="on" id="ship-city" type="text" name="v-custom-city" maxlength="100" class="input-large" data-hj-whitelist="true" value="${
      shippingData.address &&
      shippingData.address.city !== null &&
      !isPickupPoint
        ? shippingData.address.city
        : ''
    }"><span class="help error" style="">${
      _this.locale.requiredField
        ? _this.locale.requiredField
        : 'This field is required.'
    }</span></p>
              <p class="input ship-state required text"><label id="state-label" for="ship-state">${
                _this.locale ? _this.locale.state || 'State' : 'State'
              }</label>
                  <select name="v-custom-state" id="ship-state" class="input-large" ${
                    _this.addressrules.state ? 'required' : ''
                  }>
                    <option value="" disabled selected>${
                      _this.locale ? _this.locale.state : 'State'
                    }</option>
                    ${_this.getRegions(country[0]).join('')}
                  </select>
                  <span class="help error" style="">${
                    _this.locale.requiredField
                      ? _this.locale.requiredField
                      : 'This field is required.'
                  }</span>
              </p>
              <p class="input ship-postalCode required text"><label id="postalCode-label" for="ship-postalCode">${
                window.vtex.i18n[_this.lang]
                  ? window.vtex.i18n[_this.lang].cart.postalCode
                  : 'Zip Code'
              }</label><input required autocomplete="on" id="ship-postalCode" type="text" name="receiver" maxlength="${
      _this.addressrules.postalCodeLength
        ? _this.addressrules.postalCodeLength
        : '20'
    }" class="input-xlarge" data-hj-whitelist="true" value="${
      shippingData.address && !isPickupPoint
        ? shippingData.address.postalCode
        : ''
    }"><span class="help error" style="">${
      _this.locale.requiredField
        ? _this.locale.requiredField
        : 'This field is required.'
    }</span></p>
            </div>
            <p class="vtex-omnishipping-1-x-submitShippingStepButton btn-submit-wrapper btn-go-to-shipping-wrapper"><button class="submit  btn-go-to-shippping-method btn btn-large btn-success" id="btn-go-to-shippping-method" type="button">${
              _this.locale.goToShipping
                ? _this.locale.goToShipping
                : 'Continue to shipping'
            }</button></p>
        </form>
        </div>
      </div>
    `

    if (shippingData.address && !isPickupPoint) {
      $('.vcustom--vtex-omnishipping-1-x-address #ship-state').val(
        getShipStateValue(shippingData.address.state)
      )
    }

    if (
      $('.vcustom--vtex-omnishipping-1-x-address.step').length == 0 &&
      shippingData.logisticsInfo[0].selectedDeliveryChannel !==
        'pickup-in-point' &&
      window.location.href.indexOf('shipping') !== -1
    ) {
      $('.orderform-template-holder #shipping-data').append(form)
    }

    if (
      $('#shipping-option-pickup-in-point').hasClass(
        'vtex-omnishipping-1-x-deliveryOptionActive'
      )
    ) {
      $('body').removeClass('v-custom-addressForm-on')
    }

    this.googleForm()
    this.updateGoogleForm(country[1].toLowerCase())

    // sort countries
    const sel = $('.vcustom--vtex-omnishipping-1-x-address #ship-country')
    const selected = sel.val() // cache selected value, before reordering
    const optsList = sel.find('option')

    optsList.sort(function (a, b) {
      return $(a).text() > $(b).text() ? 1 : -1
    })
    sel.html('').append(optsList)
    sel.val(selected) // set cached selected value

    shippingData.address && shippingData.address.addressType === 'search'
      ? (this.isPickupPoint = true)
      : (this.isPickupPoint = false)
  }

  validateAllFields() {
    const _this = this

    _this.validate = true
    $(
      '.vcustom--vtex-omnishipping-1-x-address input:required, .vcustom--vtex-omnishipping-1-x-address select:required'
    ).each(function () {
      if (this.value === '') {
        $(this).addClass('error')
        _this.validate = false
      } else {
        $(this).removeClass('error')
      }
    })
  }

  scrollToAddress() {
    const doc = document.documentElement
    const scrollTop =
      (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0)

    const posSPtop = $('#shipping-data').offset().top

    if (scrollTop > posSPtop) window.scrollTo(0, posSPtop)
  }

  submitAddressForm() {
    const _this = this

    _this.validateAllFields()

    if (!_this.validate) return

    const _st = $(
      '.vcustom--vtex-omnishipping-1-x-address #v-custom-ship-street'
    )

    const country = $(
      '.vcustom--vtex-omnishipping-1-x-address #ship-country'
    ).val()

    const street = _st.attr('data-street') || ''
    const number = $(
      '.vcustom--vtex-omnishipping-1-x-address #ship-number'
    ).val()
      ? $('.vcustom--vtex-omnishipping-1-x-address #ship-number').val()
      : _st.attr('data-number') || ''

    const geoCoordinates = _st.attr('data-geocoordinates') || []
    const neighborhood = _st.attr('data-neighborhood') || null
    const complement = $(
      '.vcustom--vtex-omnishipping-1-x-address #ship-complement'
    ).val()

    const city = $('.vcustom--vtex-omnishipping-1-x-address #ship-city').val()
    const [stateShortCode, stateName] = $(
      '.vcustom--vtex-omnishipping-1-x-address #ship-state'
    )
      .val()
      .split(',')

    const state = stateShortCode || stateName

    const postalCode = $(
      '.vcustom--vtex-omnishipping-1-x-address #ship-postalCode'
    ).val()

    _this.sendAddress(
      country,
      street,
      number,
      state,
      postalCode,
      city,
      complement,
      _this.address.addressQuery,
      _this.address.addressId,
      neighborhood,
      geoCoordinates
    )
  }

  updateFormByCountry(countryCode) {
    if (~window.location.host.indexOf('myvtex')) {
      console.log('countryCode:', countryCode)
    }

    const _this = this
    const country = _countries.find(c => c[1] === countryCode)
    const state = _this.address.state || null

    _this.getCountryRule(country[1]).then(rules => {
      _this.addressrules = rules
      _this.updateFormFieldByCountry(_this.addressrules)
      $("select[name='v-custom-state']").html(
        `${_this.getRegions(country[0]).join('')}`
      )
      if (state && getShipStateValue(state)) {
        $('.vcustom--vtex-omnishipping-1-x-address #ship-state').val(
          getShipStateValue(state)
        )
      }

      _this.updateGoogleForm(countryCode.toLowerCase())
    })
  }

  bind() {
    const _this = this

    $('body').on(
      'click',
      '.step.shipping-data .vtex-omnishipping-1-x-buttonEditAddress, .step.shipping-data .vtex-omnishipping-1-x-linkEdit',
      function () {
        if (
          !$('#shipping-option-pickup-in-point').hasClass(
            'vtex-omnishipping-1-x-deliveryOptionActive'
          )
        ) {
          const indexAddress = $(
            '.vtex-omnishipping-1-x-addressItemOption.vtex-omnishipping-1-x-active'
          ).index()

          let addressClicked = _this.orderForm.shippingData.availableAddresses.find(
            address => {
              return (
                address.addressId ==
                _this.orderForm.shippingData.address.addressId
              )
            }
          )

          if (!addressClicked) {
            if (indexAddress < 0) {
              addressClicked = addressClicked.selectedAddresses[0]
            } else {
              addressClicked = addressClicked.availableAddresses[indexAddress]
            }
          }

          if (
            addressClicked &&
            addressClicked.city &&
            addressClicked.city.indexOf('*') < 0
          ) {
            try {
              $('body').addClass(_this.BodyFormClasses.join(' '))
              if (
                addressClicked.isDisposable ||
                ~window.location.origin.indexOf('myvtex')
              ) {
                setTimeout(() => {
                  let countryClicked = _this.deliveryCountries.filter(
                    country => country == addressClicked.country
                  )

                  countryClicked = countryClicked.length
                    ? countryClicked[0]
                    : _this.deliveryCountries[0]

                  addressClicked.street = addressClicked.street || ''
                  _this.updateAddress(
                    countryClicked,
                    addressClicked.postalCode,
                    addressClicked.city,
                    addressClicked.state,
                    addressClicked.number,
                    addressClicked.street,
                    addressClicked.complement,
                    '',
                    addressClicked.addressId,
                    addressClicked.geoCoordinates
                  )

                  $(
                    '.vcustom--vtex-omnishipping-1-x-address #ship-country'
                  ).val(countryClicked)
                  _this.updateFormByCountry(countryClicked)
                  _this.setForm(
                    countryClicked,
                    addressClicked.street,
                    addressClicked.addressQuery,
                    addressClicked.number,
                    addressClicked.postalCode,
                    addressClicked.city,
                    addressClicked.state,
                    addressClicked.complement,
                    addressClicked.neighborhood,
                    addressClicked.geoCoordinates
                  )

                  _this.triggerAddressValidation()
                }, 100)
              }
            } catch (e) {
              $('body').removeClass(_this.BodyFormClasses.join(' '))
            }
          } else {
            $('body').removeClass(_this.BodyFormClasses.join(' '))
          }
        }
      }
    )

    $('body').on(
      'click',
      '.vtex-omnishipping-1-x-buttonCreateAddress, .vtex-omnishipping-1-x-disclaimer a#remove-unavailable-items',
      function () {
        if (
          !$('#shipping-option-pickup-in-point').hasClass(
            'vtex-omnishipping-1-x-deliveryOptionActive'
          )
        ) {
          $('body').addClass(_this.BodyFormClasses.join(' '))
          _this.address.addressId = ''
          _this.updateAddress('')
        }
      }
    )

    $('body').on('click', '#shipping-option-pickup-in-point', function () {
      $('body').removeClass(_this.BodyFormClasses.join(' '))
    })

    $('body').on(
      'click',
      '.vtex-omnishipping-1-x-backToAddressList',
      function () {
        $('body').removeClass(_this.BodyFormClasses.join(' '))
        _this.address.addressId = ''
      }
    )

    $('body').on(
      'click',
      '.vtex-omnishipping-1-x-addressItemOption',
      function () {
        _this.address.addressId = _this.orderForm.shippingData
          .availableAddresses[$(this).index()]
          ? _this.orderForm.shippingData.availableAddresses[$(this).index()]
              .addressId
          : ''
      }
    )

    $('body').on('change', "select[name='v-custom-country']", function (e) {
      e.stopImmediatePropagation()
      try {
        _this.updateFormByCountry(this.value)
        _this.updateAddress('')
      } catch (err) {
        console.error(`updateFormByCountry ${this.value} error:`, err)
      }
    })

    $('body').on('click', '#btn-go-to-shippping-method', function (e) {
      e.preventDefault()
      e.stopImmediatePropagation()
      _this.submitAddressForm()
      _this.scrollToAddress()
    })

    $('body').on(
      'keyup',
      '.vcustom--vtex-omnishipping-1-x-address input',
      function () {
        if (this.value !== '') {
          $(this).removeClass('error')
        }
      }
    )
  }

  checkFirstLogin(orderForm) {
    const _this = this

    if (orderForm && orderForm.shippingData) {
      if (
        (orderForm.shippingData.address === null ||
          orderForm.shippingData.address.addressType === 'search') &&
        !_this.firstAttempt &&
        $('.vtex-omnishipping-1-x-deliveryOptionActive').attr('id') ===
          'shipping-option-delivery'
      ) {
        $('body').addClass(_this.BodyFormClasses[0])
      }
    }
  }

  getCountryRule(country) {
    const _this = this

    return fetch(`/rules/${country}`)
      .then(res => res.json())
      .then(jsonRes => {
        const { data: rules, success } = jsonRes

        if(country=="MLT") {
          return _countriesrules.MLT
        }

        return success ? rules.geolocation : _this.getCountryRule('default')
      })
      .catch(error => {
        throw new Error(error)
      })
  }

  loadingAddress() {
    $(window).on('VCUSTOM__ADDRESSFORM__CLEARED', function () {
      console.log('VCUSTOM__ADDRESSFORM__CLEARED')
      $('body').addClass('js-v-custom-is-loadAddress')
    })

    $(window).on('VCUSTOM__ADDRESSFORM__UPDATED', function () {
      console.log('VCUSTOM__ADDRESSFORM__UPDATED')
      $('body').removeClass('js-v-custom-is-loadAddress')
    })
  }

  events() {
    const _this = this

    _this.loadingAddress()
    $(window).on('orderFormUpdated.vtex', function (evt, orderForm) {
      _this.orderForm = orderForm
      _this.checkFirstLogin(orderForm)
    })
  }

  init(orderForm) {
    const _this = this

    try {
      if (!window.google) _this.loadScript()
    } catch (e) {
      console.warn(
        `Error in customFormInit while loading "loadScript" function`
      )
    }

    if (
      orderForm &&
      window.google &&
      $('.vcustom--vtex-omnishipping-1-x-address').length < 1 &&
      orderForm.items.length
    ) {

      const lastCountry = _this.orderForm.shippingData?.address?.country || _this.orderForm.storePreferencesData.countryCode

      $('body').addClass(`${this.classOn}`)
      _this.orderForm = orderForm
      _this
        .getCountryRule(lastCountry)
        .then(rules => {
          _this.addressrules = rules
          _this.bind()
          _this.deliveryCountries = window.checkout.deliveryCountries()
          _this.mainCountry = window.checkout.countryCode()
          _this.lang = _this.orderForm.clientPreferencesData.locale

          _this.locale =
            _locale[_this.orderForm.storePreferencesData.countryCode] ||
            _locale.GBR

          if (_this.lang === 'es-AR') _this.lang = 'es'

          if (_this.orderForm && _this.orderForm.shippingData) {
            const shippingData = _this.orderForm.shippingData.address

            if (shippingData) {
              _this.updateAddress(
                shippingData.country,
                shippingData.postalCode,
                shippingData.city,
                shippingData.state,
                shippingData.street,
                shippingData.number,
                shippingData.complement,
                '',
                shippingData.addressId,
                shippingData.geoCoordinates
              )
            } else {
              _this.updateAddress('')
            }
          }

          _this.form(orderForm)
        })
    }
  }
}

module.exports = fnsCustomAddressForm
