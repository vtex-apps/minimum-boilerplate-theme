/* eslint-disable @typescript-eslint/no-explicit-any */
import type { FC } from 'react'
import React, { useState } from 'react'
import type { WrappedComponentProps } from 'react-intl'
import { defineMessages, injectIntl } from 'react-intl'
import PropTypes from 'prop-types'
import { Textarea, Toggle } from 'vtex.styleguide'

import Editor from '@monaco-editor/react'

const messages = defineMessages({
  label: {
    id: 'admin/checkout-ui.tab.javascript.label',
    defaultMessage: 'Custom Javascript',
  },
  helper: {
    id: 'admin/checkout-ui.tab.javascript.helper',
    defaultMessage: '// Changes here may impact your sales',
  },
  active: {
    id: 'admin/checkout-ui.toggle.active',
    defaultMessage: 'Active',
  },
})

const Javascript: FC<WrappedComponentProps & any> = ({
  initialState,
  onChange,
  intl,
}) => {
  const [state, setState] = useState<any>({
    value: initialState.value,
    active: initialState.active,
    theme:  true // true for "vs-dark" and false for "vs-light"
  })

  const handleChange = (key: string, value: any) => {
    const newState = { ...state, [key]: value }

    onChange(newState)
    setState(newState)
  }

  const parseText = (text: string) => {
    if (text === null) return ''
    const newText = text.replace(/\\n/g, String.fromCharCode(13))

    return newText
  }

  const handleChangeToggle = (value: any, key: string) => {
    const newState = {
      ...state,
      [key]: value
    }
    setState(newState)
    onChange(newState)
  }


  return (
    <div className="w-100 pa4">

      <div className="flex justify-between items-center">
        <p>{intl.formatMessage(messages.label)}</p>
        <div className="dib">
          <Toggle
            label={state.theme ? "Dark Theme" : "Light Theme"}
            checked={state.theme}
            onChange={() => {
              handleChangeToggle(
                !state.theme,
                'theme'
              )
            }}
          />
        </div>
      </div>

      <Editor
        height="90vh"
        defaultLanguage="javascript"
        defaultValue={intl.formatMessage(messages.helper)}
        theme={state.theme ? "vs-dark" : "vs-light" }
        value={parseText(state.value)}
        onChange={(e: any) => handleChange('value', e)}
      />

      <div className="dn">
        <Textarea
          size="large"
          rows={30}
          value={parseText(state.value)}
          onChange={(e: any) => handleChange('value', e.target.value)}
          label={intl.formatMessage(messages.label)}
          helpText={intl.formatMessage(messages.helper)}
        />
      </div>

      <div className="mt6 dib">
        <Toggle
          label={intl.formatMessage(messages.active)}
          size="large"
          checked={state.active}
          onChange={(e: any) => handleChange('active', e.currentTarget.checked)}
        />
      </div>
    </div>
  )
}

Javascript.propTypes = {
  onChange: PropTypes.func,
  initialState: PropTypes.any,
  intl: PropTypes.any,
}

export default injectIntl(Javascript)
