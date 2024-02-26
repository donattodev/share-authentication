import { ComponentProps } from 'react'

export type InputTypes = ComponentProps<'input'>

export function Input(props: InputTypes) {
  return (
    <input
      className="h-12 w-full rounded bg-gray-800 px-4 outline-none ring-primary-500 placeholder:text-sm focus:ring-2"
      {...props}
    />
  )
}
