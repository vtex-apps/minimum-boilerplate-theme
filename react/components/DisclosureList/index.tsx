/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react'
import marked from 'marked'
import styles from './styles.css'
import classNames from 'classnames'

interface Question {
  question: string
  answer: string
}

interface Props {
  questions: Question[]
}

const DisclosureList = ({ questions }: Props) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className={styles['accordtion-list-wrapper']}>
      {questions.map((question, index: number) => (
        <div
          key={question.question}
          className={
            openIndex === index
              ? classNames(styles.accordion, styles.active)
              : styles.accordion
          }
        >
          <div
            className={styles.accordionHeader}
            onClick={() => toggleAccordion(index)}
          >
            <h3>{question.question}</h3>
            <span className={styles.icon}>
              {openIndex === index ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M5 12H19"
                    stroke="#FF5A00"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 5V19"
                    stroke="#FF5A00"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 12H19"
                    stroke="#FF5A00"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </span>
          </div>
          <div
            className={styles.accordionContent}
            dangerouslySetInnerHTML={{
              __html: marked(question.answer),
            }}
          />
        </div>
      ))}
    </div>
  )
}

DisclosureList.schema = {
  title: 'Lista de Perguntas',
  type: 'object',
  properties: {
    questions: {
      title: 'Perguntas e respostas',
      type: 'array',
      items: {
        title: 'Pergunta',
        type: 'object',
        properties: {
          __editorItemTitle: {
            title: 'Pergunta (para organização)',
            type: 'string',
          },
          question: {
            title: 'Pergunta',
            type: 'string',
          },
          answer: {
            title: 'Resposta',
            type: 'string',
            description: 'Utilize markdown para formatar o texto.',
            widget: {
              'ui:widget': 'textarea',
            },
          },
        },
      },
    },
  },
}

export default DisclosureList
