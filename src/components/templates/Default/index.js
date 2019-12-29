import React from 'react'
import Header from 'components/organisms/Header'
import Footer from 'components/organisms/Footer'

const DefaultTemplate = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
)

export default DefaultTemplate
