import SiteNav, {ContentGroup} from 'react-site-nav'
import useWindowSize from './hooks/useWindowSize'

const Navbar = () => {
    const [width, height] = useWindowSize();
    console.log(width, height);
    if (true) {
        return (
            <SiteNav
            align="center" /* center, left, right. This directly maps to justify-content of the root grid. */
            columnWidth="100"
            rowHeight="60"
            background="transparent"
            color="#51D1E0"
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
        <>
            <div className="hidedesktop">
                Hi
            </div>
            <div className="hidedesktop">

            </div>
        </>
    )
}

export default Navbar;