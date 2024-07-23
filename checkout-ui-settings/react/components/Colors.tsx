/* eslint-disable @typescript-eslint/no-explicit-any */
import type { FC } from 'react'
import React, { useState } from 'react'
import type { WrappedComponentProps } from 'react-intl'
import { injectIntl } from 'react-intl'
import PropTypes from 'prop-types'
import { ColorPicker } from 'vtex.styleguide'

const Colors: FC<WrappedComponentProps & any> = ({
  initialState,
  onChange,
  intl,
}) => {
  const [state, setState] = useState<any>({
    ...initialState,
    history: [],
  })

  const handleChange = (color: any, picker: string) => {
    const { history } = state

    history.push(color)

    setState({
      ...state,
      history,
      [picker]: color.hex,
    })

    onChange({
      ...initialState,
      [picker]: color.hex,
    })
  }

  return (
    <div className="w-100 pa4">
      <div className="w-50 mb-4">
        <ColorPicker
          color={{ hex: state.base }}
          colorHistory={state.history}
          label={intl.formatMessage({
            id: 'admin/checkout-ui.color.base',
          })}
          onChange={(color: any) => {
            handleChange(color, 'base')
          }}
        />
      </div>

      <div className="w-50">
        <ColorPicker
          color={{ hex: state.baseInverted }}
          colorHistory={state.history}
          label={intl.formatMessage({
            id: 'admin/checkout-ui.color.baseInverted',
          })}
          onChange={(color: any) => {
            handleChange(color, 'baseInverted')
          }}
        />
      </div>

      <div className="w-50">
        <ColorPicker
          color={{ hex: state.actionPrimary }}
          colorHistory={state.history}
          label={intl.formatMessage({
            id: 'admin/checkout-ui.color.actionPrimary',
          })}
          onChange={(color: any) => {
            handleChange(color, 'actionPrimary')
          }}
        />
      </div>

      <div className="w-50">
        <ColorPicker
          color={{ hex: state.actionPrimaryDarken }}
          colorHistory={state.history}
          label={intl.formatMessage({
            id: 'admin/checkout-ui.color.actionPrimaryDarken',
          })}
          onChange={(color: any) => {
            handleChange(color, 'actionPrimaryDarken')
          }}
        />
      </div>

      <div className="w-50">
        <ColorPicker
          color={{ hex: state.actionSecondary }}
          colorHistory={state.history}
          label={intl.formatMessage({
            id: 'admin/checkout-ui.color.actionSecondary',
          })}
          onChange={(color: any) => {
            handleChange(color, 'actionSecondary')
          }}
        />
      </div>

      <div className="w-50">
        <ColorPicker
          color={{ hex: state.emphasis }}
          colorHistory={state.history}
          label={intl.formatMessage({
            id: 'admin/checkout-ui.color.emphasis',
          })}
          onChange={(color: any) => {
            handleChange(color, 'emphasis')
          }}
        />
      </div>

      <div className="w-50">
        <ColorPicker
          color={{ hex: state.disabled }}
          colorHistory={state.history}
          label={intl.formatMessage({
            id: 'admin/checkout-ui.color.disabled',
          })}
          onChange={(color: any) => {
            handleChange(color, 'disabled')
          }}
        />
      </div>

      <div className="w-50">
        <ColorPicker
          color={{ hex: state.success }}
          colorHistory={state.history}
          label={intl.formatMessage({
            id: 'admin/checkout-ui.color.success',
          })}
          onChange={(color: any) => {
            handleChange(color, 'success')
          }}
        />
      </div>

      <div className="w-50">
        <ColorPicker
          color={{ hex: state.successDarken }}
          colorHistory={state.history}
          label={intl.formatMessage({
            id: 'admin/checkout-ui.color.successDarken',
          })}
          onChange={(color: any) => {
            handleChange(color, 'successDarken')
          }}
        />
      </div>

      <div className="w-50">
        <ColorPicker
          color={{ hex: state.successFaded }}
          colorHistory={state.history}
          label={intl.formatMessage({
            id: 'admin/checkout-ui.color.successFaded',
          })}
          onChange={(color: any) => {
            handleChange(color, 'successFaded')
          }}
        />
      </div>

      <div className="w-50">
        <ColorPicker
          color={{ hex: state.danger }}
          colorHistory={state.history}
          label={intl.formatMessage({
            id: 'admin/checkout-ui.color.danger',
          })}
          onChange={(color: any) => {
            handleChange(color, 'danger')
          }}
        />
      </div>

      <div className="w-50">
        <ColorPicker
          color={{ hex: state.dangerFaded }}
          colorHistory={state.history}
          label={intl.formatMessage({
            id: 'admin/checkout-ui.color.dangerFaded',
          })}
          onChange={(color: any) => {
            handleChange(color, 'dangerFaded')
          }}
        />
      </div>

      <div className="w-50">
        <ColorPicker
          color={{ hex: state.warning }}
          colorHistory={state.history}
          label={intl.formatMessage({
            id: 'admin/checkout-ui.color.warning',
          })}
          onChange={(color: any) => {
            handleChange(color, 'warning')
          }}
        />
      </div>

      <div className="w-50">
        <ColorPicker
          color={{ hex: state.warningFaded }}
          colorHistory={state.history}
          label={intl.formatMessage({
            id: 'admin/checkout-ui.color.warningFaded',
          })}
          onChange={(color: any) => {
            handleChange(color, 'warningFaded')
          }}
        />
      </div>

      <div className="w-50">
        <ColorPicker
          color={{ hex: state.muted1 }}
          colorHistory={state.history}
          label={intl.formatMessage({
            id: 'admin/checkout-ui.color.muted1',
          })}
          onChange={(color: any) => {
            handleChange(color, 'muted1')
          }}
        />
      </div>

      <div className="w-50">
        <ColorPicker
          color={{ hex: state.muted2 }}
          colorHistory={state.history}
          label={intl.formatMessage({
            id: 'admin/checkout-ui.color.muted2',
          })}
          onChange={(color: any) => {
            handleChange(color, 'muted2')
          }}
        />
      </div>

      <div className="w-50">
        <ColorPicker
          color={{ hex: state.muted3 }}
          colorHistory={state.history}
          label={intl.formatMessage({
            id: 'admin/checkout-ui.color.muted3',
          })}
          onChange={(color: any) => {
            handleChange(color, 'muted3')
          }}
        />
      </div>

      <div className="w-50">
        <ColorPicker
          color={{ hex: state.muted4 }}
          colorHistory={state.history}
          label={intl.formatMessage({
            id: 'admin/checkout-ui.color.muted4',
          })}
          onChange={(color: any) => {
            handleChange(color, 'muted4')
          }}
        />
      </div>

      <div className="w-50">
        <ColorPicker
          color={{ hex: state.muted5 }}
          colorHistory={state.history}
          label={intl.formatMessage({
            id: 'admin/checkout-ui.color.muted5',
          })}
          onChange={(color: any) => {
            handleChange(color, 'muted5')
          }}
        />
      </div>

      <div className="w-50">
        <ColorPicker
          color={{ hex: state.muted6 }}
          colorHistory={state.history}
          label={intl.formatMessage({
            id: 'admin/checkout-ui.color.muted6',
          })}
          onChange={(color: any) => {
            handleChange(color, 'muted6')
          }}
        />
      </div>
    </div>
  )
}

Colors.propTypes = {
  onChange: PropTypes.func,
  initialState: PropTypes.any,
  intl: PropTypes.any,
}

export default injectIntl(Colors)
