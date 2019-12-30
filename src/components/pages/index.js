import React from 'react'
import DefaultTemplate from 'components/templates/Default'
import Intro from 'components/organisms/Intro'
import Steps from 'components/organisms/Steps'
import Banner from 'components/organisms/Banner'
import Compressor from 'components/organisms/Compressor'

const IndexPage = () => (
  <DefaultTemplate>
    <Intro />
    <Compressor />
    <Steps />
    <Banner />
  </DefaultTemplate>
)

export default IndexPage
