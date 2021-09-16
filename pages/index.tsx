import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import profilePic from '../public/prof_neon.png'
import styles from '../styles/Home.module.css'



const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Christopher Kapic</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
        <script src="particles.js"></script>
      </Head>
      <Navbar/>

      <div className={styles.hero} id="particles-js"> {/* Hero Section */}
        <div style={{width: "100%", height: 300, display: "flex", justifyContent: "center"}}>
          <Image src={profilePic} alt="Picture of Christopher Kapic" height={300} width={300}/>
        </div>
        <h1>Christopher Kapic</h1>
        <h4>Web Developer • Student • Drone Pilot</h4>
        <p>Hi, I'm Christopher, a student at Northwestern University ('21, graduating in December). To get to know me, I encourage you to explore my website or check out my <a href="https://blog.kapic.io">blog</a>.</p>
      </div>

      
    </div>
  )
}

export default Home
