import { useForm } from 'react-hook-form'

import { ControlledCheckbox } from '@/components/controled/controlled-checkbox/controlled-checkbox'
import { Button } from '@/components/ui/button'
import { TextField } from '@/components/ui/textField'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const loginSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(3, 'Too short password'),
  rememberMe: z.boolean().optional(),
})

type FormValues = z.infer<typeof loginSchema>

export const LoginForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = (data: FormValues) => console.log(data)

  return (
    <>
      <DevTool control={control} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField errorMessage={errors.email?.message} {...register('email')} label={'email'} />
        <TextField
          errorMessage={errors.password?.message}
          {...register('password')}
          label={'password'}
        />
        <ControlledCheckbox control={control} label={'remember me'} name={'rememberMe'} />
        <Button type={'submit'}>Submit</Button>
      </form>
    </>
  )
}
