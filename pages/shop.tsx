import type { NextPage } from 'next'
import Head from 'next/head'
// import Image from 'next/image'
import Navbar from '../components/Navbar'

const Shop: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Shop | Kapic</title>
        <meta name="Shop" content="Purchase digital content from Christopher Kapic." />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar/>

      
    </div>
  )
}

export default Shop;