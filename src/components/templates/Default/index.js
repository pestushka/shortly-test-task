import React from 'react'
import Header from 'components/organisms/Header'
import Footer from 'components/organisms/Footer'
import { Wrapper, Content } from './styles'

const DefaultTemplate = ({ children }) => (
  <Wrapper>
    <Header />
    <Content>{children}</Content>
    <Footer />
  </Wrapper>
)

export default DefaultTemplate
