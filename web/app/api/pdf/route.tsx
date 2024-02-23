import ReactPDF, { Font } from '@react-pdf/renderer';
import DefaultPage from '@/app/page'
import { Page, Document, StyleSheet } from '@react-pdf/renderer';
import Html from 'react-pdf-html';
import { createTw } from "react-pdf-tailwind";


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
    family: 'Roboto',
    fonts: [
        {
            src: './public/fonts/Roboto-Regular.ttf',
        },
        {
            src: './public/fonts/Roboto-Bold.ttf',
            fontWeight: 'bold'
        },
    ]
});


const MyDoc = async () => {
    const ReactDOMServer = (await import('react-dom/server')).default

    const defaultPage = DefaultPage({})
    const html = ReactDOMServer.renderToStaticMarkup(defaultPage);


    const t = <Document>
        <Page
            size="A4"
            style={{ fontFamily: 'Roboto' }}
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
    return (t
    )
}

export async function GET(req: Request) {
    const myDoc = await MyDoc()

    const pdfStream = await ReactPDF.renderToStream(myDoc);

    return new Response(pdfStream as unknown as BodyInit, {
        headers: {
            'Content-Type': 'application/pdf',
        }
    })
}