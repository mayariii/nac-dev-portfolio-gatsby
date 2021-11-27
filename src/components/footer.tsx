import * as React from "react"
import { FC } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Footer: FC = () => (
  <footer
    style={{
      marginTop: `2rem`,
    }}
  >
    © {new Date().getFullYear()} Nicole Analise Cox
  </footer>
)

export default Footer
