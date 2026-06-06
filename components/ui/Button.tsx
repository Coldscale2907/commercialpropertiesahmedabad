import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes, forwardRef } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'gold' | 'white-outline'
  size?: 'sm' | 'md' | 'lg'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center font-inter font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
          {
            'bg-gold text-charcoal hover:bg-opacity-90 focus:ring-gold':
              variant === 'primary' || variant === 'gold',
            'border-2 border-gold text-gold hover:bg-gold hover:text-charcoal focus:ring-gold':
              variant === 'outline',
            'bg-transparent text-dark-text hover:bg-light-gray focus:ring-border-gray':
              variant === 'ghost',
            'border-2 border-white text-white hover:bg-white hover:text-charcoal focus:ring-white':
              variant === 'white-outline',
          },
          {
            'px-4 py-2 text-sm rounded-sm': size === 'sm',
            'px-6 py-3 text-base rounded-sm': size === 'md',
            'px-8 py-4 text-lg rounded-sm': size === 'lg',
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
