import React from 'react'
import Section from 'components/atoms/Section'
import Button from 'components/atoms/Button'
import { Content, Heading, ImageWrapper, Image, Text, Wrapper } from './styles'
import image from 'assets/svg/intro-image.svg'

const Intro = () => (
  <Section>
    <Wrapper>
      <ImageWrapper>
        <Image src={image} alt="intro image" />
      </ImageWrapper>
      <Content>
        <Heading>More than just  shorter links</Heading>
        <Text>
          Build your brand’s recognition and get detailed insights on how your links are performing.
        </Text>
        <Button>Get Started</Button>
      </Content>
    </Wrapper>
  </Section>
)

export default Intro
