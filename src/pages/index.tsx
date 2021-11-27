import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Nicole Analise Cox | Multipassionate technical creative" />
    <h1>I will think of this headline later lol</h1>
    <p>Multipassionate technical creative.</p>
    <StaticImage
      src="../images/nicole-profile.png"
      width={300}
      aspectRatio={1}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem`, borderRadius: `50%` }}
    />
    <p>
      <Link to="/page-2/">About</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link>
    </p>

    
  </Layout>
)

export default IndexPage
