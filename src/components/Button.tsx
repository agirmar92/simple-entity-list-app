import { ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  onClick?: () => void
  type?: 'submit' | 'reset' | 'button'
}

const Button = ({ children, onClick, type }: ButtonProps) => {
  return (
    <button
      className="bg-pumpkin px-4 py-2 rounded text-white font-medium hover:bg-pumpkin-hover hover:shadow-sm"
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  )
}

export { Button }
