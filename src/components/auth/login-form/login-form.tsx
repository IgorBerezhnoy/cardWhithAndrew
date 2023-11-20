import { useController, useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { TextField } from '@/components/ui/textField'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

type FormValues = {
  email: string
  password: string
  rememberMe: boolean
}

const loginSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(3, 'Too short password'),
  rememberMe: z.boolean().optional(),
})

export const LoginForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
  })

  const {
    field: { onChange, value },
  } = useController({
    control,
    defaultValue: false,
    name: 'rememberMe',
  })
  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  console.log(errors)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField errorMessage={errors.email?.message} {...register('email')} label={'email'} />
      <TextField
        errorMessage={errors.password?.message}
        {...register('password')}
        label={'password'}
      />
      <Checkbox
        {...register('rememberMe')}
        checked={value}
        label={'remember me'}
        onChange={onChange}
      />
      <Button type={'submit'}>Submit</Button>
    </form>
  )
}
