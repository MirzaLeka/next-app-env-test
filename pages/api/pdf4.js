import * as htmlPdf from 'html-pdf-chrome';
import { renderToStaticMarkup } from 'react-dom/server'

const generatePDF = async (
  component, options2
) => {

    const document = renderToStaticMarkup(component);

    // ! Fails to Start Chrome
    const options = {
        port: 9222, // port Chrome is listening on
      };

    return htmlPdf.create(document, options).then((pdf) => pdf.toBuffer());

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
