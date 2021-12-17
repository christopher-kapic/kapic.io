import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import useWindowSize from '../components/hooks/useWindowSize'

export default function Home() {
  const [width, height] = useWindowSize();
  return (
    <>
    <div className={styles.container}>
      <Head>
        <title>Christopher Kapic</title>
        <meta name="description" content="Personal website for Christopher Kapic, DevOps engineer, software developer (and drone pilot)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      { (width > 768 ) ? 
      <>
        <h1 className={styles.title}>
          <a href="/">
            Christopher Kapic
          </a>
        </h1>
        <Navbar/>
      </> : 
        <Navbar />
      }
    </div>
    </>
  )
}
