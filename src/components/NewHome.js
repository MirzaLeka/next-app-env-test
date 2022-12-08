import PDFFile from "./PDFFile";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { useState, useEffect } from "react";

const NewHome = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      Hello
      {isClient && (
        <PDFDownloadLink document={<PDFFile />} filename="FORM">
          {({ loading }) =>
            loading ? (
              <button>Loading Document...</button>
            ) : (
              <button>Download via React PDF REnderer</button>
            )
          }
        </PDFDownloadLink>
      )}
    </>
  );
};

export default NewHome;
