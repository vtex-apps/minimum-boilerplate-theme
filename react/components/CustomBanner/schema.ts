export const BANNER_SCHEMA = {
  type: 'object',
  properties: {
    items: {
      title: 'Banners',
      type: 'array',
      items: {
        title: 'Banner',
        type: 'object',
        properties: {
          __editorItemTitle: {
            title: 'Nome do banner (para organização)',
            type: 'string',
          },
          visible: {
            title: 'Visível',
            type: 'boolean',
            default: true,
          },
          image: {
            title: 'Imagem DESKTOP',
            type: 'string',
            widget: {
              'ui:widget': 'image-uploader',
            },
          },
          imageMobile: {
            title: 'Imagem MOBILE',
            type: 'string',
            widget: {
              'ui:widget': 'image-uploader',
            },
          },
          itemLink: {
            title: 'Link',
            type: 'string',
            default: '',
          },
          initialDate: {
            title: 'Data Inicial',
            type: 'string',
            widget: {
              'ui:widget': 'date-time',
            },
            default: '',
          },
          finalDate: {
            title: 'Data Final',
            type: 'string',
            widget: {
              'ui:widget': 'date-time',
            },
            default: '',
          },
        },
      },
    },
  },
}
