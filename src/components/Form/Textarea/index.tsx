import {
  forwardRef,
  ForwardRefRenderFunction,
  TextareaHTMLAttributes
} from 'react'
import { FieldErrors } from 'react-hook-form'
import * as S from './styles'

type TextAreaProps = {
  name: string
  label?: string
  error?: FieldErrors
} & TextareaHTMLAttributes<HTMLTextAreaElement>

const TextAreaBase: ForwardRefRenderFunction<
  HTMLTextAreaElement,
  TextAreaProps
> = ({ name, label, error = null, ...rest }, ref) => (
  <S.Wrapper isInvalid={!!error}>
    {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
    <S.Textarea name={name} id={name} ref={ref} {...rest} />
    {!!error && <S.FormErrorMessage>{error.message}</S.FormErrorMessage>}
  </S.Wrapper>
)

export const Textarea = forwardRef(TextAreaBase)
