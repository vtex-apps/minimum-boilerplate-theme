module.exports.debounce = (func, wait) => {
  let timeout

  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }

    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

module.exports.formatCurrency = (_locale, _currency, _value) => {
  const price = _value / 100

  new Intl.NumberFormat(_locale, {
    style: 'currency',
    currency: _currency,
  }).format(price)

  return price
}

module.exports.findClosestLang = (clientLocale, locales) => {
  const [clientLang] = clientLocale.split('-')

  return Object.values(locales).find(country => {
    const [countryLang] = country.locale.split('-')

    return clientLang === countryLang
  })
}

module.exports.getShipStateValue = state => {
  const stateValue =
    $(
      `.vcustom--vtex-omnishipping-1-x-address #ship-state option[value^='${state}']`
    ).val() ||
    $(
      `.vcustom--vtex-omnishipping-1-x-address #ship-state option[value$='${state}']`
    ).val()

  return stateValue
}

module.exports.parseDateBd = input => {
  const parts = input.match(/(\d+)/g)

  return new Date(parts[0], parts[1] - 1, parts[2]) // months are 0-based
}
