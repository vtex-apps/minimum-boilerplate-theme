/* eslint-disable @typescript-eslint/no-explicit-any */
import type { FC } from 'react'
import React from 'react'
import type { WrappedComponentProps } from 'react-intl'
import { injectIntl, defineMessages, FormattedMessage } from 'react-intl'
import { useQuery, useLazyQuery } from 'react-apollo'
import PropTypes from 'prop-types'
import { Table, Button } from 'vtex.styleguide'

import query from '../queries/getHistory.gql'
import GET_BY_ID from '../queries/getById.gql'

const messages = defineMessages({
  email: {
    id: 'admin/checkout-ui.history.label.email',
    defaultMessage: 'Email',
  },
  workspace: {
    id: 'admin/checkout-ui.history.label.workspace',
    defaultMessage: 'Workspace',
  },
  version: {
    id: 'admin/checkout-ui.history.label.version',
    defaultMessage: 'App version',
  },
  date: {
    id: 'admin/checkout-ui.history.label.date',
    defaultMessage: 'Creation date',
  },
  load: {
    id: 'admin/checkout-ui.history.button.load',
    defaultMessage: 'Load',
  },
})

const History: FC<any & WrappedComponentProps> = ({
  intl,
  onChange,
  initialState,
}: any) => {
  const { loading, data } = useQuery(query)

  const [getConfig, { loading: loadingConfig }] = useLazyQuery(GET_BY_ID, {
    onCompleted: (res: any) => {
      onChange(res.getById)
    },
  })

  const load = (id: string) => {
    getConfig({
      variables: {
        id,
      },
    })
  }

  const customSchema = {
    properties: {
      email: {
        title: intl.formatMessage(messages.email),
        width: 300,
      },
      workspace: {
        title: intl.formatMessage(messages.workspace),
        width: 200,
      },
      appVersion: {
        title: intl.formatMessage(messages.version),
        width: 100,
      },
      creationDate: {
        title: intl.formatMessage(messages.date),
        width: 200,
        // eslint-disable-next-line react/display-name
        cellRenderer: ({ cellData }: any) => {
          const datetime = new Date(parseInt(cellData, 10))

          return (
            <span>
              {intl.formatDate(datetime, {
                day: 'numeric',
                month: 'numeric',
                year: 'numeric',
              })}{' '}
              {intl.formatTime(datetime, {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
              })}
            </span>
          )
        },
      },
      id: {
        title: ' ',
        width: 200,
        // eslint-disable-next-line react/display-name
        cellRenderer: ({ rowData }: any) => {
          return (
            <Button
              variation="tertiary"
              size="small"
              disabled={loadingConfig}
              onClick={() => {
                load(rowData.id)
              }}
            >
              {intl.formatMessage(messages.load)}
            </Button>
          )
        },
      },
    },
  }

  const items = data?.getHistory || []

  return (
    <div className="w-100 pt6">
      <span>
        <FormattedMessage id="admin/checkout-ui.history.help.appversion" />{' '}
        {initialState}
      </span>
      <Table
        fullWidth
        loading={loading}
        schema={customSchema}
        items={items}
        indexColumnLabel="#"
      />
    </div>
  )
}

History.propTypes = {
  onChange: PropTypes.func,
  initialState: PropTypes.any,
}

export default injectIntl(History)
