// import * as htmlPdf from 'html-pdf-chrome';
// import { renderToStaticMarkup } from 'react-dom/server'
// import puppeteer from 'puppeteer'

// const generatePDF = async (
//   component, options2
// ) => {

//     const document = renderToStaticMarkup(component);

//     const site = 'https://test01.uradinesto.ba/jobs/tugabrate/dsoqa-rx' // http://localhost:3000

//     const browser = await puppeteer.launch()
//     const page = await browser.newPage()
//     await page.setViewport({ width: 1920, height: 1080 });

//     await page.setContent(document, {
//       waitUntil: ["load","networkidle0"]
//     });

//     const pdfBuffer = await page.pdf({ format: 'A4' })

//     return pdfBuffer;

// }

// export default async function handler(req, res) {
//   const html = <h1>Hello World!</h1>;
//   const options = {
//     format: 'A4',
//     orientation: 'portrait',
//     border: '10mm',
//     type: 'pdf',
//     timeout: 100000,
//   }

//   const pageName = 123;

//   const buffer = await generatePDF(html, options);

//   res.setHeader(
//     "Content-disposition",
//     `attachment; filename=Platforma - ${pageName}.pdf`
//   );
//   res.setHeader("Content-Type", "application/pdf");
//   res.end(buffer);
// }

export default async function handler(req, res) {
  res.send('This API is obsolete')
}