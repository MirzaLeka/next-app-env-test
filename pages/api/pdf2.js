import html_to_pdf from "html-pdf-node";
import { renderToStaticMarkup } from 'react-dom/server'
import fs from 'fs'
const path = require('path')

const generatePDF = async (
  component, options
) => {

    try {
        // const html = renderToStaticMarkup(component)

        fs.writeFileSync('content.html', renderToStaticMarkup(component))

        const htmlFilePath = path.join(__dirname, '../../../', 'content.html');

        console.log('htmlFilePath :>> ', htmlFilePath);

        var parts = [
            new Blob(['you construct a file...'], {type: 'text/html'}),
            ' Same way as you do with blob',
            new Uint16Array([33])
          ];

        var file = new File(parts, 'sample.html', {
            lastModified: new Date(0), // optional - default = now
            type: "overide/mimetype" // optional - default = ''
        });

        console.log('html :>> ', file);

        const data = await html_to_pdf.generatePdf(htmlFilePath, options)

        console.log('data :>> ', data);

        return data;
    } catch (e) {
        return null;
    }

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

  console.log('buffer :>> ', buffer);

  res.setHeader(
    "Content-disposition",
    `attachment; filename=Platforma - ${pageName}.pdf`
  );
  res.setHeader("Content-Type", "application/pdf");
  res.end(buffer);
}
