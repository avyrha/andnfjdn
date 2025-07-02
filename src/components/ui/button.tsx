import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg hover:shadow-primary/25 rounded-2xl font-semibold hover-lift",
        secondary: "glass border border-glow text-white hover:bg-white/10 rounded-2xl font-semibold hover-lift",
        tertiary: "text-primary hover:bg-primary/10 rounded-2xl font-semibold hover-lift",
        destructive: "bg-gradient-to-r from-destructive to-warning text-white hover:shadow-lg hover:shadow-destructive/25 rounded-2xl font-semibold hover-lift",
        outline: "glass border border-glow text-white hover:bg-white/10 rounded-2xl font-semibold hover-lift",
        ghost: "text-white hover:bg-white/10 rounded-2xl font-semibold hover-lift",
        link: "text-primary underline-offset-4 hover:underline h-auto p-0",
        neon: "btn-neon rounded-2xl font-semibold",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-10 px-4 text-xs",
        lg: "h-14 px-8 text-base",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }