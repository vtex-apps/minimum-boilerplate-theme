export const MENU_SCHEMA = {
  title: 'Menu Customizado',
  type: 'object',
  properties: {
    departments: {
      title: 'Departamentos',
      type: 'array',
      items: {
        title: 'Departamento',
        type: 'object',
        properties: {
          __editorItemTitle: {
            title: 'Nome do Departamento (para organização)',
            type: 'string',
          },
          name: {
            title: 'Nome do Departamento',
            type: 'string',
          },
          link: {
            title: 'Link do Departamento',
            type: 'string',
          },
          departmentImageDesktop: {
            type: 'object',
            properties: {
              src: {
                title: 'Imagem do departamento - Desktop',
                type: 'string',
                widget: {
                  'ui:widget': 'image-uploader',
                },
              },
            },
          },
          departmentThumbImageMobile: {
            type: 'object',
            properties: {
              src: {
                title: 'Thumb do departamento - Mobile',
                type: 'string',
                widget: {
                  'ui:widget': 'image-uploader',
                },
              },
            },
          },
          departmentImageMobile: {
            type: 'object',
            properties: {
              src: {
                title: 'Imagem do departamento - Mobile',
                type: 'string',
                widget: {
                  'ui:widget': 'image-uploader',
                },
              },
            },
          },
          categories: {
            title: 'Categorias',
            type: 'array',
            items: {
              title: 'Categoria',
              type: 'object',
              properties: {
                __editorItemTitle: {
                  title: 'Nome da Categoria (para organização)',
                  type: 'string',
                },
                name: {
                  title: 'Nome da Categoria',
                  type: 'string',
                },
                link: {
                  title: 'Link da Categoria',
                  type: 'string',
                },
              },
            },
          },
        },
      },
    },
    staticLink: {
      title: 'Link estático',
      type: 'object',
      properties: {
        active: {
          title: 'Departamento estático ativo',
          type: 'boolean',
        },
        name: {
          title: 'Nome do Departamento',
          type: 'string',
        },
        link: {
          title: 'Link do Departamento',
          type: 'string',
        },
        color: {
          title: 'Cor do texto',
          type: 'string',
          widget: {
            'ui:widget': 'color',
          },
        },
        backgroundColor: {
          title: 'Cor de fundo',
          type: 'string',
          widget: {
            'ui:widget': 'color',
          },
        },
      },
    },
  },
}
