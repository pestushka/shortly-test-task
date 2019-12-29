import React from 'react'
import { Wrapper, Text } from './styles'
import background from 'assets/banner-background.png'
import Button from 'components/atoms/Button'

const Banner = () => (
  <Wrapper background={background}>
    <Text>Boost your links today</Text>
    <Button>Get Started</Button>
  </Wrapper>
)

export default Banner
