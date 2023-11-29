'use client'

type Props = {
  onSend: MouseEventHandler<HTMLButtonElement>
}
import { MouseEventHandler } from 'react'
import { useFormStatus } from 'react-dom'
 
export function SubmitButton({onSend}: Props) {
  const { pending } = useFormStatus()
 
  return (
    <button type="button" aria-disabled={pending} className='border-2 px-10' onClick={onSend}>
      Send
    </button>
  )
}