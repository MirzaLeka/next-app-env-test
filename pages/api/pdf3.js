import { htmlToPdf } from 'convert-to-pdf';
import { renderToStaticMarkup } from 'react-dom/server'

const generatePDF = async (
  component, options2
) => {

    const document = renderToStaticMarkup(component);


    const options = {
        // template options
        template: {
          type: 'CONTENT', // If the template in in the form of a file
          content: `
          <!DOCTYPE html>
            <html>
            <head>
                <meta charset='utf-8'>
                <meta http-equiv='X-UA-Compatible' content='IE=edge'>
                <title>Page Title</title>
                <meta name='viewport' content='width=device-width, initial-scale=1'>
            </head>
            <body>
                ${document}
            </body>
          </html>
      `,
        //   css: {
        //     type: 'CONTENT',
        //     content: `
        //       h1 {
        //         color: #f00;
        //       }
        //     `,
        //   },
        },
        // data to render on the template
        data: {
          name: 'John Doe',
        },
        // additional data, used here as translations key/value
        additionalData: {
          resourceType: 'CONTENT',
          data: {
            HELLO: 'Hej',
          },
        },
      };

    return htmlToPdf(options)
}

export default async function handler(req, res) {
  const html = <h1>Hello World!</h1>;
  const options = {
    format: 'A4',
    orientation: 'portrait',
    border: '10mm',
    type: 'pdf',
    timeout: 100000,
  }

  const pageName = 123;

  const buffer = await generatePDF(html, options);

  res.setHeader(
    "Content-disposition",
    `attachment; filename=Platforma - ${pageName}.pdf`
  );
  res.setHeader("Content-Type", "application/pdf");
  res.end(buffer);
}
