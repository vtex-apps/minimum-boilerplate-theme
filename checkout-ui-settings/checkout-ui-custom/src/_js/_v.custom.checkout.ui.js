/* eslint-disable no-prototype-builtins */
/* eslint-disable vtex/prefer-early-return */
/* eslint-disable func-names */
const { _locale } = require('./_locale-infos.js')
const {
  debounce,
  formatCurrency,
  findClosestLang,
  parseDateBd,
} = require('./_utils.js')
const {
  _countriesrules,
  _countries,
  _cities,
  _addressPlaceholder,
} = require('./_countries.js')
const FnsCustomAddressForm = require('./_customAddressForm.js')

class checkoutCustom {
  constructor({
    type = 'vertical',
    accordionPayments = true,
    deliveryDateFormat = false,
    quantityPriceCart = false,
    showNoteField = false,
    customAddressForm = false,
    hideEmailStep = true,
  } = {}) {
    this.type = type // ["vertical"]
    this.orderForm = ''
    this.orderId = this.orderForm ? this.orderForm.orderFormId : ''
    this.lang = ''
    this.checkoutButton = null

    this.accordionPayments = accordionPayments
    this.deliveryDateFormat = deliveryDateFormat
    this.quantityPriceCart = quantityPriceCart
    this.showNoteField = showNoteField
    this.customAddressForm = customAddressForm
    this.hideEmailStep = hideEmailStep

    this._holidays = null
    this.countriesRules = _countriesrules
    this.countries = _countries
    this.cities = _cities
    this.addressPlaceholder = _addressPlaceholder
  }

  general() {
    if (!$('.custom-cart-template-wrap').length) {
      $('.cart-template.mini-cart .cart-fixed > *').wrapAll(
        '<div class="custom-cart-template-wrap">'
      )
    }

    $('.table.cart-items tbody tr.product-item').each(function () {
      if (!$(this).find('.v-custom-product-item-wrap').length) {
        $(this).find('> *').wrapAll(`<div class="v-custom-product-item-wrap">`)
      }
    })

    $('body').addClass('v-custom-loaded')
  }

  onDomMutation({ targetNode, callback, disconnectCondition = true }) {
    const observeDOM = (function () {
      const MutationObserver =
        window.MutationObserver || window.WebKitMutationObserver

      return function (obj, callback1) {
        if (!obj || obj.nodeType !== 1) return

        if (MutationObserver) {
          // define a new observer
          const mutationObserver = new MutationObserver(callback1)

          // have the observer observe foo for changes in children
          mutationObserver.observe(obj, {
            childList: true,
            subtree: true,
          })

          return mutationObserver
        }

        // browser support fallback
        if (window.addEventListener) {
          obj.addEventListener('DOMNodeInserted', callback1, false)
          obj.addEventListener('DOMNodeRemoved', callback1, false)
        }
      }
    })()

    const observer = new MutationObserver(function () {
      if (targetNode && disconnectCondition) {
        observer.disconnect()

        observeDOM(targetNode, () => callback())
      }
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    })
  }

  buildVertical() {
    $('body').addClass('body-cart-vertical')
    if ($('.cart-template .cart-links-bottom:eq(0)').length) {
      this.checkoutButton = $('.cart-template .cart-links-bottom:eq(0)')
    }

    if (this.checkoutButton) {
      this.checkoutButton.appendTo('.cart-template > .summary-template-holder')
    }
  }

  buildHorizontal() {}

  showDeliveryOptions() {
    $(
      '.cart-template .cart-more-options:eq(0), .cart-template .extensions-checkout-buttons-container'
    ).appendTo('.cart-template-holder')
  }

  builder() {
    const _this = this

    if (_this.type === 'vertical') {
      _this.buildVertical()
    } else if (_this.type === 'horizontal') {
      _this.buildHorizontal()
    } else {
      console.error('No `type` identified, check your code')
    }

    if (_this.showNoteField) {
      $('body').addClass('js-vcustom-showNoteField')
    }

    if (_this.hideEmailStep) {
      $('body').addClass('js-vcustom-hideEmailStep')
    }

    _this.showDeliveryOptions()
  }

  checkEmpty(items) {
    if (items.length === 0) {
      $('body').addClass('v-custom-cart-empty')
    } else {
      $('body').removeClass('v-custom-cart-empty')
    }
  }

  addEditButtoninLogin() {
    $('#v-custom-edit-login-data').remove()
    $('.client-pre-email h3.client-pre-email-h span').append(`
      <a id="v-custom-edit-login-data" class="link-box-edit btn btn-small" style="" title="${
        this.lang ? this.lang.editLabel : true
      }">
        <i class="icon-edit"></i>
        <i class="icon-spinner icon-spin icon-3x"></i>
      </a>
    `)
  }

  addStepsHeader() {
    if ($('.checkout-steps').length > 0 || !this.lang) return false

    const addStepsHeaderHtml = `
      <div class="checkout-steps">
        <div class="checkout-steps-wrap">
          <span class="checkout-steps_bar">
            <span class="checkout-steps_bar_inner"></span>
            <span class="checkout-steps_bar_inner-active"></span>
          </span>
          <div class="checkout-steps_items">
            <span class="checkout-steps_item checkout-steps_item_cart js-checkout-steps-item" data-url="/checkout/#/cart">
              <span class="text">${
                this.lang.checkoutStepsLabelCart || 'Cart'
              }</span>
            </span>
            <span class="checkout-steps_item checkout-steps_item_identification js-checkout-steps-item" data-url="/checkout/#/profile">
              <span class="text">${
                this.lang.checkoutStepsLabelIdentification || 'Identification'
              }</span>
            </span>
            <span class="checkout-steps_item checkout-steps_item_shipping js-checkout-steps-item" data-url="/checkout/#/shipping">
              <span class="text">${
                this.lang.checkoutStepsLabelShipping || 'Shipping'
              }</span>
            </span>
            <span class="checkout-steps_item checkout-steps_item_payment js-checkout-steps-item" data-url="/checkout/#/payment">
              <span class="text">${
                this.lang.checkoutStepsLabelPayment || 'Payment'
              }</span>
            </span>
            <span class="checkout-steps_item checkout-steps_item_confirmation js-checkout-steps-item">
              <span class="text">${
                this.lang.checkoutStepsLabelConfirmation || 'Confirmation'
              }</span>
            </span>
          </div>
        </div>
      </div>
    `

    if ($('header.main-header').length) {
      $('header.main-header .container').append(addStepsHeaderHtml)
    }
  }

  addAssemblies(orderForm) {
    try {
      $.each(orderForm.items, function (i) {
        const _item = this

        if (_item.assemblies.length > 0) {
          let _assembliesHtml = `<div class="v-custom-assemblies">`

          $.each(_item.assemblies, function () {
            const _assemblies = this

            const inptValues = _assemblies.inputValues

            _assembliesHtml += `<p>${_assemblies.id}</p>`
            _assembliesHtml += `<ul class="v-custom-assemblies__values">`
            Object.entries(inptValues).forEach(([key, val]) => {
              _assembliesHtml += `<li class="v-custom-assemblies__values__item assembly-${key
                .toLowerCase()
                .replace(/ /g, '-')}">
                                      <strong>${key}</strong>
                                      <span>${val.trim()}</span>
                                    </li>`
            })
            _assembliesHtml += `</ul>`
          })
          _assembliesHtml += `</div>`
          if (
            !$(`.table.cart-items tbody > tr.product-item:eq(${i})`).hasClass(
              'v-custom-assemblies-in'
            )
          ) {
            $(`.table.cart-items tbody > tr.product-item:eq(${i})`)
              .addClass('v-custom-assemblies-in')
              .find('td.product-name')
              .append(_assembliesHtml)
          }
        }
      })
    } catch (e) {
      console.error('addAssemblies error:', e)
    }
  }

  bundleItems(orderForm) {
    try {
      $.each(orderForm.items, function (i) {
        if (this.bundleItems.length > 0) {
          $(`.table.cart-items tbody > tr.product-item:eq(${i})`)
            .addClass('v-custom-bundles-in')
            .find('td.product-name')
        } else {
          $(`.table.cart-items tbody > tr.product-item:eq(${i})`).removeClass(
            'v-custom-bundles-in'
          )
        }
      })
      $('.table.cart-items tbody tr.item-service').each(function () {
        if ($(this).find('.v-custom-trservice-wrap').length > 0) return false
        $(this).find('> *').wrapAll(`<div class="v-custom-trservice-wrap">`)
      })
    } catch (e) {
      console.error('bundleItems error:', e)
    }
  }

  showCustomMsgCoupon(orderForm) {
    const _this = this
    const _coupon = orderForm.marketingData.coupon

    const couponItemsCount = orderForm.items.reduce(function (
      accumulator,
      item
    ) {
      return (
        accumulator +
        (item.priceTags.length
          ? item.priceTags.filter(_pricetag => {
              return _pricetag.ratesAndBenefitsIdentifier
                ? _pricetag.ratesAndBenefitsIdentifier.matchedParameters[
                    'couponCode@Marketing'
                  ] === _coupon
                : 0
            }).length
          : 0)
      )
    },
    0)

    // Match coupon with rateAndBenefitsIdentifiers
    let couponMatch = null

    if (
      orderForm.ratesAndBenefitsData &&
      orderForm.ratesAndBenefitsData.rateAndBenefitsIdentifiers.length
    ) {
      couponMatch = orderForm.ratesAndBenefitsData.rateAndBenefitsIdentifiers.find(
        item => item.name === _coupon
      )
    }

    if (!_coupon || couponItemsCount > 0 || couponMatch) {
      $('fieldset.coupon-fieldset').removeClass(
        'js-vcustom-showCustomMsgCoupon'
      )
      $('.vcustom-showCustomMsgCoupon').remove()

      return false
    }

    if ($('.vcustom-showCustomMsgCoupon').length === 0) {
      $('fieldset.coupon-fieldset')
        .addClass('js-vcustom-showCustomMsgCoupon')
        .append(
          `<p class="vcustom-showCustomMsgCoupon">${_this.lang.couponInactive}</div>`
        )
    }
  }

  addLabels(orderForm) {
    const _coupon = orderForm.marketingData.coupon
    const _couponItems = []

    if (!_coupon) return false

    try {
      $(
        `.table.cart-items tbody tr.product-item, .mini-cart .cart-items li`
      ).removeClass('v-custom-addLabels-active js-vcustom-addLabels')
      $(`.v-custom-addLabels-active-flag`).remove()
      $.each(orderForm.items, function (i) {
        if (this.priceTags.length > 0) {
          if (
            this.priceTags.filter(_pricetag => {
              return _pricetag.ratesAndBenefitsIdentifier
                ? _pricetag.ratesAndBenefitsIdentifier.matchedParameters[
                    'couponCode@Marketing'
                  ] === _coupon
                : false
            }).length > 0
          ) {
            _couponItems.push(this)
            $(`.table.cart-items tbody tr.product-item:eq(${i})`)
              .addClass('v-custom-addLabels-active js-vcustom-addLabels')
              .find('.product-name')
              .append(
                `<span class="v-custom-addLabels-active-flag">${_coupon}</span>`
              )
          }
        }
      })
    } catch (e) {
      console.error(e)
    }
  }

  buildMiniCart(orderForm) {
    /* overide refresh from vtex */
    if (
      orderForm.items.filter(item => {
        return item.parentItemIndex !== null
      }).length === 0
    ) {
      return false
    }

    const _items = orderForm.items

    if ($('.mini-cart .cart-items > li').length === _items.length) {
      $(`.mini-cart .cart-items`).html(`${$(`.mini-cart .cart-items`).html()}`)
      $.each(orderForm.items, function (i) {
        if (this.availability === 'available') {
          $(`.mini-cart .cart-items > li:eq(${i})`)
            .find('.item-unavailable')
            .remove()
        }
      })
    }
  }

  setParentIndex(orderForm) {
    const _orderForm = orderForm.items.filter(item => !item.isGift) // remove gift

    $.each(_orderForm, function (i) {
      if (this.parentItemIndex !== null) {
        $(`.table.cart-items tbody > tr.product-item:eq(${i})`).attr(
          'data-parentItemIndex',
          this.parentItemIndex
        )
      }
    })
  }

  handleBreakpointChange() {
    if (window.innerWidth <= 767) {
      $('body').on('click', '#edit-address-button', () => {
        setTimeout(() => {
          const shippingDataElement = document.getElementById('shipping-data')
          const offset = shippingDataElement.offsetTop - 200

          window.scrollTo({
            top: offset,
            behavior: 'smooth',
          })
        }, 500)
      })
    }
  }

  removeMCLoader() {
    $(`.mini-cart .cart-items`).addClass('v-loaded')
  }

  removeCILoader() {
    $(`.cart-items`).addClass('v-loaded')
  }

  enchanceSummary(key, obj) {
    const _this = this

    if (
      _this.orderForm &&
      $('.mini-cart .cart-items > li').length === _this.orderForm.items.length
    ) {
      $(`.mini-cart .cart-items > li:eq(${key})`)
        .find(`.v-custom-bundles`)
        .remove()
      $(`.mini-cart .cart-items > li:eq(${key})`)
        .append(`<div class="v-custom-bundles"></div>`)
        .addClass('v-custom-indexedItems-in')
      if (
        $(`.mini-cart .cart-items > li:eq(${key})`)
          .find(' > .v-custom-bundles')
          .html() === ''
      ) {
        for (const prop in obj) {
          if (!obj.hasOwnProperty(prop)) continue
          const iiItem = obj[prop]

          $(`.mini-cart .cart-items > li:eq(${key}) > .v-custom-bundles`)
            .append(`
            <div class="hproduct item v-custom-indexed-item ${
              iiItem.sellingPrice ? '' : 'free-item'
            }" data-sku="${iiItem.id}">
              <a href="${iiItem.detailUrl}" class="url">
                <img height="45" width="45" class="photo" src="${
                  iiItem.imageUrl
                }" alt="${iiItem.name}">
              </a>
              <span class="fn product-name" title="${iiItem.name}" href="${
            iiItem.detailUrl
          }">${iiItem.name}</span>
              <span class="quantity badge">${iiItem.quantity}</span>
              <div class="description">
                <strong class="price pull-right" data-bind="text: sellingPriceLabel">
                ${
                  iiItem.sellingPrice
                    ? `${
                        _this.orderForm.storePreferencesData.currencySymbol
                      } ${formatCurrency(
                        _this.orderForm.clientPreferencesData.locale,
                        _this.orderForm.storePreferencesData.currencyCode,
                        iiItem.sellingPrice
                      ).toFixed(2)}`
                    : `Free`
                } </strong>
              </div>
            </div>
          `)
          $(`.mini-cart .cart-items > li[data-sku='${iiItem.id}']`).addClass(
            'v-custom-indexed-item'
          )
        }
      }
    }
  }

  indexedInItems(orderForm) {
    const _this = this

    try {
      if (
        orderForm.items.filter(item => {
          return item.parentItemIndex !== null
        }).length === 0
      ) {
        _this.removeMCLoader()

        return false
      }

      const _orderForm = orderForm.items.filter(item => !item.isGift) // remove gift

      if (_orderForm.length) {
        const indexedInItems = _orderForm.reduce((c, v) => {
          if (v.parentItemIndex !== null) {
            const index = v.parentItemIndex

            c[index] = c[index] || []
            c[index].push(v)
          }

          return c
        }, {})

        for (const key in indexedInItems) {
          const obj = indexedInItems[key]

          if (
            !$(`.table.cart-items tbody > tr.product-item:eq(${key})`).find(
              '.v-custom-bundles'
            ).length
          ) {
            $(`.table.cart-items tbody > tr.product-item:eq(${key})`)
              .append(`<div class="v-custom-bundles"></div>`)
              .addClass('v-custom-indexedItems-in')
            if (
              $(`.table.cart-items tbody > tr.product-item:eq(${key})`)
                .find('.v-custom-bundles')
                .html() === ''
            ) {
              for (const prop in obj) {
                if (!obj.hasOwnProperty(prop)) continue
                const iiItem = obj[prop]

                $(
                  `.table.cart-items tbody > tr.product-item[data-sku='${iiItem.id}'][data-parentitemindex='${iiItem.parentItemIndex}'], .table.cart-items tbody > tr.product-item[data-sku='${iiItem.id}'][data-parentitemindex='${iiItem.parentItemIndex}'] + .item-unavailable`
                )
                  .addClass('v-custom-indexed-item')
                  .clone()
                  .appendTo(
                    `.table.cart-items tbody > tr.product-item:eq(${key}) > .v-custom-bundles`
                  )
              }
            }
          }

          _this.enchanceSummary(key, obj)
          setTimeout(function () {
            _this.enchanceSummary(key, obj)
          }, 150)
        }

        _this.removeMCLoader()
      }
    } catch (e) {
      _this.removeMCLoader()
    }
  }

  holidaysBetweenDates(d0, d1, _holidays) {
    /* Two working days and an sunday (not working day) */
    const holidays = _holidays

    let holidaysCount = 0

    holidays.forEach(day => {
      if (new Date(day) >= d0 && new Date(day) <= d1) {
        /* If it is not saturday (6) or sunday (0), substract it */
        if (parseDateBd(day).getDay() % 6 !== 0) {
          holidaysCount++
        }
      }
    })

    return holidaysCount
  }

  addBusinessDays(n, days, lang = window.i18n.options.lng) {
    const _this = this

    const typeDays = days.replace(/[0-9]/g, '')

    try {
      let d = new Date()

      d = new Date(d.getTime())
      const day = d.getDay()

      if (typeDays === 'd') {
        d.setDate(d.getDate() + n)
      } else {
        d.setDate(
          d.getDate() +
            n +
            (day === 6 ? 2 : +!day) +
            Math.floor((n - 1 + (day % 6 || 1)) / 5) * 2
        )
      }

      let bdHolidays = 0

      if (_this._holidays) {
        bdHolidays = _this.holidaysBetweenDates(
          new Date(),
          d,
          _this._holidays.map(hd => hd.startDate.split('T')[0])
        )
      }

      if (_this._holidays && _this._holidays.name === 'Error') bdHolidays = 0

      let dhd = new Date()

      if (bdHolidays) {
        dhd = new Date(dhd.getTime())
        const dhdDay = dhd.getDay()

        dhd.setDate(
          dhd.getDate() +
            (n + bdHolidays) +
            (dhdDay === 6 ? 2 : +!dhdDay) +
            Math.floor((n + bdHolidays - 1 + (dhdDay % 6 || 1)) / 5) * 2
        )
      }

      let newDate = bdHolidays ? dhd : d

      let doptions = { weekday: 'long', month: 'short', day: 'numeric' }

      if (lang === 'pt') {
        doptions = { weekday: 'short', month: 'short', day: 'numeric' }
      }

      if (d.getDate() - new Date().getDate() === 1) {
        return _this.lang.tomorrowLabel || 'Tomorrow'
      }

      newDate = newDate.toLocaleDateString(lang, doptions)

      return newDate
    } catch (e) {
      console.error(`Error at "addBusinessDays":`, e)
    }
  }

  changeShippingTimeInfo() {
    const _this = this

    $('body').addClass('v-custom-changeShippingTimeInfo')
    const mainSTIelems = [
      '.shp-summary-package-time > span',
      'p.vtex-omnishipping-1-x-sla.sla',
      '.vtex-omnishipping-1-x-leanShippingTextLabelSingle > span',
      'span.shipping-date',
      '.shp-option-text-time',
      '.pkpmodal-pickup-point-sla',
      '.shp-option-text-package',
      '.srp-delivery-current-many__sla',
      '.shipping-estimate-date:eq(0)',
      '.srp-shipping-current-single__sla',
    ]

    const [
      logisticsInfo,
    ] = window.vtexjs.checkout.orderForm.shippingData.logisticsInfo

    const availableSlas = logisticsInfo.slas

    const { selectedSla } = logisticsInfo

    const selectedSlaDays = availableSlas.find(e => e.name === selectedSla)
      ? availableSlas.find(e => e.name === selectedSla).shippingEstimate
      : false

    try {
      $(`
        .vtex-omnishipping-1-x-summaryPackage.shp-summary-package:not(.v-changeShippingTimeInfo-active),
        .vtex-omnishipping-1-x-leanShippingOption,
        .vtex-omnishipping-1-x-packageItem:not(.v-changeShippingTimeInfo-active),
        .orderform-template .cart-template.mini-cart .item,
        .vtex-pickup-points-modal-3-x-pickupPointSlaAvailability,
        .srp-delivery-current-many,
        td.shipping-date,
        .srp-shipping-current-single
      `).each(function () {
        const txtselectin = $(this)
          .find(
            mainSTIelems
              .map(elem => `${elem}:not(.v-changeShippingTimeInfo-elem-active)`)
              .join(', ')
          )
          .text()

        let days

        if (!$(this).hasClass('srp-delivery-current-many')) {
          if (
            txtselectin !== '' &&
            txtselectin.match(/(day)|(dia)|(día)|(tag)/gm)
          ) {
            days = parseInt(txtselectin.match(/\d+/), 10)
          }
        } else if (selectedSlaDays) {
          days = parseInt(selectedSlaDays.match(/\d+/), 10)
        }

        if (days) {
          let _delivtext = _this.lang.deliveryDateText

          if (
            $(this)
              .find(mainSTIelems.join(', '))
              .text()
              .toLowerCase()
              .match(
                /(ready in up)|(pronto)|(a partir de)|(hasta)|(fertig in)/gm
              )
          ) {
            _delivtext = _this.lang.PickupDateText
          } // check if is pickup. OBS: none of others solutions worked, needs constantly update

          $(this)
            .find(mainSTIelems.join(', '))
            .html(
              `${_delivtext} <strong>${_this.addBusinessDays(
                days,
                selectedSlaDays
              )}</strong>`
            )
            .addClass('v-changeShippingTimeInfo-elem-active')
        }

        $(this).addClass('v-changeShippingTimeInfo-active')
      })

      // temporaly
      const shippingPreviewPackges = $(
        '.srp-delivery-info .srp-packages:not(.v-changeShippingTimeInfo-elem-active)'
      )

      $('.js-shippingPreviewPackges').remove()
      if (shippingPreviewPackges.length) {
        const a = shippingPreviewPackges
          .text()
          .split(':')[1]
          .split(/,| and | e | y /)

        const deliveryDates = []

        $.each(a, function (i) {
          const txtselectin = a[i]

          if (
            txtselectin !== '' &&
            txtselectin.match(/(day)|(dia)|(día)|(tag)/gm)
          ) {
            const days = parseInt(txtselectin.match(/\d+/), 10)

            if (days) {
              let _delivtext = _this.lang.deliveryDateText

              if (
                txtselectin
                  .toLowerCase()
                  .match(
                    /(ready in up)|(pronto)|(a partir de)|(hasta)|(fertig in)/gm
                  )
              ) {
                _delivtext = _this.lang.PickupDateText
              } // check if is pickup. OBS: none of others solutions worked, needs constantly update

              deliveryDates.push(
                `${_delivtext} <strong>${_this.addBusinessDays(
                  days,
                  selectedSlaDays
                )}</strong>`
              )
            }
          }
        })
        shippingPreviewPackges
          .hide()
          .after(
            `<p class="black-50 mt3 mb0 js-shippingPreviewPackges">${
              shippingPreviewPackges.text().split(':')[0]
            }: ${deliveryDates.join('; ')}</p>`
          )
          .addClass('v-changeShippingTimeInfo-active')
      }
    } catch (e) {
      console.error('changeShippingTimeInfo Error:', e)
    }
  }

  fetchHolidays() {
    const _this = this
    const roothPath =
      window.__RUNTIME__.rootPath ||
      window.location.pathname.split(`/checkout`)[0]

    if (_this._holidays) return

    fetch(`${roothPath}/_v/holidays`, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(function (data) {
        _this._holidays = data
      })
  }

  changeShippingTimeInfoInit() {
    const _this = this

    if (_this.lang && _this.deliveryDateFormat) {
      _this.fetchHolidays()
      _this.changeShippingTimeInfo()
    }
  }

  enchancementTotalPrice(orderForm) {
    const _this = this

    if (!_this.quantityPriceCart) return
    try {
      $.each(orderForm.items, function (i) {
        const _item = this
        const _trElem = $(`.table.cart-items tbody tr.product-item:eq(${i})`)

        if (
          _item.quantity === 1 ||
          _trElem.find('td.product-price').find('.best-price').length === 0
        ) {
          return
        }

        const totalValue = _trElem.find('.total-selling-price:eq(0)').text()
        const _eachprice = `
          <div class="v-custom-quantity-price vqc-ldelem">
            <span class="v-custom-quantity-price__list">
              ${
                _item.listPrice > _item.sellingPrice
                  ? `<span class="v-custom-quantity-price__list--list">${
                      orderForm.storePreferencesData.currencySymbol
                    } ${(_item.listPrice / 100).toFixed(2)}</span>`
                  : ''
              }
            </span>
          </div>
        `

        _trElem.find('td.product-price').find('.vqc-ldelem').remove()
        // _trElem.find("td.quantity-price").prepend(_eachprice);
        _trElem
          .find('td.product-price')
          .addClass('v-custom-quantity-price-active')
          .prepend(_eachprice)
          .append(
            `<div class="v-custom-quantity-price vqc-ldelem"><span class="v-custom-quantity-price__best">${totalValue}</span></div>`
          )
        _trElem
          .find('td.product-price')
          .find('> .best-price')
          .wrap(`<div class="v-custom-quantity-price__list--selling"></div>`)
        _trElem
          .find('td.product-price')
          .find('.v-custom-quantity-price__list--selling')
          .append(
            `<span class="vqc-ldelem"> ${
              _this.lang ? _this.lang.eachLabel : 'each'
            }</span>`
          )
      })
    } catch (e) {
      console.error('enchancementTotalPrice error:', e)
    }
  }

  condensedTaxes(orderForm) {
    const customtax = orderForm.totalizers.filter(val => val.id === 'CustomTax')

    if (customtax && customtax.length < 2) return false

    const tooltip = `
      <div class="vcustom-customTax-resume">
       ${customtax
         .map(
           i =>
             `<p class="vcustom-customTax-resume__i"><span class="n">${
               i.name
             }</span><span class="v">${
               orderForm.storePreferencesData.currencySymbol
             } ${(i.value / 100).toFixed(2)}</span></p>`
         )
         .join('')}
      </div>
    `

    const customTaxElem = $('tr.CustomTax.CustomTax--total')

    if (customTaxElem.length) {
      customTaxElem.find('.vcustom-customTax-tot').remove()
      customTaxElem
        .find('.info')
        .append(
          `<div class="vcustom-customTax-tot"><span>?</span> ${tooltip}</div>`
        )
    }
  }

  update(orderForm) {
    const _this = this

    this.checkEmpty(orderForm.items)
    this.addAssemblies(orderForm)
    this.enchancementTotalPrice(orderForm)
    this.bundleItems(orderForm)
    this.buildMiniCart(orderForm)
    this.condensedTaxes(orderForm)
    this.setParentIndex(orderForm)
    this.indexedInItems(orderForm)

    // debounce to prevent append from default script
    const updateDebounce = debounce(function () {
      if (orderForm.marketingData) {
        _this.addLabels(orderForm)
        _this.showCustomMsgCoupon(orderForm)
      }
    }, 250)

    updateDebounce()
  }

  updateStep() {
    const prefixClass = 'v-custom-step-'
    const bClassStep = ['cart', 'email', 'profile', 'shipping', 'payment']

    $('body').removeClass(
      bClassStep
        .map(step => {
          return prefixClass + step
        })
        .join(' ')
    )
    if (window.location.hash) {
      const [, hashstep] = window.location.hash.split('/')

      const classStep = bClassStep.filter(st => {
        return ~hashstep.indexOf(st)
      })

      if (classStep.length) {
        $('body').addClass(prefixClass + classStep[0])
      }
    }
  }

  updateLang(orderForm) {
    const clientLocale = orderForm.clientPreferencesData.locale

    this.lang =
      Object.values(_locale).find(country => country.locale === clientLocale) ||
      _locale[orderForm.storePreferencesData.countryCode] ||
      findClosestLang(clientLocale, _locale) ||
      _locale.USA

    if (!this.lang) return false
    const _lang = this.lang

    if (_lang.editLabel) $('.link-box-edit').attr('title', _lang.editLabel)
    if (_lang.cartSubmitButton) {
      $('#cart-to-orderform').text(_lang.cartSubmitButton)
    }

    if (_lang.cartNoteLabel) $('p.note-label label').text(_lang.cartNoteLabel)

    if (_lang.identifiedUserMessage) {
      $('.identified-user-modal-body p.identified-user-message').html(
        _lang.identifiedUserMessage
      )
    }

    // paypal
    if (_lang.paypalPhone) {
      $('.payment-paypal-help-number').text(_lang.paypalPhone)
    }

    if (_lang.paypalImg) {
      $('.payment-paypal-title-short-logo').css(
        'background-image',
        `url(${_lang.paypalImg})`
      )
    } else if (_lang.paypalImg === '') {
      $('.payment-paypal-title-short-logo').hide()
    }

    // shipping

    if (_lang.googleAddressLabel) {
      const geoElem = $('.vtex-omnishipping-1-x-geolocation')

      if (geoElem.length) {
        geoElem
          .find('.ship-addressQuery > label')
          .text(_lang.googleAddressLabel)
      }
    }

    // placeholders

    if (_lang.address1Placeholder) {
      $('.vtex-omnishipping-1-x-address input#ship-street').attr(
        'placeholder',
        _lang.address1Placeholder
      )
    }

    if (_lang.address2Placeholder) {
      $('.vtex-omnishipping-1-x-address input#ship-complement').attr(
        'placeholder',
        _lang.address2Placeholder
      )
    }

    if (_lang.numberPlaceholder) {
      $('.vtex-omnishipping-1-x-address input#ship-number').attr(
        'placeholder',
        _lang.numberPlaceholder
      )
    }
  }

  paymentBuilder(orderForm) {
    const _this = this

    if (orderForm && $('.payment-group-item-cards').length === 0) {
      if (orderForm.paymentData) {
        const paymentGroups = [
          'debitCardPaymentGroup',
          'creditCardPaymentGroup',
        ]

        let paymentGroupCardsHtml = ``

        $.each(paymentGroups, function (p) {
          paymentGroupCardsHtml = `<span class="payment-group-item-cards">`
          $.each(
            orderForm.paymentData.paymentSystems.filter(
              item => item.groupName === paymentGroups[p]
            ),
            function () {
              paymentGroupCardsHtml += `<span class="card-flag ${this.name}">${this.name}</span>`
            }
          )
          paymentGroupCardsHtml += `</span>`
          if (_this.accordionPayments) {
            $(`#payment-group-${paymentGroups[p]}`).append(
              paymentGroupCardsHtml
            )
          }
        })

        if (!_this.accordionPayments) {
          $('#iframe-placeholder-creditCardPaymentGroup').prepend(
            paymentGroupCardsHtml
          )
        }
      }
    }

    if (
      !this.accordionPayments ||
      $('.payment-group-list-btn').find('.v-custom-payment-item-wrap').length >
        0
    ) {
      return false
    }

    $('body').addClass('v-custom-paymentBuilder-accordion')

    $('.payment-group-item').each(function () {
      $(this).wrap(
        `<div class='v-custom-payment-item-wrap ${
          $(this).hasClass('active') ? 'active' : ''
        }'></div>`
      )
    })

    $('.payment-group-item').each(function () {
      $(`#payment-data .steps-view > div:eq(${0})`).appendTo(
        $(this).closest('.v-custom-payment-item-wrap')
      )
    })
  }

  customAddressFormLoader() {
    const _this = this

    if (!window.vtex.googleMapsApiKey) {
      console.warn(
        'You might need to add your Google Maps API Key in your admin'
      )
      _this.customAddressForm = false

      return false
    }

    if (_this.customAddressForm) {
      _this.customAddressForm = new FnsCustomAddressForm({})
      _this.customAddressForm.events()
    }
  }

  goToShippingStep() {
    window.location.hash = '#/shipping'
  }

  appendMessageEmptyStreet(orderForm) {
    const _this = this

    if (
      !(
        (orderForm &&
          orderForm.shippingData &&
          orderForm.shippingData.address &&
          orderForm.shippingData.address.street != null) ||
        (undefined && orderForm.shippingData.address.street.trim())
      )
    ) {
      if (
        !$('.alert-noStreet').length &&
        $('.accordion-inner.shipping-container').length
      )
        $('.orderform-template-holder #shipping-data .accordion-inner').append(
          `<div class="alert-noStreet"><span class="alert">${
            _this.locale
              ? _this.locale.noStreetAddress ||
                'Your shipping information is missing a required field, please include a street'
              : 'Your shipping information is missing a required field, please include a street'
          }</span></div>`
        )
    } else {
      $('.alert-noStreet').remove()
    }
  }

  URLHasIncludePayment(orderForm) {
    const _this = this

    let street = ''

    try {
      if (
        orderForm &&
        orderForm.shippingData &&
        orderForm.shippingData.address &&
        orderForm.shippingData.address.street
      ) {
        street = orderForm.shippingData.address.street
      }

      if (
        window.location.hash === '#/payment' &&
        orderForm &&
        orderForm.shippingData &&
        orderForm.shippingData.address &&
        orderForm.shippingData.address.addressType !== 'search' &&
        !street.trim() &&
        _this.customAddressForm
      ) {
        _this.goToShippingStep()
        _this.appendMessageEmptyStreet(orderForm)
      }
    } catch (error) {
      console.error('URLHasIncludePayment error:', error)
    }
  }

  customAddressFormInit(orderForm) {
    const _this = this
    const _orderForm = orderForm || window.vtexjs.checkout.orderForm

    if (_this.customAddressForm) {
      if (_orderForm.canEditData) {
        $('body').removeClass('returningUser')
      } else {
        $('body').addClass('returningUser')
      }

      try {
        _this.customAddressForm.init(_orderForm)
      } catch (e) {
        console.warn(`Error in "customAddressFormInit"`)
      }
    }
  }

  checkProfileFocus() {
    const _this = this

    if (_this.hideEmailStep) {
      if (
        ~window.location.hash.indexOf('#/email') &&
        $('#client-email').val() === ''
      ) {
        $('#client-email').focus()
      }
    }
  }

  rtlUI() {
    if (
      window.vtex.i18n.getLocale() === 'ar' ||
      window.vtex.i18n.getLocale() === 'ar-SA' ||
      window.vtex.i18n.getLocale() === 'ar-IQ'
    ) {
      $('body').addClass('RTL-checkout')
    }
  }

  bind() {
    const _this = this

    $('body').on('click', '#v-custom-edit-login-data', function (e) {
      e.preventDefault()

      $(this).addClass('active')

      const data = null
      const xhr = new XMLHttpRequest()

      xhr.addEventListener('readystatechange', function () {
        if (this.readyState === this.DONE) {
          window.location.reload()
          setTimeout(function () {
            $('#v-custom-edit-login-data').removeClass('active')
          }, 1000)
        }
      })

      xhr.open(
        'GET',
        `/checkout/changeToAnonymousUser/${_this.orderForm.orderFormId}`
      )
      xhr.setRequestHeader('content-type', 'application/json')
      xhr.setRequestHeader('accept', 'application/json')

      xhr.send(data)
    })

    $('body').on('click', '.v-custom-payment-item-wrap', function () {
      $('.v-custom-payment-item-wrap').removeClass('active')
      $(this).addClass('active')
    })

    $('body').on(
      'click',
      '.vtex-pickup-points-modal-3-x-pickupDetailsHeaderButton, #map-canvas img, .vtex-omnishipping-1-x-pickupPointChange, .pkpmodal-pickup-point, .vtex-pickup-points-modal-3-x-modalDetailsBackLnk',
      function () {
        setTimeout(() => {
          _this.changeShippingTimeInfoInit()
        }, 100)
      }
    )

    $('body').on('click', '.js-checkout-steps-item .text', function () {
      window.location = $(this).closest('.checkout-steps_item').attr('data-url')
    })

    window.addEventListener('resize', _this.handleBreakpointChange)

    _this.handleBreakpointChange()

    $('body').on(
      'click',
      '.vtex-omnishipping-1-x-linkEdit.link-edit',
      function () {
        setTimeout(() => {
          _this.updateLang(_this.orderForm)
        }, 50)
      }
    )

    $('body').on('click', '#btn-client-pre-email', function () {
      setTimeout(function () {
        if (!$('input#client-pre-email').hasClass('error')) {
          $('input#client-email').focus()
        }
      }, 1000)
    })

    $('body').on('click', '#shipping-option-delivery', function () {
      _this.customAddressFormInit(_this.orderForm)
    })

    $('body').on('click', '.show-more-items-button', function () {
      _this.general()
      _this.setParentIndex(window.vtexjs.checkout.orderForm)
      window.vtexjs.checkout.getOrderForm()
    })
  }

  init() {
    const _this = this

    _this.orderForm =
      window.vtexjs.checkout && window.vtexjs.checkout.orderForm
        ? window.vtexjs.checkout.orderForm
        : false
    _this.general()
    _this.updateStep()
    _this.builder()

    _this.changeShippingTimeInfoInit()
    if (_this.orderForm) {
      _this.updateLang(_this.orderForm)
      _this.update(_this.orderForm)
      _this.addStepsHeader()
      _this.paymentBuilder(_this.orderForm)
    }

    _this.addEditButtoninLogin()
  }

  start() {
    const _this = this

    try {
      $(function () {
        _this.bind()
        _this.customAddressFormLoader()
        _this.rtlUI()
      })

      $(document).ajaxComplete(function () {
        _this.init()
      })

      $(window).on('hashchange', function () {
        const cartItems = document.querySelector('.cart-items')

        _this.updateStep()
        _this.changeShippingTimeInfoInit()
        _this.checkProfileFocus()

        if (_this.orderForm) {
          _this.buildMiniCart(_this.orderForm)
          _this.indexedInItems(_this.orderForm)
          _this.updateLang(_this.orderForm)
          _this.paymentBuilder(_this.orderForm)
          _this.customAddressFormInit(_this.orderForm)
          _this.removeCILoader()
          _this.URLHasIncludePayment(_this.orderForm)

          _this.onDomMutation({
            targetNode: cartItems,
            callback: () => _this.removeCILoader(),
          })
        }
      })

      $(window).on('orderFormUpdated.vtex', function (evt, orderForm) {
        _this.update(orderForm)
        _this.customAddressFormInit(orderForm)
      })

      $(window).load(function () {
        $(window).one('componentValidated.vtex', () => _this.builder())
        _this.checkProfileFocus()
        _this.changeShippingTimeInfoInit()
        _this.indexedInItems(window.vtexjs.checkout.orderForm)
        _this.showDeliveryOptions()

        if (_this.customAddressForm && typeof store !== 'undefined') {
          window.store.dispatch({
            type: 'DISABLE_CALCULATE_BUTTON',
            isCalculateBttnEnabled: false,
          })
        }
      })

      // eslint-disable-next-line no-console
      console.log(`🎉 Yay! You are using the vtex.checkout.ui customization !!`)
    } catch (e) {
      _this.general()
    }
  }
}

module.exports = checkoutCustom
