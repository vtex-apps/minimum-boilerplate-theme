import React from 'react'

// @ts-ignore
import { useListContext, ListContextProvider } from 'vtex.list-context'
import TopbarContent from './components/TopbarContent'

const Topbar = ({ items, children }: any) => {
  const { list } = useListContext() || []
  const topbarContentItems = items.map((item: any, index: number) => {
    const { backgroundColor, color, text, active, link } = item
    if (!active) return null

    return (
      <TopbarContent
        key={index}
        backgroundColor={backgroundColor}
        color={color}
        text={text}
        link={link}
      />
    )
  })

  const newListContextValue = list.concat(topbarContentItems)

  return (
    <ListContextProvider list={newListContextValue}>
      {children}
    </ListContextProvider>
  )
}

export default Topbar

Topbar.schema = {
  name: 'Topbar',
  title: 'Lista de opções do Topbar',
  type: 'object',
  properties: {
    showSearchBar: {
      title: 'Mostrar topbar?',
      type: 'boolean',
      default: true,
    },
    items: {
      title: 'Itens do Topbar',
      type: 'array',
      items: {
        type: 'object',
        properties: {
          active: {
            title: 'Mostrar no topbar?',
            type: 'boolean',
            default: true,
          },
          link: {
            title: 'Link',
            type: 'string',
          },
          backgroundColor: {
            title: 'Cor de fundo',
            type: 'string',
            widget: {
              'ui:widget': 'color',
            },
          },
          color: {
            title: 'Cor do texto',
            type: 'string',
            widget: {
              'ui:widget': 'color',
            },
          },
          text: {
            title: 'Texto',
            type: 'string',
          },
        },
      },
    },
  },
}
