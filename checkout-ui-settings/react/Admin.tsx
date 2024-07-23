/* eslint-disable @typescript-eslint/no-explicit-any */
import type { FC } from 'react'
import React, { useState } from 'react'
import type { WrappedComponentProps } from 'react-intl'
import { injectIntl, defineMessages, FormattedMessage } from 'react-intl'
import { compose, graphql, useMutation, useQuery } from 'react-apollo'
import {
  Alert,
  Tabs,
  Tab,
  Layout,
  PageBlock,
  PageHeader,
  Button,
  Spinner,
  Modal,
  IconCheck,
  IconDeny,
  ModalDialog,
  Progress,
} from 'vtex.styleguide'
import { useRuntime } from 'vtex.render-runtime'
import sessionQuery from 'vtex.store-resources/QuerySession'

import Colors from './components/Colors'
import LayoutSettings from './components/Layout'
import Javascript from './components/Javascript'
import Css from './components/Css'
import History from './components/History'
import saveMutation from './mutations/saveConfiguration.gql'
import GET_LAST from './queries/getLast.gql'
import GET_CONFIG from './queries/getConfig.gql'

const messages = defineMessages({
  title: {
    id: 'admin/checkout-ui.title',
    defaultMessage: 'Checkout custom interface',
  },
})

const defaultConfiguration = {
  colors: {
    base: '#f4f2f2',
    baseInverted: '#21364f',
    actionPrimary: '#1a73e8',
    actionPrimaryDarken: '#1d63be',
    actionSecondary: '#f1f7ff',
    emphasis: '#000000',
    disabled: '#999999',
    success: '#2fba2d',
    successDarken: '#269e24',
    successFaded: '#beffa5',
    danger: '#ff4c4c',
    dangerFaded: '#ffe6e6',
    warning: '#ffb100',
    warningFaded: '#fff6e0',
    muted1: '#323232',
    muted2: '#676767',
    muted3: '#999999',
    muted4: '#cbcbcb',
    muted5: '#eeeeee',
    muted6: '#f3f3f3',
  },
  layout: {
    type: 'vertical',
    accordionPayments: false,
    deliveryDateFormat: false,
    showCartQuantityPrice: false,
    showNoteField: false,
    hideEmailStep: true,
    customAddressForm: false,
    fontSize: '12px',
    borderRadius: '4px',
    btnBorderRadius: '30px',
    maxWrapper: '980px',
    inputHeight: '40px',
    bordersContainers: 'none',
    fontFamily: '"Roboto", sans-serif',
  },
  css: '',
  javascript: '',
  javascriptActive: false,
  cssActive: false,
}

let email = window.localStorage.getItem('adminEmail') ?? null
let initialLoad = false

const Admin: FC<any & WrappedComponentProps> = ({
  intl,
  session,
  config,
}: any) => {
  const { workspace, production } = useRuntime()

  const [state, setState] = useState<any>({
    ...defaultConfiguration,
    currentTab: 0,
    isModalOpen: false,
    isDialogOpen: false,
    showCloseIcon: false,
    workspace,
    appVersion: null,
    publishedVersion: null,
  })

  const [
    saveConfig,
    { loading: loadingSave, called: calledSave, error: errorSave },
  ] = useMutation(saveMutation, {
    onCompleted: () => {
      setTimeout(() => {
        setState({
          ...state,
          isModalOpen: false,
        })
      }, 3000)
    },
  })

  const { loading: loadingLast } = useQuery(GET_LAST, {
    variables: {
      workspace,
    },
    skip: initialLoad,
    onCompleted: (res: any) => {
      initialLoad = true
      setState({
        ...state,
        ...res.getLast,
        publishedVersion: res.getLast.appVersion,
        appVersion: config?.getSetupConfig?.adminSetup?.appVersion || '',
        currentTab: 1,
        colors: {
          ...state.colors,
          ...res.getLast.colors,
        },
        layout: {
          ...state.layout,
          ...res.getLast.layout,
        },
      })
    },
  })

  if (session?.getSession?.adminUserEmail) {
    window.localStorage.setItem('adminEmail', session.getSession.adminUserEmail)
    email = session.getSession.adminUserEmail
  }

  if (
    config?.getSetupConfig?.adminSetup?.appVersion &&
    state.appVersion === null
  ) {
    setState({
      ...state,
      appVersion: config.getSetupConfig.adminSetup.appVersion,
    })
  }

  const handleLayoutChange = (layout: any) => {
    setState({
      ...state,
      layout,
    })
  }

  const handleColorsChange = (colors: any) => {
    setState({
      ...state,
      colors,
    })
  }

  const handleCssChange = ({ value: css, active: cssActive }: any) => {
    setState({
      ...state,
      css,
      cssActive,
    })
  }

  const handleJSChange = ({
    value: javascript,
    active: javascriptActive,
  }: any) => {
    setState({
      ...state,
      javascript,
      javascriptActive,
    })
  }

  const handleLoad = ({
    javascript,
    css,
    layout,
    colors,
    javascriptActive,
    cssActive,
  }: any) => {
    setState({
      ...state,
      currentTab: 1,
      layout,
      colors,
      css,
      javascript,
      javascriptActive,
      cssActive,
    })
  }

  const publish = () => {
    setState({
      ...state,
      isModalOpen: true,
      isDialogOpen: false,
    })

    if (email) {
      saveConfig({
        variables: {
          email,
          workspace: state.workspace,
          layout: state.layout,
          colors: state.colors,
          css: state.css,
          javascript: state.javascript,
          javascriptActive: state.javascriptActive || false,
          cssActive: state.cssActive || false,
        },
      })
    }
  }

  const handlePublish = () => {
    if (production) {
      setState({
        ...state,
        isDialogOpen: true,
      })
    } else {
      publish()
    }
  }

  const handleModalClose = () => {
    setState({
      ...state,
      isModalOpen: false,
    })
  }

  const handlePublishDialog = () => {
    publish()
  }

  const handleCancelDialog = () => {
    setState({
      ...state,
      isDialogOpen: false,
    })
  }

  const handleDialogClose = () => {
    handleCancelDialog()
  }

  const changeTabTo = (currentTab: number) => {
    setState({
      ...state,
      currentTab,
    })
  }

  return (
    <Layout
      fullWidth
      pageHeader={
        <PageHeader title={intl.formatMessage(messages.title)}>
          <span className="mr4">
            <div className="flex items-center">
              <div className="ma3">
                <Button
                  variation="primary"
                  disabled={loadingLast}
                  onClick={() => {
                    handlePublish()
                  }}
                >
                  <FormattedMessage id="admin/checkout-ui.button.publish" />
                </Button>
              </div>
            </div>
          </span>
        </PageHeader>
      }
    >
      <PageBlock>
        {loadingLast && <Progress type="steps" steps={['inProgress']} />}
        {!loadingLast && (
          <>
            {state.appVersion &&
              state.publishedVersion &&
              state.appVersion !== state.publishedVersion && (
                <Alert type="warning">
                  <FormattedMessage id="admin/checkout-ui.update-warning" />
                </Alert>
              )}
            <Tabs fullWidth>
              <Tab
                label={intl.formatMessage({
                  id: 'admin/checkout-ui.tab.layout',
                })}
                active={state.currentTab === 1}
                onClick={() => {
                  changeTabTo(1)
                }}
              >
                <LayoutSettings
                  onChange={handleLayoutChange}
                  initialState={state.layout}
                />
              </Tab>
              <Tab
                label={intl.formatMessage({
                  id: 'admin/checkout-ui.tab.colors',
                })}
                active={state.currentTab === 2}
                onClick={() => {
                  changeTabTo(2)
                }}
              >
                <Colors
                  onChange={handleColorsChange}
                  initialState={state.colors}
                />
              </Tab>
              <Tab
                label={intl.formatMessage({
                  id: 'admin/checkout-ui.tab.javascript',
                })}
                active={state.currentTab === 3}
                onClick={() => {
                  changeTabTo(3)
                }}
              >
                <Javascript
                  onChange={handleJSChange}
                  initialState={{
                    value: state.javascript,
                    active: state.javascriptActive,
                  }}
                />
              </Tab>
              <Tab
                label={intl.formatMessage({
                  id: 'admin/checkout-ui.tab.css',
                })}
                active={state.currentTab === 4}
                onClick={() => {
                  changeTabTo(4)
                }}
              >
                <Css
                  onChange={handleCssChange}
                  initialState={{
                    value: state.css,
                    active: state.cssActive,
                  }}
                />
              </Tab>
              <Tab
                label={intl.formatMessage({
                  id: 'admin/checkout-ui.tab.history',
                })}
                active={state.currentTab === 5}
                onClick={() => {
                  changeTabTo(5)
                }}
              >
                <History
                  onChange={handleLoad}
                  initialState={state.appVersion}
                />
              </Tab>
            </Tabs>
          </>
        )}
        <Modal
          centered
          isOpen={state.isModalOpen}
          showCloseIcon={state.showCloseIcon}
          onClose={() => {
            handleModalClose()
          }}
        >
          <div className="dark-gray">
            <ul className="list pl0">
              <li>
                <span className="w-100 mw1 dib">
                  {loadingSave === true && <Spinner size={12} />}
                  {loadingSave === false &&
                    calledSave === true &&
                    !errorSave && <IconCheck size={12} />}
                  {errorSave && <IconDeny size={12} />}
                  {calledSave === false && !errorSave && <span>-</span>}
                </span>{' '}
                {loadingSave === false && calledSave === true && !errorSave && (
                  <FormattedMessage id="admin/checkout-ui.message.published" />
                )}
                {loadingSave === true && (
                  <FormattedMessage id="admin/checkout-ui.message.publishing" />
                )}{' '}
                <strong>{state.workspace}</strong>
              </li>
            </ul>
          </div>
        </Modal>
      </PageBlock>
      <ModalDialog
        centered
        confirmation={{
          onClick: handlePublishDialog,
          label: intl.formatMessage({
            id: 'admin/checkout-ui.publish.confirm',
          }),
        }}
        cancelation={{
          onClick: handleCancelDialog,
          label: intl.formatMessage({
            id: 'admin/checkout-ui.publish.cancel',
          }),
        }}
        isOpen={state.isDialogOpen}
        onClose={handleDialogClose}
      >
        <p>
          <FormattedMessage id="admin/checkout-ui.publish.warning" />
        </p>
      </ModalDialog>
    </Layout>
  )
}

const optionsSession = {
  name: 'session',
  skip: email !== null,
  options: () => ({
    ssr: false,
  }),
}

const optionsConfig = {
  name: 'config',
  options: () => ({
    ssr: false,
  }),
}

export default injectIntl(
  compose(
    graphql(sessionQuery, optionsSession),
    graphql(GET_CONFIG, optionsConfig)
  )(Admin)
)
