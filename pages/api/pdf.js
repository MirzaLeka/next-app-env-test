import htmlPDF from "html-pdf";
import { renderToStaticMarkup } from 'react-dom/server'

const generatePDF = (
  component, options
) => {
  return new Promise((resolve, reject) => {
    const html = renderToStaticMarkup(component)

    htmlPDF.create(html, options).toBuffer((err, buffer) => {
      if (err) {
        return reject(err)
      }

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
