import React from "react"
import { Link } from "gatsby"
import headerStyles from "../styles/components/header.module.scss"

export default function Header(props) {
  return (
    <header className={headerStyles.header}>
      <nav
        className={headerStyles.header__nav}
        role="navigation"
        aria-label="main navigation"
      >
        <Link to="/">
          <h1>{props.title}</h1>
        </Link>
      </nav>
    </header>
  )
}
