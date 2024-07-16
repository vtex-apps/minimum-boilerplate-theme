# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.18.6] - 2024-05-28

### Fixed

- Malta's list of Councils

## [0.18.5] - 2024-05-07

### Fixed

- Set default locale for google address form as GBR

### Added

- Add IRL in locales file

## [0.18.4] - 2024-05-07

### Changed

- Updated version reference to Address-form in order to reflect Malta's locale addition

## [0.18.3] - 2024-04-30

## [0.18.2] - 2024-04-29

### Fixed

- Product unavailable warning message outside the items container

## [0.18.1] - 2024-03-05

### Fixed

- double number in address for ITA

## [0.18.0] - 2024-02-27

### Changed
- Update version to clean possible poisoned cache due to an IO db update

## [0.17.1] - 2024-02-16

### Fixed

- Fix: removes trim() from shipping validation

## [0.17.0] - 2024-02-07

### Fixed

- Build files again

## [0.16.0] - 2024-02-02

### Added

- Export `_countries`, `_countriesrules`, `_cities`, and `_addressPlaceholder` variables so that other scripts can access them

### Fixed

- Linting and code cleanup
- Update webpack package to 5.x

## [0.15.6] - 2024-01-24

## [0.15.5] - 2024-01-17

## Fixed

- Fix trim errors

## [0.15.4] - 2024-01-10

## [0.15.3] - 2024-01-09

## [0.15.1] - 2023-12-22

## [0.15.0] - 2023-12-19

### Fixed

- https avoiding tls

## [0.14.0] - 2023-12-14

### Added

- add holidays to date calculation

## [0.13.11] - 2023-11-29

### Added

- Code Editor for CSS and JS

### Fixed

- Arabic, German, English, Spanish, Finnish, Italian, Japanese, Korean, Portuguese, Romanian and Thai translations.

## [0.13.9] - 2023-09-24

### Added

- scroll on go to shipping button

## [0.13.8] - 2023-09-22

### Fixed

- Fix issue with console log countryLang

## [0.13.7] - 2023-09-20

### Fixed

- display undeliverable message instead of a alert

## [0.13.6] - 2023-09-12

### Fixed

- fallback for country selection when changing trade policies

## [0.13.5] - 2023-09-12

### Fixed

- Address form fixed for the states of Croatia and CZE

## [0.13.4] - 2023-08-30

### Fixed

- Add operator to fix issue in the undefined or null city

## [0.13.3] - 2023-08-15

### Fixed

- match of shipping step as indexOf
- indexedItems when having gift

## [0.13.2] - 2023-08-04

### Fixed

- fallback when have an error in the orderform

## [0.13.1] - 2023-08-04

## [0.13.0] - 2023-08-02

### Fixed

- events for validation

### Added

- Change redirect of empty address for a message

## [0.12.9] - 2023-08-01

### Fixed

- typo + conditional to orderform

## [0.12.8] - 2023-08-01

### Fixed

- enchance for summary cart
- change price for free item
- Fix `_this` reference for `this.lang`
- editable address

## [0.12.7] - 2023-07-18

### Fixed

- Change Receiver name of function avoind returning `null`

## [0.12.6] - 2023-07-12

## [0.12.5] - 2023-07-13

## [0.12.5] - 2023-07-13

### Fixed

- Fix for when editing address with isDisposable

## [0.12.4] - 2023-07-12

### Fixed

- Remove coupong error message when using it with a campaign audience promotion.

## [0.12.3] - 2023-07-11

### Added

- Receiver name when using Google Form

### Fixed

- Try catch on the fallback for gmaps script

## [0.12.2] - 2023-07-11

### Fixed

- Try catch for address trigger

## [0.12.1] - 2023-07-11

### Fixed

- Fix probably undefined error for `customAddressFormInit`

## [0.12.0] - 2023-06-27

### Added

- Added offset scroll on mobile when user changes their address

## [0.11.1] - 2023-05-19

### Added

- AUSTRIA configuration

### Fixed

- German translations on shipping / pick up times
- Missing translations on the config file

### Fixed

- Major change in the google address form function

## [0.10.1] - 2023-04-27

### Fixed

- Bug on Safari causing "Proceed to Payment" / "Checkout" button to disappear from cart page

## [0.10.0] - 2023-04-18

### Added

- Added more info into the README

## [0.9.3] - 2023-04-13

### Added

- Puerto Rico country rules

### Fixed

- address form duplicated number

## [0.9.2] - 2023-04-07

### Fixed

- Address field open at checkout

## [0.9.1] - 2023-03-28

### Fixed

- fix minor typo

## [0.9.0] - 2023-03-28

### Added

- German translation.

## [0.8.33] - 2023-03-27

### Added

- Puerto Rico cities & states

## [0.8.32] - 2023-01-11

### Removed

- Unused `jsonwebtoken` package

## [0.8.31] - 2022-12-22

### Fixed

- Add additional `showDeliveryOptions` call in case the first one is triggered too early

## [0.8.30] - 2022-12-21

### Fixed

- restore country field for addressFrom

## [0.8.29] - 2022-12-21

### Fixed

- Possibility do edit address when using the custom form

## [0.8.28] - 2022-11-15

### Fixed

- Avoid Google address form from rendering in the Pickup points selection
- Show Google address form, for adding a new address, even if smart-checkout is activated

## [0.8.27] - 2022-11-11

### Fixed

- Corrected a French province name

## [0.8.26] - 2022-11-10

### Fixed

- Select state from dropdown options using long name when Google returns a short name different from `shortCode` in `_cities` mapping

## [0.8.25] - 2022-11-10

### Fixed

- Bump package versions to fix critial vulnerabilities

## [0.8.24] - 2022-11-08

### Fixed

- Don't prevent user from proceeding to payment step based on incomplete shipping address if their `addressType` is `search` (i.e. if store pickup is selected)

## [0.8.23] - 2022-11-08

### Fixed

- Set `this.lang` based on client's language if client locale or store country is not listed in `_locale`

## [0.8.22] - 2022-10-18

### Fixed

- validation of payload before redirect to shipping (it fixes an KI in the checkout when having 2 addresses in the selected address)

## [0.8.21] - 2022-10-14

### Fixed

- loading assemblies when having more than 10 products

## [0.8.20] - 2022-10-07

### Fixed

- Making field state required accordingly to its rules

## [0.8.19] - 2022-10-07

### Added

- Italian translations

### Fixed

- English, Portuguese and Spanish translations

### Changed

- GitHub reusable workflow and cy-runner upated to version 2

## [0.8.18] - 2022-09-29

### Fixed

- Returning buyer issue with custom address form

## [0.8.17] - 2022-09-23

### Fixed

- Prevent Custom Address From from rendering in the pickup point tab

## [0.8.16] - 2022-09-23

### Fixed

- Fixed custom address form state selected value

## [0.8.15] - 2022-09-12

### Fixed

- Fixed custom address form render wrong place

## [0.8.14] - 2022-09-08

### Fixed

- Fixed alignment of element in the cart

## [0.8.13] - 2022-09-08

### Fixed

- Fixed incorrect state name

## [0.8.12] - 2022-09-06

### Added

- Updated address-form dependency

## [0.8.11] - 2022-09-06

### Fixed

- Fix issue to proceed to payment method Germany

## [0.8.10] - 2022-09-01

### Added

- Build files added

### Fixed

- Stopped address form from rendering in the pickup point tab

## [0.8.9] - 2022-09-01

### Fixed

- Fix attachments ui when rendered and after orderForm update

## [0.8.8] - 2022-08-25

## Fixed

- Changed the type of the button from submit to button.

## [0.8.6] - 2022-08-17

### Fixed

- Fixed duplicated CustomAddress Form

## [0.8.5] - 2022-08-02

### Added

- Added latest version of AddressForm to package JSON

## [0.8.4] - 2022-07-22

### Added

- GeoCode API
- Added country Rule for complement

## [0.8.3] - 2022-07-21

### Added

- Added translations to the italy

## [0.8.2] - 2022-07-20

### Added

- Added vtex.email-checkout-conflict as dependency.

## [0.8.1] - 2022-07-19

### Fixed

- Short Code for Spain

## [0.8.0] - 2022-07-19

### Added

- Added a route to get the rules from address-form app.

## [0.7.13] - 2022-07-14

### Added

- Added rules for SPAIN
- Added missing translation for number in SPAIN

## [0.7.12] - 2022-07-11

### Added

- Added missing translations for different European countries

## [0.7.11] - 2022-07-08

### Added

- Added Licence manager product ID in order to restrict access to other users

## [0.7.10] - 2022-07-07

### Fixed

- Added translation to button in shipping step

## [0.7.9] - 2022-07-01

### Fixed

- Observer DOM mutation added.

## [0.7.8] - 2022-06-30

### Fixed

- Update city address rule for Germany

## [0.7.7] - 2022-06-28

### Fixed

- Fix the address form country rules for Germany

## [0.7.6] - 2022-06-22

### Fixed

- Add validation if the user reaches payment method and doesn't have a valid address

## [0.7.5] - 2022-06-16

### Fixed

- Send number as null when USA.
- Change rules for DEU number to true.
- Fix update the labels when country change.

## [0.7.4] - 2022-06-08

### Fixed

- Show number when send the address.
- Update the form when change the country.

## [0.7.3] - 2022-06-08

### Fixed

- Translations for missing elements in the checkout.

## [0.7.2] - 2022-06-03

### Fixed

- When number is false dont use find types function.

## [0.7.1] - 2022-06-03

### Removed

- Removed all references to fonts.gstatic.com.

## [0.7.0] - 2022-06-03

### Added

- Japanese, Korean, Romanian, Thai general message translations and translation of checkout messages for Greece, Switzerland, Croatia, Romania, Netherlands, Belgium, and Czechia (Czech Republic).

### Fixed

- Spanish translations.

## [0.6.22] - 2022-06-01

### Fixed

- Get country information again when trying to retrieve getCountries
- Fixed error adding Google Maps Appkey multiple times

## [0.6.21] - 2022-06-01

### Added

- Add Russia in the Google Address Form.
- Convert country rules in an array to take the next value in the array.
- Hide state select in Google Address Form if it is false.
- Set as false selectedSlaDays in case of no sla found.

## [0.6.20] - 2022-05-19

### Added

- Added PANAMA Country Address rules

## [0.6.19] - 2022-05-09

### Changed

- Added some other countries for Europe which they are `GRC`, `CHE`, `AUT`, `NLD`, `BEL`, `CZE`

## [0.6.18] - 2022-05-05

### Added

- Added missing countries for Europe

## [0.6.17] - 2022-04-26

### Fixed

- Fixed notes field not rendering

## [0.6.16] - 2022-04-21

### Fixed

- Fixed callback function error

## [0.6.15] - 2022-04-19

### Added

- Added country rules for Belgium and Netherlands

## [0.6.14] - 2022-04-18

### Fixed

- Create a method to wait for instances using setInterval.
- Set cart items when clicking on the forward browser arrow.

## [0.6.13] - 2022-03-17

### Fixed

- conditioning waitForRuntime extensions for delivery options.

## [0.6.12] - 2022-02-25

### Fixed

- Inconsistency in the “delivery-options” field fixed

## [0.6.11] - 2022-02-09

### Fixed

- Lint changes

## [0.6.10] - 2022-01-20

## [0.6.9] - 2022-01-07

### Added =

- Poland language support

## [0.6.8] - 2021-12-23

### fixed

- Fixed issue in deliveryDateFormat

## [0.6.7] - 2021-12-10

### Added

- Support RTL views for Arabic

## [0.6.6] - 2021-12-01

### Added

- Cyrilic

### Fixed

- Number requirement using Google Address Format

## [0.6.5] - 2021-12-01

### Fixed

- Geocoordinates reversed

## [0.6.4] - 2021-11-22

### Fixed

- Fix comma when adding new addres in the custom address form

## [0.6.3] - 2021-10-07

### Fixed

- Fix address form to Argentina

## [0.6.2] - 2021-10-05

### Added

- Number placeholder to Italy

## [0.6.1] - 2021-10-04

### Fix

- Remove input placeholders to Italy

## [0.6.0] - 2021-09-30

### Added

- I18n Ar.

### Fixed

- Italian placeholders.

## [0.5.8] - 2021-09-28

### Fixed

- Shipping preview on the first load

## [0.5.7] - 2021-09-27

### Fixed

- Addressform needs to insert the direction not the place in to make the order be invoiced properly.

## [0.5.6] - 2021-09-22

### Fix

- Append shipping preview in the first load

## [0.5.5] - 2021-09-15

- Update status of `select` for orderForm SLAs when the setting `deliveryDateFormat` is set to true

## [0.5.4] - 2021-09-09

### Fixed

- Wrap item in the cart when having more than 20 items

## [0.5.3] - 2021-08-27

### Fix

- Validation when `Google Maps key` is not added

## [0.5.2] - 2021-08-25

### Added

- Google Address Form supporting Argentina (beta)

## [0.5.1] - 2021-08-17

### Fixed

- InStore files being overwritten by `checkout-ui-custom`

### Removed

- Files `checkout-confirmation-custom.[js-css]`, `checkout-instore-custom.[js-css]`

## [0.5.0] - 2021-06-30

### Changed

- Now compiled files will be pushed to VBase to improve performance

## [0.4.6] - 2021-06-07

### Fixed

- Removing hardcoded custom css (!)

## [0.4.5] - 2021-06-07

### Fixed

- Fix pickup-point form

## [0.4.4] - 2021-05-11

## [0.4.3] - 2021-05-03

### Fixed

- Lang condition for `eachLabel`

## [0.4.2] - 2021-04-29

### Fixed

- Cleaning custom address form js
- Fix event load of gmaps script fallback

### Added

- Added Panama to locale infos

## [0.4.1] - 2021-04-27

### Added

- Add COL and MEX in locales

### Fixed

- Delivery estimated time in /cart when using date format feature
- Fallback to custom address form by country

## [0.4.0] - 2021-04-22

### Added

- I18n Fi.
- Crowdin configuration file.

## [0.3.11] - 2021-04-20

### Fixed

- Translations issues when using custom addressform
- Date format for spanish checkout

## [0.3.10] - 2021-04-15

## [0.3.9] - 2021-04-15

### Fixed

- Fixed an error on the App's first load, when it still don't have the initial config defined

## [0.3.8] - 2021-04-14

### Fixed

- Country and Cities when editing an address
- Number for Vatican
- Fallback of the edit event

## [0.3.7] - 2021-04-09

### Fix

- Fix country short code for Vatican

## [0.3.6] - 2021-04-08

### Added

- New custom address form

## [0.3.5] - 2021-04-05

### Fixed

- Show gift sections when using mobile

## [0.3.4] - 2021-03-15

### Fixed

- Attached product in the product summary

## [0.3.3] - 2021-02-18

### Added

- Countries: Spain and Portugal

### Fixed

- increase timeout

## [0.3.2] - 2021-02-16

## [0.3.1] - 2021-02-09

### Fixed

- German language

## [0.3.0] - 2021-01-28

### Added

- Admin v4 sidebar link.

## [0.2.4] - 2021-01-18

### Added

- Adding SE, FI, DE langs

### Fixed

- Fix canadian locale translations

## [0.2.3] - 2021-01-05

### Added

- Better descriptions of metadata

## [0.2.2] - 2020-12-30

### Fixed

- Remove duplicated css

## [0.2.1] - 2020-12-23

### Fixed

- Not refreshing last app version number
- Applying translated warning message

## [0.2.0] - 2020-12-23

### Added

- Published message
- Self closing modal after publishing
- Warning message when a new version is available

### Updated

- Code cleanup

## [0.1.8] - 2020-12-22

### Fix

- Duplicated indexed skus

## [0.1.7] - 2020-12-11

### Fix

- Remove custom css

## [0.1.6] - 2020-12-11

### Fix

- Fix indented products on summary

## [0.1.5] - 2020-12-08

### Added

- French language

## [0.1.4] - 2020-12-03

### Fix

- Fixing indented products on summary and cart

## [0.1.3] - 2020-12-03

### Fix

- Fix field sizes on second card step

## [0.1.2] - 2020-11-04

### Fix

- Formatted date on shipping preview when having more than 1 package

## [0.1.1] - 2020-11-02

### Added

- Add italian language

## [0.1.0] - 2020-11-02

### Fix

- Elem change shipping info in the Shipping Preview

## [0.0.24] - 2020-10-28

### Added

- Tooltip displaying custom taxes

## [0.0.23] - 2020-10-22

### Added

- Toggle to hide the e-mail step

## [0.0.22] - 2020-10-21

### Fixed

- @media max-width increased to support current devices on responsive

## [0.0.21] - 2020-10-13

### Fixed

- Saved cards when using tabs
- Margins

## [0.0.20] - 2020-09-20

### Fixed

- Border on shipping preview
- Focus on input

## [0.0.19] - 2020-09-10

### Fixed

- fixing tab js

## [0.0.18] - 2020-09-10

### Fixed

- Shipping inputs
- Javascript loops

### Added

- Loyalty program styling

## [0.0.17] - 2020-09-04

### Fixed

- Shipping preview on /cart
- Flags on debit card payment

### Fixed

- Updated `README.md` file (image link was presenting an error).

## [0.0.16] - 2020-08-27

### Fixed

Message fix when shipping is broken

## [0.0.15] - 2020-08-26

## [0.0.14] - 2020-08-26

### Fixed

General fixes + change image of preview tabs off

## [0.0.13] - 2020-08-19

### Added

- Gift extension style

## [0.0.12] - 2020-08-19

### Fixed

- "Shipping date" helper and image inverted

## [0.0.11] - 2020-08-19

### Added

- Portuguese translation for the App Store
- Fixed SVG fill color to the payment icon

## [0.0.10] - 2020-08-19

### Added

- Assets for the App Store

## [0.0.9] - 2020-08-18

### Updated

- Doc update
- Translation files

### Added

- Confirmation dialog to production environment

## [0.0.8] - 2020-08-18

- Doc update

## [0.0.7] - 2020-08-18

### Fixed

- note field condition to buy button

## [0.0.6] - 2020-08-18

### Updated

- English translation

## [0.0.5] - 2020-08-17

### Updated

- Doc update

## [0.0.4] - 2020-08-17

## [0.0.3] - 2020-08-17

### Updated

- Doc update

### Fixed

- Admin UI Route

## [0.0.2] - 2020-08-17

### Added

- Initial version

### Updated

- App name
