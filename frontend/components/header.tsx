import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { VerticalSpace } from './common'
const Logo = require('../images/logo.svg') as string

const Highlights = styled.p`
  font-style: italic;
`

export default function Header() {
  return (
    <section>
      <Link to="/">
        <Logo />
      </Link>

      <VerticalSpace />

      <Highlights>
        Pixel-perfect &nbsp; Retina-ready &nbsp; Fast &nbsp; Consistent &nbsp;
        Hackable &nbsp; No tracking
      </Highlights>
    </section>
  )
}
