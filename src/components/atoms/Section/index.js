import React from 'react'
import { Content } from './styles'

const Section = ({ children, ...props }) => (
  <section {...props}>
    <Content>{children}</Content>
  </section>
)

export default Section
