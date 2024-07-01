/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/prop-types */
import type { FC } from 'react'
import React, { useState } from 'react'
import type { WrappedComponentProps } from 'react-intl'
import { injectIntl, FormattedMessage } from 'react-intl'
import PropTypes from 'prop-types'
import { Toggle, Slider, Input, Card, Divider } from 'vtex.styleguide'

import TabsOn from '../images/payments-tabs-on.png'
import TabsOff from '../images/payments-tabs-off.png'
import PriceOn from '../images/cart-quantity-price-on.png'
import PriceOff from '../images/cart-quantity-price-off.png'
import ShippingOff from '../images/shipping-date-number.png'
import ShippingOn from '../images/shipping-date-text.png'
import NotesOn from '../images/notes-field-on.png'
import NotesOff from '../images/notes-field-off.png'
import EmailStepOn from '../images/email-step-on.png'
import EmailStepOff from '../images/email-step-off.png'
import CustomAddresFormOn from '../images/usaddressform-on.png'
import CustomAddresFormOff from '../images/usaddressform-off.png'

const images: any = {
  tabsOn: TabsOn,
  tabsOff: TabsOff,
  shippingOn: ShippingOn,
  shippingOff: ShippingOff,
  priceOn: PriceOn,
  priceOff: PriceOff,
  notesOn: NotesOn,
  notesOff: NotesOff,
  emailStepOn: EmailStepOn,
  emailStepOff: EmailStepOff,
  customAddresFormOn: CustomAddresFormOn,
  customAddresFormOff: CustomAddresFormOff,
}

const LayoutSettings: FC<WrappedComponentProps & any> = ({
  initialState,
  onChange,
  intl,
}) => {
  const [state, setState] = useState<any>({
    ...initialState,
    currentPreview: initialState.accordionPayments ? TabsOff : TabsOn,
  })

  const changePreview = (item: string) => {
    const currentPreview = images[item]

    setState({
      ...state,
      currentPreview,
    })
  }

  const handleChange = (value: any, key: string, image?: string) => {
    const currentPreview = image ? images[image] : state.currentPreview
    const newState = {
      ...state,
      [key]: value,
      currentPreview,
    }

    setState(newState)
    onChange(newState)
  }

  return (
    <div className="w-100 pa4">
      <div className="w-100 cf cb">
        <div className="w-50 fl pr7">
          <div
            className="mt6 db flex items-center"
            onMouseEnter={() => {
              changePreview(state.accordionPayments ? 'tabsOff' : 'tabsOn')
            }}
          >
            <Toggle
              label={intl.formatMessage({
                id: 'admin/checkout-ui.layout.accordionPayments.label',
              })}
              size="large"
              helpText={intl.formatMessage({
                id: 'admin/checkout-ui.layout.accordionPayments.help',
              })}
              checked={state.accordionPayments}
              onChange={(e: any) => {
                handleChange(
                  !state.accordionPayments,
                  'accordionPayments',
                  e.currentTarget.checked ? 'tabsOff' : 'tabsOn'
                )
              }}
            />
          </div>
          <br />

          <div
            className="mt6 db flex items-center"
            onMouseEnter={() => {
              changePreview(
                state.deliveryDateFormat ? 'shippingOn' : 'shippingOff'
              )
            }}
          >
            <Toggle
              label={intl.formatMessage({
                id: 'admin/checkout-ui.layout.deliveryDateFormat.label',
              })}
              size="large"
              helpText={intl.formatMessage({
                id: 'admin/checkout-ui.layout.deliveryDateFormat.help',
              })}
              checked={state.deliveryDateFormat}
              onChange={(e: any) =>
                handleChange(
                  !state.deliveryDateFormat,
                  'deliveryDateFormat',
                  e.currentTarget.checked ? 'shippingOn' : 'shippingOff'
                )
              }
            />
          </div>
          <br />

          <div
            className="mt6 db flex items-center"
            onMouseEnter={() => {
              changePreview(
                state.showCartQuantityPrice ? 'priceOn' : 'priceOff'
              )
            }}
          >
            <Toggle
              label={intl.formatMessage({
                id: 'admin/checkout-ui.layout.showCartQuantityPrice.label',
              })}
              size="large"
              helpText={intl.formatMessage({
                id: 'admin/checkout-ui.layout.showCartQuantityPrice.help',
              })}
              checked={state.showCartQuantityPrice}
              onChange={(e: any) =>
                handleChange(
                  !state.showCartQuantityPrice,
                  'showCartQuantityPrice',
                  e.currentTarget.checked ? 'priceOn' : 'priceOff'
                )
              }
            />
          </div>
          <br />
          <div
            className="mt6 db flex items-center"
            onMouseEnter={() => {
              changePreview(state.showNoteField ? 'notesOn' : 'notesOff')
            }}
          >
            <Toggle
              label={intl.formatMessage({
                id: 'admin/checkout-ui.layout.showNoteField.label',
              })}
              size="large"
              checked={state.showNoteField}
              onChange={(e: any) =>
                handleChange(
                  !state.showNoteField,
                  'showNoteField',
                  e.currentTarget.checked ? 'notesOn' : 'notesOff'
                )
              }
            />
          </div>
          <br />
          <div
            className="mt6 db flex items-center"
            onMouseEnter={() => {
              changePreview(
                state.hideEmailStep ? 'emailStepOff' : 'emailStepOn'
              )
            }}
          >
            <Toggle
              label={intl.formatMessage({
                id: 'admin/checkout-ui.layout.hideEmailStep.label',
              })}
              size="large"
              checked={state.hideEmailStep}
              onChange={(e: any) =>
                handleChange(
                  !state.hideEmailStep,
                  'hideEmailStep',
                  e.currentTarget.checked ? 'emailStepOn' : 'emailStepOff'
                )
              }
            />
          </div>
          <br />
          <div
            className="mt6 db flex items-center"
            onMouseEnter={() => {
              changePreview(
                state.customAddressForm
                  ? 'customAddresFormOn'
                  : 'customAddresFormOff'
              )
            }}
          >
            <Toggle
              label={intl.formatMessage({
                id: 'admin/checkout-ui.layout.customAddressForm.label',
              })}
              size="large"
              checked={state.customAddressForm}
              onChange={(e: any) =>
                handleChange(
                  !state.customAddressForm,
                  'customAddressForm',
                  e.currentTarget.checked
                    ? 'customAddresFormOn'
                    : 'customAddresFormOff'
                )
              }
            />
            <p
              style={{
                display: 'inline-block',
                background: '#f71963',
                margin: '0 0 0 10px',
                padding: '5px',
                borderRadius: '10px',
                color: '#FFF',
                float: 'left',
                fontSize: '13px',
              }}
            >
              BETA
            </p>
          </div>
        </div>
        <div className="w-50 fr">
          <Card noPadding>
            <h3 className="pl6 pr6 pt6">
              <FormattedMessage id="admin/checkout-ui.layout.preview.title" />
            </h3>
            <img
              alt={intl.formatMessage({
                id: 'admin/checkout-ui.layout.preview.title',
              })}
              style={{ maxHeight: '260px', display: 'block', margin: '0 auto' }}
              src={state.currentPreview}
            />
          </Card>
        </div>
      </div>

      <div className="mv6">
        <Divider orientation="horizontal" />
      </div>

      <div className="w-100 cf cb">
        <div className="w-50 fl pr7">
          <div className="mt6 flex">
            <div className="flex flex-column items-left w-50">
              <div className="flex-col">
                <span>
                  <FormattedMessage id="admin/checkout-ui.layout.fontSize.label" />
                </span>
              </div>
              <div className="flex-col">
                <Slider
                  onChange={(value: any) => {
                    handleChange(`${value[0]}px`, 'fontSize')
                  }}
                  min={10}
                  max={30}
                  step={1}
                  defaultValues={[state.fontSize.replace('px', '')]}
                  alwaysShowCurrentValue={false}
                  formatValue={(a: number) => `${a}px`}
                />
              </div>
            </div>
          </div>

          <div className="mt6 flex">
            <div className="flex flex-column items-left w-50">
              <div className="flex-col">
                <span>
                  <FormattedMessage id="admin/checkout-ui.layout.borderRadius.label" />
                </span>
              </div>
              <div className="flex-col">
                <Slider
                  onChange={(value: any) => {
                    handleChange(`${value[0]}px`, 'borderRadius')
                  }}
                  min={0}
                  max={50}
                  step={1}
                  defaultValues={[state.borderRadius.replace('px', '')]}
                  alwaysShowCurrentValue={false}
                  formatValue={(a: number) => `${a}px`}
                />
              </div>
            </div>
          </div>

          <div className="mt6 flex">
            <div className="flex flex-column items-left w-50">
              <div className="flex-col">
                <span>
                  <FormattedMessage id="admin/checkout-ui.layout.btnBorderRadius.label" />
                </span>
              </div>
              <div className="flex-col">
                <Slider
                  onChange={(value: any) => {
                    handleChange(`${value[0]}px`, 'btnBorderRadius')
                  }}
                  min={0}
                  max={50}
                  step={1}
                  defaultValues={[state.btnBorderRadius.replace('px', '')]}
                  alwaysShowCurrentValue={false}
                  formatValue={(a: number) => `${a}px`}
                />
              </div>
            </div>
          </div>

          <div className="mt6 flex">
            <div className="flex flex-column items-left w-50">
              <div className="flex-col">
                <span>
                  <FormattedMessage id="admin/checkout-ui.layout.inputHeight.label" />
                </span>
              </div>
              <div className="flex-col">
                <Slider
                  onChange={(value: any) => {
                    handleChange(`${value[0]}px`, 'inputHeight')
                  }}
                  min={0}
                  max={50}
                  step={1}
                  defaultValues={[state.inputHeight.replace('px', '')]}
                  alwaysShowCurrentValue={false}
                  formatValue={(a: number) => `${a}px`}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-50 fr">
          <div
            className="summary-template-holder"
            style={{
              boxShadow: 'rgba(61, 62, 64, 0.3) 0px 3px 9px 0px',
              padding: '20px',
              borderRadius: `${state.borderRadius}`,
              border: state.bordersContainers,
              fontFamily: state.fontFamily,
            }}
          >
            <h3>
              <FormattedMessage id="admin/checkout-ui.layout.preview.title" />
            </h3>

            <p
              style={{
                fontFamily: state.fontFamily,
                fontSize: `${state.fontSize}`,
              }}
            >
              <FormattedMessage id="admin/checkout-ui.layout.preview.sample" />
            </p>

            <p className="coupon-fields">
              <span className="flex">
                <input
                  className="w-80"
                  type="text"
                  placeholder="Coupon Code"
                  style={{
                    height: `${state.inputHeight}`,
                    borderRadius: `${state.borderRadius}`,
                    border: `1px solid #cacbcc`,
                    fontSize: `${state.fontSize}`,
                    padding: '0 10px',
                  }}
                />
                <button
                  className="bg-action-primary c-on-action-primary w-20 ml3"
                  style={{
                    borderRadius: `${state.btnBorderRadius}`,
                    height: `${state.inputHeight}`,
                    border: `none`,
                    padding: `5px 12px`,
                    fontSize: `${state.fontSize}`,
                  }}
                  type="submit"
                >
                  <FormattedMessage id="admin/checkout-ui.layout.preview.button" />
                </button>
              </span>
            </p>
            <div
              className=""
              style={{
                fontFamily: state.fontFamily,
                fontSize: `${state.fontSize}`,
              }}
            >
              <div className="Items flex justify-around">
                <div className="w-50 tl">Subtotal</div>
                <div className="w-50 tr">$ 64.35</div>
              </div>
              <div className="srp-summary-result flex justify-around">
                <div className="w-50 tl">Shipping</div>
                <div className="w-50 tr">$ 3.00</div>
              </div>
              <div
                className="flex justify-around"
                style={{
                  fontSize: '18px',
                  fontWeight: 'bold',
                  padding: '14px 0',
                  margin: '14px 0',
                  borderTop: '1px solid #cbcbcb',
                }}
              >
                <div className="w-50 tl">Total</div>
                <div className="w-50 tr">$ 67.35</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mv7">
        <Divider orientation="horizontal" />
      </div>

      <div className="w-100 cf cb">
        <div className="w-100 flex justify-between">
          <div className="w-30">
            <Input
              label={intl.formatMessage({
                id: 'admin/checkout-ui.layout.maxWrapper.label',
              })}
              value={state.maxWrapper}
              placeholder="980px, 90%, etc."
              onChange={(e: any) => {
                handleChange(e.target.value, 'maxWrapper')
              }}
            />
          </div>

          <div className="w-30">
            <Input
              label={intl.formatMessage({
                id: 'admin/checkout-ui.layout.bordersContainers.label',
              })}
              value={state.bordersContainers}
              placeholder="2px solid #eee"
              onChange={(e: any) => {
                handleChange(e.target.value, 'bordersContainers')
              }}
            />
          </div>

          <div className="w-30">
            <Input
              label={intl.formatMessage({
                id: 'admin/checkout-ui.layout.fontFamily.label',
              })}
              value={state.fontFamily}
              placeholder="'Roboto', sans-serif"
              onChange={(e: any) => {
                handleChange(e.target.value, 'fontFamily')
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

LayoutSettings.propTypes = {
  onChange: PropTypes.func,
  initialState: PropTypes.any,
}

export default injectIntl(LayoutSettings)
