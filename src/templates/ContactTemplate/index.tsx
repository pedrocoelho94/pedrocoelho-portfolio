import axios from 'axios'

import BaseTemplate from 'templates/BaseTemplate'
import { Container } from 'components/Container'

import * as S from './styles'
import { Input } from 'components/Form/Input'
import { Textarea } from 'components/Form/Textarea'

import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import Button from 'components/Form/Button'

type ContactFormData = {
  name: string
  email: string
  message: string
}

const ContactFormSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  message: yup
    .string()
    .required('É necessário escrever uma mensagem antes de enviar')
})

const ContactTemplate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: yupResolver(ContactFormSchema)
  })

  const [isSent, setIsSent] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessageForm, setErrorMessageForm] = useState('')

  const handleForm: SubmitHandler<ContactFormData> = async (values) => {
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const formData = new FormData()
    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, value)
    })
    axios
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      .post(process.env.NEXT_PUBLIC_GETFORMIO_ENDPOINT!, formData)
      .then(() => {
        setIsSent(true)
        setErrorMessageForm('')
      })
      .catch(() => {
        setErrorMessageForm(
          'Ocorreu um erro ao enviar o formulário, tente novamente!'
        )
        setIsSent(false)
        setIsSubmitting(false)
      })
  }

  return (
    <BaseTemplate>
      <Container>
        <S.Wrapper>
          <S.Title>Entre em contato</S.Title>

          <S.Description>
            Im always on the lookout for fun new projects so if youve got
            something that you think we can work together on, send me a message
            and we can talk about it!
          </S.Description>

          {!isSent && (
            <S.Form onSubmit={handleSubmit(handleForm)}>
              <Input
                {...register('name')}
                name="name"
                error={errors.name}
                type="text"
                placeholder="Nome"
              />

              <Input
                {...register('email')}
                name="email"
                error={errors.email}
                type="text"
                placeholder="E-mail"
              />

              <Textarea
                {...register('message')}
                name="message"
                error={errors.message}
                placeholder="Mensagem"
              />

              <Button disabled={isSubmitting} type="submit">
                {isSubmitting ? 'Enviando...' : 'Enviar'}
              </Button>

              {errorMessageForm ? (
                <S.ErrorMessage>{errorMessageForm}</S.ErrorMessage>
              ) : (
                ''
              )}
            </S.Form>
          )}

          {isSent ? (
            <S.ConfirmationMessage>
              Sua mensagem foi enviada com sucesso. <br /> Normalmente o tempo
              de resposta é de até 24 horas. <br /> Obrigado!
            </S.ConfirmationMessage>
          ) : (
            ''
          )}
        </S.Wrapper>
      </Container>
    </BaseTemplate>
  )
}

export default ContactTemplate
