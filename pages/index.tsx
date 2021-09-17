import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import profilePic from '../public/prof_neon.png'
import styles from '../styles/Home.module.css'

import Particles from "react-tsparticles";

import react_logo from '../public/tools/react.png'
import node_logo from '../public/tools/nodejs.png'
import typescript_logo from '../public/tools/typescript.png'
import python_logo from '../public/tools/python.png'
import postgres_logo from '../public/tools/postgres.png'
import redis_logo from '../public/tools/redis.svg'
import netlify_logo from '../public/tools/netlify.png'
import firebase_logo from '../public/tools/firebase.png'
import supabase_logo from '../public/tools/supabase.png'
import vultr_logo from '../public/tools/vultr.png'
import reactbootstrap_logo from '../public/tools/react-bootstrap.svg'



const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Christopher Kapic</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar/>

      <div className={styles.hero}> {/* Hero Section */}
        <div style={{width: "100%", height: 300, display: "flex", justifyContent: "center"}}>
          <div className={styles.profile_pic}>
            <Image src={profilePic} alt="Picture of Christopher Kapic" height={300} width={300}/>
          </div>
        </div>
        <h1 style={{zIndex: 2, paddingTop: 12}}>Christopher Kapic</h1>
        <h4 style={{zIndex: 2}}>Web Developer • Student • Drone Pilot</h4>
        <p style={{zIndex: 2}}>Hi, I&apos;m Christopher, a student at Northwestern University (&apos;21, graduating in December). To get to know me, I encourage you to explore my website or check out my <a href="https://blog.kapic.io">blog</a> or my <a href="https://cdn.jsdelivr.net/gh/christopher-kapic/christopher-kapic/resumes/resume%5B1%5D.pdf">resume</a>.</p>
        <h5 style={{zIndex: 2}}>My toolset:</h5>
        <div className={styles.toolset}>
          <div className={styles.tool}>
            <Image src={react_logo} alt="React" layout="fixed" height={108} width={121}/>
          </div>
          <div className={styles.tool}>
            <Image src={reactbootstrap_logo} alt="React-Bootstrap" layout="fixed" height={108} width={113}/>
          </div>
          <div className={styles.tool}>
            <Image src={typescript_logo} alt="Typescript" layout="fixed" height={108} width={108}/>
          </div>
          <div className={styles.tool}>
            <Image src={node_logo} alt="NodeJS" layout="fixed" height={108} width={98}/>
          </div>
          <div className={styles.tool}>
            <Image src={postgres_logo} alt="PostgreSQL" layout="fixed" height={108} width={108}/>
          </div>
          <div className={styles.tool}>
            <Image src={redis_logo} alt="Redis" layout="fixed" height={108} width={126}/>
          </div>
          <div className={styles.tool}>
            <Image src={python_logo} alt="Python" layout="fixed" height={108} width={108}/>
          </div>
          <div className={styles.tool}>
            <Image src={netlify_logo} alt="Netlify" layout="fixed" height={108} width={108}/>
          </div>
          <div className={styles.tool}>
            <Image src={firebase_logo} alt="Firebase" layout="fixed" height={108} width={79}/>
          </div>
          <div className={styles.tool}>
            <Image src={vultr_logo} alt="Vultr" layout="fixed" height={108} width={108}/>
          </div>
          <div className={styles.tool}>
            <Image src={supabase_logo} alt="Supabase" layout="fixed" height={108} width={108}/>
          </div>
        </div>
      </div>
      <Particles 
        id="tsparticles"
        url="/particles.json"
        init={() => console.log('Initializing particles...')}
        loaded={() => console.log('Particles loaded.')}
        className={styles.particleswrapper}
        canvasClassName={styles.particles}
      />

      
    </div>
  )
}

export default Home
