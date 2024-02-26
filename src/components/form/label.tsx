import { ComponentProps } from 'react'

export type LabelTypes = ComponentProps<'label'>

export function Label(props: LabelTypes) {
  return <label className="text-sm font-bold text-primary-500" {...props} />
}
