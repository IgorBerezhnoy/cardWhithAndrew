import { ComponentPropsWithoutRef } from 'react'

import s from './button.module.scss'
import {Story} from '@storybook/react';

export type ButtonProps = {
  as: any
  fullWidth?: boolean
  variant?: 'link' | 'primary' | 'secondary' | 'tertiary'
} & ComponentPropsWithoutRef<'button'>

export const Button = ({
  as: Component = 'button',
  className,
  fullWidth,
  variant = 'primary',
  ...rest
}: ButtonProps) => {
  return (
    <Component className={`${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`} {...rest} />
  )
}

export const AsLink: Story = {
  args: {
    as: 'a',
    children: 'Link that looks like a button',
    variant: 'primary',
  },
}