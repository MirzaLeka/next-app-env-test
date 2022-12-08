import axios from 'axios';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NewHome from '../src/components/NewHome';


export default function Home() {

  console.log('APP_HOME [home_page] :>> ', process.env.APP_HOME);
  // console.log('NEWLY_ADDED_ENV_VAR [home_page] :>> ', process.env.NEWLY_ADDED_ENV_VAR);
  // console.log('GLOBAL_ENV_VAR_OS [home_page] :>> ', process.env.GLOBAL_ENV_VAR_OS);
  // console.log('GLOBAL_ENV_VAR_PATH [home_page] :>> ', process.env.GLOBAL_ENV_VAR_PATH);
  console.log('NODE_ENV [home_page] :>> ', process.env.NODE_ENV);


  const downloadPDF = (url) => {
    axios({
      url,
      method: 'GET',
      responseType: 'blob', // important
  }).then((response) => {
      // create file link in browser's memory

      console.log('response.data :>> ', response.data);
      const href = URL.createObjectURL(response.data);

      // create "a" HTML element with href to file & click
      const link = document.createElement('a');
      link.href = href;
      link.setAttribute('download', 'file.pdf'); //or any other extension
      document.body.appendChild(link);
      link.click();

      // clean up "a" element & remove ObjectURL
      document.body.removeChild(link);
      URL.revokeObjectURL(href);
  });
  }

  const getPDFOriginal = () => {
    downloadPDF('/api/pdf');
  }

  const getPDFNew = () => {
    console.log('downloading pdf3 with postinstall ;')
    downloadPDF('/api/pdf3');
  }

  const getPDFNewMonday = () => {
    console.log('downloading pdf5 with Puppeteer')
    downloadPDF('/api/pdf5');
  }

  const getPDFNewTuesday = () => {
    console.log('downloading pdf6 with Puppeteer')
    downloadPDF('/api/pdf6');
  }


  return (
    <div className={styles.container}>
      <Head>
        <title>Hello Next.js App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hello Next.js app
        </h1>

        <p className={styles.description}>
          For purpose of testing env variables
        </p>

      </main>

      <NewHome></NewHome>

      {/* <button onClick={getPDFOriginal}>Get PDF file - Original</button>
      <button onClick={getPDFNew}>Get PDF file - New</button>
      <button onClick={getPDFNewMonday}>Get PDF With Puppeteer</button> */}
      {/* <button onClick={getPDFNewTuesday}>Get PDF With PPT or PPT Core</button> */}

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
