import { Font } from '@react-pdf/renderer';
import { Page, Document, StyleSheet } from '@react-pdf/renderer';
import Html from 'react-pdf-html';
import { createTw } from "react-pdf-tailwind";

export interface ResumePageProps {
  isPdf: boolean
}

export type ResumePage = ({ isPdf }: ResumePageProps) => JSX.Element

const tw = createTw({
  theme: {
    extend: {
      colors: {
        custom: "cornflowerblue",
      },
    },
  },
});

Font.register({
  family: 'Arial',
  fonts: [
    {
      src: './public/fonts/Arial/ARIAL.ttf',
    },
    {
      src: './public/fonts/Arial/ARIALBD.ttf',
      fontWeight: 'bold'
    },
  ]
});

export default async function MyDoc(resumePage: ResumePage) {
  const ReactDOMServer = (await import('react-dom/server')).default

  const defaultPage = resumePage({ isPdf: true })
  const html = ReactDOMServer.renderToStaticMarkup(defaultPage);

  const t = <Document>
    <Page
      size="A4"
      style={{ fontFamily: 'Arial' }}
    >
      <Html
        resetStyles
        stylesheet={StyleSheet.create({
          li: {
            paddingBottom: 4
          },
          li_bullet: {
            width: 0,
            paddingRight: 8,
            display: 'flex'
          },
          a: {
            textDecoration: "none"
          }
        })}
        classNameRenderer={tw}
      >
        {html}
      </Html>
    </Page>
  </Document >
  return (t)
}