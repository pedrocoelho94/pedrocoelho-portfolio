import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes
} from 'react'
import { FieldError } from 'react-hook-form'
import * as S from './styles'

type InputProps = {
  name: string
  label?: string
  error?: FieldError
} & InputHTMLAttributes<HTMLInputElement>

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, error = null, ...rest },
  ref
) => (
  <S.Wrapper isInvalid={!!error}>
    {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
    <S.Input name={name} id={name} ref={ref} {...rest} />
    {!!error && <S.FormErrorMessage>{error.message}</S.FormErrorMessage>}
  </S.Wrapper>
)

export const Input = forwardRef(InputBase)
