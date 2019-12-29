import React from 'react'
import {
  SectionWrapper,
  Caption,
  Heading,
  Text,
  List,
  ItemWrapper,
  Item,
  Icon,
  Name,
  Description,
} from './styles'

import { ReactComponent as StepImageFirst } from 'assets/svg/steps/step-icon-1.svg'
import { ReactComponent as StepImageSecond } from 'assets/svg/steps/step-icon-2.svg'
import { ReactComponent as StepImageThird } from 'assets/svg/steps/step-icon-3.svg'

const stepsList = [
  {
    icon: <StepImageFirst />,
    name: 'Brand Recognition',
    description:
      'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.',
  },
  {
    icon: <StepImageSecond />,
    name: 'Detailed Records',
    description:
      'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
  },
  {
    icon: <StepImageThird />,
    name: 'Fully Customizable',
    description:
      'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
  },
]

const Steps = () => (
  <SectionWrapper>
    <Caption>
      <Heading>Advanced Statistics</Heading>
      <Text>
        Track how your links are performing across the web with our advanced statistics dashboard.
      </Text>
    </Caption>
    <List>
      {stepsList.map(({ icon, name, description }) => (
        <ItemWrapper key={name}>
          <Item>
            <Icon>{icon}</Icon>
            <Name>{name}</Name>
            <Description>{description}</Description>
          </Item>
        </ItemWrapper>
      ))}
    </List>
  </SectionWrapper>
)

export default Steps
