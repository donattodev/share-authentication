import { ComponentProps, ReactNode } from 'react'

export type FieldTypes = ComponentProps<'div'> & {
  children: ReactNode
}
export function Field({ children }: FieldTypes) {
  return <div className="flex flex-col gap-1">{children}</div>
}
