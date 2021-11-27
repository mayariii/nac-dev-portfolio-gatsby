import * as React from "react"
import { FC } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

interface HeaderProps {
  siteTitle: string | null | undefined;
}

const Header: FC<HeaderProps> = ({ siteTitle }) => (
  <header
    style={{
      background: `#100B24`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <p style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </p>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
