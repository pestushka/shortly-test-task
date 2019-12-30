import styled, { css } from 'styled-components'
import Section from 'components/atoms/Section'
import Button from 'components/atoms/Button'
import { color, defaultTransition, screen } from 'config/theme'

export const SectionWrapper = styled(Section)`
  background: ${color.gray_light};
  margin-top: 84px;
`

export const Form = styled.form`
  width: 100%;
  background-image: ${({ background }) => `url(${background})`};
  background-size: cover;
  background-position: center;
  margin-top: -84px;

  ${screen.sm_min} {
    display: inline-flex;
    padding: 52px 64px;
    border-radius: 10px;
  }

  ${screen.sm} {
    display: inline-block;
    padding: 24px;
    border-radius: 5px;
  }
`

export const InputPlaceholder = styled.span`
  position: absolute;
  transform: translateY(-50%);
  color: ${color.dark};
  opacity: 0.5;
  pointer-events: none;
  ${defaultTransition};

  ${screen.sm_min} {
    left: 35px;
    top: 50%;
  }

  ${screen.sm} {
    left: 19px;
    top: 24px;
  }
`

export const InputError = styled.p`
  color: ${color.error};
  display: none;
  ${defaultTransition};

  ${screen.sm_min} {
    font-size: 16px;
    padding-top: 6px;
    position: absolute;
    top: 100%;
    left: 0;
  }

  ${screen.sm} {
    font-size: 12px;
    padding-top: 4px;
  }
`

export const Input = styled.input`
  border-radius: 10px;
  width: 100%;
  border: 3px solid transparent;
  ${defaultTransition};

  &:focus + ${InputPlaceholder} {
    opacity: 1;
  }

  ${screen.sm_min} {
    padding: 0 32px;
    height: 100%;

    &:hover + ${InputPlaceholder} {
      opacity: 0.8;
    }
  }

  ${screen.sm} {
    padding: 0 16px;
    height: 48px;
  }
`

export const InputContainer = styled.div`
  flex-grow: 1;
  position: relative;

  ${({ state: { isValid, value } }) =>
    (!isValid &&
      css`
        ${Input} {
          border-color: ${color.error};
        }

        ${InputError} {
          display: block;
        }

        ${InputPlaceholder} {
          color: ${color.error};
        }
      `) ||
    (value !== '' &&
      css`
        ${Input} + ${InputPlaceholder} {
          opacity: 0;
          transition: none;
        }
      `)}

  ${screen.sm_min} {
    margin-right: 24px;
    font-size: 20px;
  }

  ${screen.sm} {
    margin-bottom: 16px;
    font-size: 16px;
  }
`

export const ButtonMain = styled(Button)`
  border-radius: 10px;

  ${screen.sm_min} {
    font-size: 20px;
    padding: 17px 40px;
  }

  ${screen.sm} {
    width: 100%;
    font-size: 18px;
    padding: 10px 24px;
  }
`

export const Item = styled.div`
  display: flex;
  align-items: center;
  background: ${color.white};
  border-radius: 5px;

  &:not(:last-of-type) {
    ${screen.sm_min} {
      margin-bottom: 16px;
    }

    ${screen.sm} {
      margin-bottom: 24px;
    }
  }

  &:first-of-type {
    margin-top: 24px;
  }

  ${screen.sm_min} {
    padding: 16px 24px;
    font-size: 20px;
  }

  ${screen.sm} {
    flex-direction: column;
    align-items: flex-start;
    font-size: 16px;
    padding: 16px;
  }
`

export const Value = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;

  ${screen.sm_min} {
    flex-grow: 1;
    padding-left: 8px;
    padding-right: 32px;
  }
`

export const Result = styled.p`
  color: ${color.accent};

  ${screen.sm_min} {
    flex-shrink: 0;
  }

  ${screen.sm} {
    margin: 12px 0;

    &:before {
      content: '';
      height: 1px;
      display: block;
      width: calc(100% + 32px);
      margin-left: -16px;
      background: ${color.gray_dark};
      opacity: 0.25;
      margin-bottom: 12px;
    }
  }
`

export const ButtonWrapper = styled(Button)`
  border-radius: 5px;
  padding: 8px 20px;

  ${screen.sm_min} {
    font-size: 15px;
    margin-left: 24px;
    min-width: 105px;
  }

  ${screen.sm} {
    font-size: 16px;
    width: 100%;
  }

  ${({ isCopied }) =>
    isCopied &&
    css`
      background-color: ${color.main_dark};

      &:hover {
        background-color: ${color.main_dark};
      }
    `}
`
