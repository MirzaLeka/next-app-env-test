import htmlPDF from "html-pdf";
import { renderToStaticMarkup } from 'react-dom/server'

const generatePDF = (
  component, options
) => {
  return new Promise((resolve, reject) => {
    const html = renderToStaticMarkup(component)

    htmlPDF.create(html).toBuffer((err, buffer) => {
      if (err) {
        console.error('Unable to create PDF from HTML');
        console.error(err);
        return reject(err)
      }

      console.log('All good. Received buffer')
      return resolve(buffer)
    })
  })
}
export default async function handler(req, res) {
  const html = <h1>Hello World!</h1>;
  const options = {
    format: 'A4',
    orientation: 'portrait',
    border: '10mm',
    type: 'pdf',
    timeout: 100_000,
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