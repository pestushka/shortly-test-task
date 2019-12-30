import React, { useState } from 'react'
import useClipboard from 'react-use-clipboard'
import {
  SectionWrapper,
  Form,
  InputContainer,
  Input,
  InputPlaceholder,
  InputError,
  ButtonMain,
  Item,
  Value,
  Result,
  ButtonWrapper,
} from './styles'
import background from 'assets/banner-background.png'

function generateShortLink({ formState, linksList, setFormState, setLinksList }) {
  if (formState.value !== '') {
    const randomHash = Math.random()
      .toString(36)
      .substring(7)

    setLinksList([
      ...linksList,
      { value: formState.value, result: `https://rel.ink/${randomHash}` },
    ])
    setFormState({ value: '', isValid: true })
  } else {
    setFormState({ value: '', isValid: false })
  }
}

const Compressor = () => {
  const [formState, setFormState] = useState({ value: '', isValid: true })
  const [linksList, setLinksList] = useState([])

  const [copyValue, setCopyValue] = useState('')
  const [isCopied, setCopied] = useClipboard(copyValue, { successDuration: 1000 })

  return (
    <SectionWrapper>
      <Form background={background} onSubmit={e => e.preventDefault()}>
        <InputContainer state={formState}>
          <Input
            type="text"
            value={formState.value}
            onChange={e =>
              setFormState({
                value: e.target.value,
                isValid: true,
              })
            }
          />
          <InputPlaceholder>Shorten a link here...</InputPlaceholder>
          <InputError>Please add a link</InputError>
        </InputContainer>
        <ButtonMain
          onClick={() => generateShortLink({ formState, linksList, setFormState, setLinksList })}
        >
          Shorten It!
        </ButtonMain>
      </Form>
      {linksList.map(({ value, result }) => (
        <Item key={result}>
          <Value>{value}</Value>
          <Result>{result}</Result>
          <ButtonWrapper
            isCopied={copyValue === result && isCopied}
            onClick={() => setCopyValue(result) || setCopied()}
          >
            {copyValue === result && isCopied ? 'Copied!' : 'Copy'}
          </ButtonWrapper>
        </Item>
      ))}
    </SectionWrapper>
  )
}

export default Compressor
