import React from 'react'
import { Wrapper, Text } from './styles'
import Button from 'components/atoms/Button'
import background from 'assets/banner-background.png'

const Banner = () => (
  <Wrapper background={background}>
    <Text>Boost your links today</Text>
    <Button>Get Started</Button>
  </Wrapper>
)

export default Banner
