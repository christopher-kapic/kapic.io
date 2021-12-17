import SiteNav, {ContentGroup} from 'react-site-nav'
import styles from '../styles/Navbar.module.css'
import useWindowSize from './hooks/useWindowSize'
import { useState } from 'react'

const Navbar = () => {
    const [width, height] = useWindowSize();
    const [isOpen, setIsOpen] = useState(false);

    if (width > 768) {
        return (
            <SiteNav
                align="center" /* center, left, right. This directly maps to justify-content of the root grid. */
                columnWidth="100"
                rowHeight="60"
                background="transparent"
                color="#dddddd"
                fontSize="18"
                fontFamily="Helvetica, sans-serif"
                contentBackground="#fff" /* Applies to all content groups */
                contentColor="#323232" /* Applies to all content groups */
                contentTop="0" /* Adjusts the distance between ContentGroups and root items */
                breakpoint="768" /* Show site nav at this breakpoint */
                debug={false}
            >
                <ContentGroup
                    title="Portfolio" 
                    width="420"
                    height="270"
                    rootUrl="/portfolio" /* Optional. Render root item as a link */
                    background="#ddd"
                >
                    <ul>
                        <li><a href="/portfolio/websites">Websites</a></li>
                        <li><a href="/portfolio/videos">Videos</a></li>
                        <li><a href="/portfolio/resume">Resume</a></li>
                    </ul>
                </ContentGroup>
                <ContentGroup
                    title="Blog"
                    height="200"
                    rootUrl="/blog"
                    background="#ddd"
                >
                </ContentGroup>
                <ContentGroup
                    title="Socials" 
                    height="100"
                    width="400"
                    rootUrl="/socials"
                    background="#ddd"
                >
                    <ul>
                        <li><a href="https://mastodon.kapic.io/@christopher">Mastodon</a></li>
                    </ul>
                </ContentGroup>
            </SiteNav>
        )
    }

    return (
        <div style={{justifyContent: 'space-between', display: 'flex', padding: '20px 0px 20px 0px', alignContent: 'space-between', alignItems: 'center'}}>
            {/* <div style={{padding: 0, margin: 0}}> */}
                <a style={{color: '#fff', fontSize: 24, background: '-webkit-linear-gradient(45deg, #596ee3, #a751e0)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}} href="/">
                    Christopher Kapic
                </a>
            {/* </div> */}
            <div style={{backgroundColor: 'rgba(89, 110, 227, 0.5)', borderRadius: 15, height: 30, width: 40, margin: 0, cursor: 'pointer'}}
                onClick={() => {setIsOpen(!isOpen)}}>
                <div style={{width: 20, height: 3, backgroundColor: '#bbb', margin: '8px 10px 2px 10px', borderRadius: 1}}></div>
                <div style={{width: 20, height: 3, backgroundColor: '#bbb', margin: '2px 10px 2px 10px', borderRadius: 1}}></div>
                <div style={{width: 20, height: 3, backgroundColor: '#bbb', margin: '2px 10px 8px 10px', borderRadius: 1}}></div>
            </div>
            {(isOpen) ? 
                <div style={{width: 'calc(100vw - 32px)', position: 'fixed', backgroundColor: '#ddd', top: 16, left: 16, borderRadius: 8}}>
                    <div style={{width: '100%', height: 30, padding: 4, justifyContent: 'right', display: 'flex', cursor: 'pointer'}}>
                        <div style={{width: 40, height: 30, backgroundColor: '#06033477', borderRadius: 15}}
                        onClick={() => {setIsOpen(!isOpen)}}>
                            <div style={{width: 20, height: 3, backgroundColor: '#bbb', margin: '8px 10px 2px 10px', borderRadius: 1, transform: 'rotate(135deg)', position: 'absolute', top: 10}}></div>
                            <div style={{width: 20, height: 3, backgroundColor: '#bbb', margin: '8px 10px 2px 10px', borderRadius: 1, transform: 'rotate(45deg)', position: 'absolute', top: 10}}></div>
                        </div>
                    </div>

                    <div style={{padding: '0px 20px 20px 20px',}}>
                        <h1 style={{fontSize: 24, padding: 0, margin: 0, color: '#07054A'}}><a href="/portfolio">Portfolio</a></h1>
                        <h4 style={{fontSize: 16, padding: "8px 0px 8px 12px", margin: 0, color: '#07054A'}}><a href="/websites">Websites</a></h4>
                        <h4 style={{fontSize: 16, padding: "8px 0px 8px 12px", margin: 0, color: '#07054A'}}><a href="/videos">Videos</a></h4>
                        <h4 style={{fontSize: 16, padding: "8px 0px 8px 12px", margin: 0, color: '#07054A'}}><a href="/resume">Resume</a></h4>
                    </div>

                    <div style={{padding: '0px 20px 20px 20px',}}>
                        <h1 style={{fontSize: 24, padding: 0, margin: 0, color: '#07054A'}}><a href="/blog">Blog</a></h1>
                    </div>
                    <div style={{padding: '0px 20px 20px 20px',}}>
                        <h1 style={{fontSize: 24, padding: 0, margin: 0, color: '#07054A'}}><a href="/links">Socials</a></h1>
                    </div>

                </div> : <></>}
        </div>
    )
}

export default Navbar;