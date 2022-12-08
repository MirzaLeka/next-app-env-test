// import { renderToStaticMarkup } from "react-dom/server";

// export default async function handler(req, res) {
//   const html = <h1>Hello World!</h1>;
// //   const options = {
// //     format: "A4",
// //     orientation: "portrait",
// //     border: "10mm",
// //     type: "pdf",
// //     timeout: 100000,
// //   };

//   const pageName = 123;

//   const isProd = process.env.NODE_ENV === "production";
//   let puppeteer;

//   const document = renderToStaticMarkup(html);

//   console.log("isProd :>> ", isProd);

//   if (isProd) {
//     puppeteer = require("puppeteer-core");

//     const chrome = require("chrome-aws-lambda");

//     const options = {
//       args: [...chrome.args, "--hide-scrollbars", "--disable-web-security"],
//       defaultViewport: chrome.defaultViewport,
//       executablePath: await chrome.executablePath,
//       headless: true,
//       ignoreHTTPSErrors: true,
//     };

//     try {
//       let browser = await puppeteer.launch(options);

//       let page = await browser.newPage();

//       await page.setContent(document, {
//         waitUntil: ["load", "networkidle0"],
//       });

//       const buffer = await page.pdf({ format: "A4" });

//       res.setHeader(
//         "Content-disposition",
//         `attachment; filename=Platforma - ${pageName}.pdf`
//       );
//       res.setHeader("Content-Type", "application/pdf");
//       res.end(buffer);
//     } catch (e) {
//         res.status(500).send({
//             exception: e.message,
//             statusCode: 500,
//             message: "Unable to generate PDF with ppt-core",
//           });
//     }
//   } else {
//     puppeteer = require("puppeteer");

//     try {
//       const browser = await puppeteer.launch();
//       const page = await browser.newPage();

//       await page.setContent(document, {
//         waitUntil: ["load", "networkidle0"],
//       });

//       const buffer = await page.pdf({ format: "A4" });

//       res.setHeader(
//         "Content-disposition",
//         `attachment; filename=Platforma - ${pageName}.pdf`
//       );
//       res.setHeader("Content-Type", "application/pdf");
//       res.end(buffer);

//     } catch (e) {
//       res.status(500).send({
//         exception: e.message,
//         statusCode: 500,
//         message: "Unable to generate PDF with ppt",
//       });
//     }
//   }

// }
